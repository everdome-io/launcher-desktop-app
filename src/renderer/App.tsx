import { FC, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { AppState, Channels } from '../interfaces';
import './App.css';
import './bootstrap.css';

const localPath = '/Users/pawelmizwa/PCRepos/launcher-desktop-app/src/app';

const FileDownloader: FC<{ state: AppState }> = ({
  state: { isFileDownloaded, duringDownload, progress, isExtracted },
}) => {
  const handleDownload = () => {
    window.electron.ipcRenderer.sendMessage(Channels.downloadProcess, {
      link: 'https://github.com/everdome-io/launcher-desktop-app/releases/download/untagged-728ff4e3b2d5df3c3dd3/Product.Name.app.tar.gz',
      filepath: localPath,
    });
  };
  const handlePlay = () => {
    window.electron.ipcRenderer.sendMessage(
      Channels.openGame,
      `${localPath}/steam.dmg`
    );
  };
  useEffect(() => {
    if (isFileDownloaded)
      window.electron.ipcRenderer.sendMessage(Channels.extractGame, {
        filepath: localPath,
      });
  }, [isFileDownloaded]);
  console.log(isFileDownloaded, duringDownload, progress, isExtracted);

  return (
    <div>
      <div className="FileDownloader">
        {!isFileDownloaded && (
          <button
            type="button"
            className="my-5 btn btn-danger"
            onClick={handleDownload}
          >
            Download 1.0.0
          </button>
        )}
        {isFileDownloaded && <div>Pobrano</div>}
        {isExtracted && (
          <button
            type="button"
            className="my-5 btn btn-danger d-none"
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
