import { FC } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { AppState, AppUpdate, CrossWindowState } from '../interfaces';
import './App.css';
import { Welcome } from './views/Welcome';

const App: FC<{
  state: AppState;
  updateState: AppUpdate;
  crossWindowState: CrossWindowState;
}> = ({ state, updateState, crossWindowState }) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Welcome
              state={state}
              updateState={updateState}
              crossWindowState={crossWindowState}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
