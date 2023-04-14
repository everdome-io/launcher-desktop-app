import { AppState, Channels, Processes } from '@interfaces';
import { FC } from 'react';
import chevronRight from 'assets/images/chevron-right.png';
import './FileDownloader.css';


function toShortSize(size : number){
  if(size>1000_000_000){
    size = size/1000_000_000;
    return size.toFixed(2)+" GB"
  }
  if(size>1000_000){
    size = size/1000_000;
    return size.toFixed(2)+" MB"
  }
  size = size/1000;
  return size.toFixed(2)+" KB"
}

export const FileDownloader: FC<{ state: AppState }> = ({
  state: { process, progress, localUserPath, isFinished, processingSize },
}) => {
  let className = 'ProcessButton';
  let buttonText = 'DOWNLOAD';
  let additionalInfo = null;

  const couldDownload =
    process === Processes.openDialog &&
    localUserPath !== '' &&
    localUserPath !== undefined;
  const couldExtract = process === Processes.download && isFinished;
  const couldPlay =
    (process === Processes.extract && isFinished) ||
    process === Processes.installation;

  const duringDownloadOrExtract =
    (process === Processes.download || process === Processes.extract) &&
    progress !== null;

  if (couldDownload) {
    window.electron.ipcRenderer.sendMessage(
      Channels.downloadProcess,
      localUserPath
    );
  }
  if (couldExtract) {
    console.log("starting extraction in renderer");
    window.electron.ipcRenderer.sendMessage(Channels.extractProcess, {
      filepath: localUserPath,
    });
  }

  if (couldPlay) {
    className = 'ProcessButton';
    buttonText = 'PLAY';
  } else if (duringDownloadOrExtract) {
    className = 'DuringProcessButton';
    if(process === Processes.download){
      buttonText = `${progress.toFixed(2)} %`;
    }
    else{
      buttonText = toShortSize(processingSize!);
    }
    additionalInfo =
      process === Processes.download ? 'Downloading...' : (process === Processes.extract ) ? 'Extracting...' : 'Error!!!!';
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

  return (
    <div>
      <button className="BuyNFT">Buy Genesis NFT on Opensea</button>
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
          {progress !== null &&
          progress !== 100 &&
          process === Processes.extract ? (
            <div className="ProcessButtonText">{buttonText}</div>
          ) : (
            <div className="ProcessButtonText">{buttonText}</div>
          )}
          {additionalInfo !== null && (
            <div style={{ color: 'white', fontSize: '12px' }}>
              {additionalInfo}
            </div>
          )}
        </button>
        <div className="AdditionalInfo">
          <span className="AppVersion">Version: ED-0.16.66</span>
          <a href="#">
            What’s new{' '}
            <img src={chevronRight} style={{ verticalAlign: 'middle' }} />
          </a>
        </div>
      </div>
    </div>
  );
};
