import { FC } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { AppConfig, Channels } from '../interfaces';
import './App.css';

// eslint-disable-next-line react/function-component-definition
const Hello: FC<{ config: AppConfig }> = ({ config: { isFileDownloaded } }) => {
  const handleDownload = () => {
    window.electron.ipcRenderer.sendMessage(Channels.downloadProcess, {
      link: 'https://github.com/Gann4/Thirdym/releases/download/0.1.0-alpha/Thirdym.v0.1.0-alpha.zip',
      filepath: '/Users/pawelmizwa/PCRepos/launcher-desktop-app/src/app',
    });
  };
  return (
    <div>
      <div className="Hello">
        <button type="button" onClick={handleDownload}>
          Download
        </button>
        {isFileDownloaded && <div>Pobrano</div>}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/function-component-definition
const App: FC<{ config: AppConfig }> = ({ config }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello config={config} />} />
      </Routes>
    </Router>
  );
};

export default App;
