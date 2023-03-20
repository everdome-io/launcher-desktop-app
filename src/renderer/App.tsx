import { FC, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { AppState, Channels } from '../interfaces';
import './App.css';
import './bootstrap.css';

const filePath = '/Users/pawelmizwa/PCRepos/launcher-desktop-app/src/app';
const FileDownloader: FC<{ state: AppState }> = ({
  state: { isFileDownloaded, duringDownload, progress, isExtracted },
}) => {
  const handleDownload = () => {
    window.electron.ipcRenderer.sendMessage(Channels.downloadProcess, {
      link: 'https://github.com/Gann4/Thirdym/releases/download/0.1.0-alpha/Thirdym.v0.1.0-alpha.zip',
      filepath: filePath,
    });
  };
  useEffect(() => {
    if (isFileDownloaded)
      window.electron.ipcRenderer.sendMessage(Channels.extractGame, {
        filepath: filePath,
      });
  }, [isFileDownloaded]);
  console.log(progress);

  return (
    <div>
      <div className="FileDownloader">
        <button type="button" onClick={handleDownload}>
          Download
        </button>
        {isFileDownloaded && <div>Pobrano</div>}
        {isExtracted && <div>Wypakowano</div>}
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
