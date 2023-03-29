import { FC } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { AppState, AppUpdate } from '../interfaces';
import './App.css';
import { Welcome } from './views/Welcome';

const App: FC<{ state: AppState; updateState: AppUpdate }> = ({
  state,
  updateState,
}) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Welcome state={state} updateState={updateState} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
