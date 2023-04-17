import { createRoot } from 'react-dom/client';
import {
  AppState,
  AppUpdate,
  AppUpdateStatus,
  Channels,
  CrossWindowState,
  initAppState,
} from '@interfaces';
import App from './App';

let state: AppState = initAppState;
let updateState: AppUpdate = {
  status: AppUpdateStatus.nothing,
  message: null,
};

let crossWindowState: CrossWindowState = {
  isAuthenticated: false,
};

const container = document.getElementById('root')!;
const root = createRoot(container);
function renderAppComponent() {
  root.render(
    <App
      state={state}
      updateState={updateState}
      crossWindowState={crossWindowState}
    />
  );
}
renderAppComponent();

window.electron.ipcRenderer.on(
  Channels.changeState,
  (updatedState: AppState) => {
    state = {
      ...updatedState,
      localUserPath:
        updatedState.localUserPath !== ''
          ? updatedState.localUserPath
          : state.localUserPath,
    };
    renderAppComponent();
  }
);

window.electron.ipcRenderer.on(
  Channels.appUpdate,
  (newUpdateState: AppUpdate) => {
    updateState = newUpdateState;
    renderAppComponent();
  }
);

window.electron.ipcRenderer.on(
  Channels.crossWindow,
  (newCrossWindowState: CrossWindowState) => {
    crossWindowState = newCrossWindowState;
    renderAppComponent();
  }
);
