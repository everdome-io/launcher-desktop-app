import { FC, useEffect } from 'react';
import { AppState, Channels } from '../../interfaces';

export const FileDownloader: FC<{ state: AppState }> = ({
  state: {
    isFileDownloaded,
    duringDownload,
    progress,
    isExtracted,
    localUserPath,
  },
}) => {
  let className = 'DownloadButton';
  let buttonText = 'DOWNLOAD';
  const couldDownload =
    !isFileDownloaded &&
    !duringDownload &&
    !isExtracted &&
    localUserPath !== '' &&
    localUserPath !== undefined;
  if (couldDownload) {
    window.electron.ipcRenderer.sendMessage(Channels.downloadProcess, {
      link: 'https://metahero-prod-game-builds.s3.amazonaws.com/Everdome_Client_Win64_Shipping_002234.rar',
      filepath: localUserPath,
    });
  }
  if (duringDownload) {
    className = 'DuringDownloadButton';
    buttonText = `${progress.toFixed(2)} %`;
  } else if (isExtracted) {
    className = 'DownloadButton';
    buttonText = 'PLAY';
  }
  const handleOnClick = () => {
    if (isExtracted) {
      window.electron.ipcRenderer.sendMessage(
        Channels.openGame,
        `/Users/pawelmizwa/PCRepos/launcher-desktop-app/src/app/steam.dmg`
      );
    } else {
      window.electron.ipcRenderer.sendMessage(Channels.openDialog, null);
    }
  };
  useEffect(() => {
    if (isFileDownloaded)
      window.electron.ipcRenderer.sendMessage(Channels.extractGame, {
        filepath: localUserPath,
      });
  }, [isFileDownloaded, localUserPath]);

  return (
    <div>
      <div className="FileDownloader">
        <button type="button" className={className} onClick={handleOnClick}>
          <div className="DownloadButtonText">{buttonText}</div>
        </button>
        <div className="DownloadVerText">Version: ED-0.16.66</div>
      </div>
    </div>
  );
};
