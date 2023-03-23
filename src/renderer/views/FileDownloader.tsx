import { FC, useEffect } from 'react';
import { AppState, Channels } from '../../interfaces';

export const FileDownloader: FC<{ state: AppState }> = ({
  state: {
    isDownloaded,
    duringDownload,
    downloadProgress,
    extractProgress,
    duringExtract,
    isExtracted,
    localUserPath,
  },
}) => {
  let className = 'DownloadButton';
  let buttonText = 'DOWNLOAD';
  let progressText = null;
  const couldDownload =
    !isDownloaded &&
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
    buttonText = `${downloadProgress.toFixed(2)} %`;
    progressText = 'Downloading...';
  } else if (duringExtract) {
    className = 'DuringDownloadButton';
    buttonText = `${extractProgress.toFixed(2)} %`;
    progressText = 'Extracting...';
  } else if (isExtracted) {
    className = 'DownloadButton';
    buttonText = 'PLAY';
    progressText = null;
  }
  const handleOnClick = () => {
    if (isExtracted) {
      window.electron.ipcRenderer.sendMessage(
        Channels.openGame,
        `${localUserPath}/steam.dmg`
      );
    } else {
      window.electron.ipcRenderer.sendMessage(Channels.openDialog, null);
    }
  };
  useEffect(() => {
    if (isDownloaded)
      window.electron.ipcRenderer.sendMessage(Channels.extractGame, {
        filepath: localUserPath,
      });
  }, [isDownloaded, localUserPath]);

  return (
    <div>
      <div className="FileDownloader">
        <button
          type="button"
          className={className}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
          onClick={handleOnClick}
        >
          <div className="DownloadButtonText">{buttonText}</div>
          {progressText !== null && (
            <div style={{ color: 'white', fontSize: '12px' }}>
              {progressText}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
