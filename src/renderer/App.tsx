import { FC } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { AppState, AppUpdate, CrossWindowState } from '../interfaces';
import './App.css';
import { Main } from './views/Main';
import { TermsOfService } from './views/TermsOfService';
import { ConnectOrSkip } from './views/ConnectOrSkip';
import { HowTo } from './views/HowTo';
import { AvatarList } from './views/AvatarList';
import { Help } from './views/Help';

const App: FC<{
  state: AppState;
  updateState: AppUpdate;
  crossWindowState: CrossWindowState;
}> = ({ state, updateState, crossWindowState }) => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              state={state}
              updateState={updateState}
              crossWindowState={crossWindowState}
            />
          }
        />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/connect-or-skip" element={<ConnectOrSkip />} />
        <Route path="/how-to" element={<HowTo />} />
        <Route path="/choose-avatar" element={<AvatarList beforePlay />} />
        <Route
          path="/help"
          element={<Help webViewLoading={crossWindowState.webViewLoading} />}
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
