import { createRoot } from 'react-dom/client';
import {
  AppState,
  Channels,
  CrossWindowState,
  initAppState,
} from '../interfaces';
import UserProfile from './UserProfile';

let state: AppState = initAppState;

let crossWindowState: CrossWindowState = {
  isAuthenticated: false,
};

const container = document.getElementById('root')!;
const root = createRoot(container);
function renderComponent() {
  root.render(
    <UserProfile state={state} crossWindowState={crossWindowState} />
  );
}
renderComponent();

window.electron.ipcRenderer.on(
  Channels.changeState,
  (updatedState: AppState) => {
    state = {
      ...updatedState,
      localUserPath:
        updatedState.localUserPath !== ''
          ? updatedState.localUserPath
          : initAppState.localUserPath,
    };
    renderComponent();
  }
);

window.electron.ipcRenderer.on(
  Channels.crossWindow,
  (newCrossWindowState: CrossWindowState) => {
    crossWindowState = newCrossWindowState;
    renderComponent();
  }
);
