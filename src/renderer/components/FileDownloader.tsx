import { AppState, Channels, Processes } from '@interfaces';
import { FC, useEffect } from 'react';

export const FileDownloader: FC<{ state: AppState }> = ({
  state: { process, progress, localUserPath, isFinished },
}) => {
  let className = 'ProcessButton';
  let buttonText = 'DOWNLOAD';
  let progressText = null;

  const couldDownload =
    process === Processes.openDialog &&
    localUserPath !== '' &&
    localUserPath !== undefined;
  const couldExtract = process === Processes.download && isFinished;
  const couldPlay = process === Processes.extract && isFinished;

  if (couldDownload) {
    window.electron.ipcRenderer.sendMessage(
      Channels.downloadProcess,
      localUserPath
    );
  }
  if (couldPlay) {
    className = 'ProcessButton';
    buttonText = 'PLAY';
    progressText = null;
  } else if (
    (process === Processes.download || process === Processes.extract) &&
    progress !== null
  ) {
    className = 'DuringProcessButton';
    buttonText = `${progress.toFixed(2)} %`;
    progressText =
      process === Processes.download ? 'Downloading...' : 'Extracting...';
  }
  const handleOnClick = () => {
    if (couldPlay) {
      window.electron.ipcRenderer.sendMessage(
        Channels.installationProcess,
        localUserPath
      );
    } else if (process === Processes.openDialog) {
      window.electron.ipcRenderer.sendMessage(Channels.openDialog, null);
    }
  };
  useEffect(() => {
    if (couldExtract)
      window.electron.ipcRenderer.sendMessage(Channels.extractProcess, {
        filepath: localUserPath,
      });
  }, [couldExtract, localUserPath]);

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
          <div className="ProcessButtonText">{buttonText}</div>
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
