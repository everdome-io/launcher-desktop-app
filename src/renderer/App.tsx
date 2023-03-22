import { FC } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { AppState } from '../interfaces';
import './App.css';
import { FileDownloader } from './views/FileDownloader';

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
