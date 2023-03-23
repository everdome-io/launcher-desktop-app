import { FC } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { AppState } from '../interfaces';
import './bootstrap.css';
import './App.css';
import { Welcome } from './views/Welcome';

const App: FC<{ state: AppState }> = ({ state }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome state={state} />} />
      </Routes>
    </Router>
  );
};

export default App;
