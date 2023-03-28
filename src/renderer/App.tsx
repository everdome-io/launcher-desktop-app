import { FC } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { AppState, AppUpdateStatus } from '../interfaces';
import './App.css';
import { Welcome } from './views/Welcome';

const App: FC<{ state: AppState; updateStatus: AppUpdateStatus }> = ({
  state,
  updateStatus,
}) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Welcome state={state} updateStatus={updateStatus} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
