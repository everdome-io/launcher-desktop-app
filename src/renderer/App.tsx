import { FC, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import {
  AppState,
  AppUpdate,
  CrossWindowState,
  UserAttributes,
} from '../interfaces';
import './App.css';
import { Main } from './views/Main';
import { TermsOfService } from './views/TermsOfService';
import { ConnectOrSkip } from './views/ConnectOrSkip';
import { HowTo } from './views/HowTo';
import { AvatarList } from './views/AvatarList';
import { generateFakeEthAddress } from '@interfaces/publicKeyGenerator';

const App: FC<{
  state: AppState;
  updateState: AppUpdate;
  crossWindowState: CrossWindowState;
}> = ({ state, updateState, crossWindowState }) => {
  const userId = window.electron.store.get('userId');
  const [userAttributes, setUserAttributes] = useState<UserAttributes>({
    userId,
    publicKey: generateFakeEthAddress(),
    nickName: null,
    isFakePublicKey: true,
    avatarId: null,
  });

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
        <Route path="/choose-avatar" element={<AvatarList />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
