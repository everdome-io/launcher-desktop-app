import { AppState, Channels, Processes } from '@interfaces';
import { FC, useState } from 'react';
import chevronRight from 'assets/images/chevron-right.png';
import styles from './FileDownloader.module.css';

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
  const [afterDownload, setAfterDownload] = useState(false);
  const [afterExtract, setAfterExtract] = useState(false);
  let className = styles.ProcessButton;
  let buttonText = 'DOWNLOAD';
  let additionalInfo = null;

  const couldUseWebLink = Boolean(window.electron.store.get('couldUseWebLink'));
  const processStageStore = window.electron.store.get(
    'processStage'
  ) as Processes;
  const buttonDisabled =
    !couldUseWebLink && processStageStore !== Processes.play;

  const duringDownloadOrExtract =
    (process === Processes.download || process === Processes.extract) &&
    progress !== null;

  if (processStageStore === Processes.download) {
    if (!afterDownload) {
      window.electron.ipcRenderer.sendMessage(Channels.downloadProcess);
      setAfterDownload(true);
    }
  }
  if (processStageStore === Processes.extract) {
    if (!afterExtract) {
      window.electron.ipcRenderer.sendMessage(Channels.extractProcess);
      setAfterExtract(true);
    }
  }

  if (processStageStore === Processes.play) {
    className = styles.ProcessButton;
    buttonText = 'PLAY';
  } else if (duringDownloadOrExtract) {
    className = styles.DuringProcessButton;
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
      window.electron.ipcRenderer.sendMessage(Channels.playProcess);
    } else if (processStageStore === Processes.openDialog) {
      window.electron.ipcRenderer.sendMessage(Channels.openDialog);
    }
  };

  return (
    <div>
      <button className={styles.BuyNFT}>Buy Genesis NFT on Opensea</button>
      <div className={styles.FileDownloader}>
        <button
          type="button"
          className={className}
          disabled={buttonDisabled}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
          onClick={handleOnClick}
        >
          <div className="ProcessButtonText">{buttonText}</div>
          {additionalInfo !== null && (
            <div
              style={{ color: 'black', fontSize: '12px', paddingTop: '6px' }}
            >
              {additionalInfo}
            </div>
          )}
        </button>
        <div className={styles.AdditionalInfo}>
          <span className={styles.AppVersion}>Version: ED-0.16.66</span>
          <a href="#">
            What’s new{' '}
            <img src={chevronRight} style={{ verticalAlign: 'middle' }} />
          </a>
        </div>
      </div>
    </div>
  );
};
