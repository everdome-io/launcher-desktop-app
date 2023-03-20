import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Channels } from '../interfaces';
import './App.css';

function Hello() {
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
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
