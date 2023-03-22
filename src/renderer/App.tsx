import { FC, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { AppState, Channels } from '../interfaces';
import './App.css';
import './bootstrap.css';

const FileDownloader: FC<{ state: AppState }> = ({
  state: {
    isFileDownloaded,
    duringDownload,
    progress,
    isExtracted,
    localUserPath,
  },
}) => {
  const handleDownload = () => {
    window.electron.ipcRenderer.sendMessage(Channels.downloadProcess, {
      link: 'https://metahero-prod-game-builds.s3.amazonaws.com/Everdome_Client_Win64_Shipping_002234.rar',
      filepath: localUserPath,
    });
  };
  const handlePickPath = () => {
    window.electron.ipcRenderer.sendMessage(Channels.openDialog, null);
  };
  const handlePlay = () => {
    window.electron.ipcRenderer.sendMessage(
      Channels.openGame,
      `/Users/pawelmizwa/PCRepos/launcher-desktop-app/src/app/steam.dmg`
    );
  };
  useEffect(() => {
    if (isFileDownloaded)
      window.electron.ipcRenderer.sendMessage(Channels.extractGame, {
        filepath: localUserPath,
      });
  }, [isFileDownloaded, localUserPath]);
  console.log(
    isFileDownloaded,
    duringDownload,
    progress,
    isExtracted,
    localUserPath
  );

  return (
    <div>
      <div className="FileDownloader">
        {localUserPath === '' && (
          <button
            type="button"
            className="my-5 btn btn-danger"
            onClick={handlePickPath}
          >
            Pick destination folder
          </button>
        )}
        {!isFileDownloaded && !isExtracted && localUserPath !== '' && (
          <button
            type="button"
            className="my-5 btn btn-danger"
            onClick={handleDownload}
          >
            Download 1.1.0
          </button>
        )}
        {isFileDownloaded && <div>Pobrano</div>}
        {isExtracted && (
          <button
            type="button"
            className="my-5 btn btn-danger"
            onClick={handlePlay}
          >
            Play
          </button>
        )}
        {duringDownload && (
          <div className="container text-center">
            <h4 id="progress-title" className="my-2 text-white">
              Downloading...
            </h4>
            <p className="my-5 text-muted" id="dl-filename">
              Everdome.zip
            </p>
            <div className="progress-bar bg-danger" role="progressbar">
              {progress.toString().split('.')[0]}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const App: FC<{ state: AppState }> = ({ state }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FileDownloader state={state} />} />
      </Routes>
    </Router>
  );
};

export default App;
