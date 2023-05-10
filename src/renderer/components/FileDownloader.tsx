import { AppState, Channels, Processes } from '@interfaces';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FileDownloader.module.css';
import { sentryEventHandler } from '@main/utils/sentryEventHandler';
import { StoreKeys } from '@interfaces/store';

function toShortSize(_size: number) {
  let size = _size;
  if (size > 1000_000_000) {
    size /= 1000_000_000;
    return `${size.toFixed(2)} GB`;
  }
  if (size > 1000_000) {
    size /= 1000_000;
    return `${size.toFixed(2)} MB`;
  }
  size /= 1000;
  return `${size.toFixed(2)} KB`;
}

export const FileDownloader: FC<{ state: AppState }> = ({
  state: { process, progress, processingSize },
}) => {
  const navigate = useNavigate();
  const [afterDownload, setAfterDownload] = useState(false);
  const [afterExtract, setAfterExtract] = useState(false);
  let className = styles.mainBtn;
  let buttonText = 'DOWNLOAD';
  let additionalInfo = null;

  const couldUseWebLink = Boolean(
    window.electron.store.get(StoreKeys.COULD_USE_WEB_LINK)
  );
  const processStageStore = window.electron.store.get(
    StoreKeys.PROCESS_STAGE
  ) as Processes;
  const buttonDisabled =
    !couldUseWebLink && processStageStore !== Processes.play;

  const duringDownloadOrExtract =
    (process === Processes.download || process === Processes.extract) &&
    progress !== null &&
    progress !== 100;

  console.log('duringDownloadOrExtract', duringDownloadOrExtract);
  console.log('couldUseWebLink', couldUseWebLink);
  console.log('processStageStore', processStageStore);

  if (processStageStore === Processes.download) {
    if (!afterDownload && !duringDownloadOrExtract) {
      window.electron.ipcRenderer.sendMessage(Channels.downloadProcess);
      setAfterDownload(true);
    }
  }
  if (processStageStore === Processes.extract) {
    if (!afterExtract && !duringDownloadOrExtract) {
      window.electron.ipcRenderer.sendMessage(Channels.extractProcess);
      setAfterExtract(true);
    }
  }

  if (processStageStore === Processes.play) {
    className = styles.playBtn;
    buttonText = 'Enter Metaverse';
  } else if (duringDownloadOrExtract) {
    className = styles.duringDownload;
    if (process === Processes.download) {
      buttonText = `${progress.toFixed(2)} %`;
    } else {
      buttonText = toShortSize(processingSize!);
    }
    additionalInfo =
      // eslint-disable-next-line no-nested-ternary
      process === Processes.download
        ? 'Downloading...'
        : process === Processes.extract
        ? 'Extracting...'
        : 'Error!!!!';
  }

  const handleOnClick = () => {
    if (processStageStore === Processes.play) {
      window.electron.ipcRenderer.sendMessage(Channels.hideProfileWindow);
      const avatarId = window.electron.store.get(StoreKeys.AVATAR_ID) as string;
      if (avatarId === undefined) {
        sentryEventHandler('EnterMetaverse - No Avatar');
        navigate('/choose-avatar');
      } else {
        sentryEventHandler('EnterMetaverse - Has Avatar');
        navigate('/how-to');
      }
    } else if (processStageStore === Processes.openDialog) {
      sentryEventHandler('Download');
      window.electron.ipcRenderer.sendMessage(Channels.openDialog);
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={className}
        onClick={handleOnClick}
        disabled={buttonDisabled}
      >
        {additionalInfo && <span>{additionalInfo}</span>}
        <span>{buttonText}</span>
      </button>
    </div>
  );
};
