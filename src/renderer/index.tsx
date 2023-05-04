import { createRoot } from 'react-dom/client';
import {
  AppState,
  AppUpdate,
  AppUpdateStatus,
  Channels,
  CrossWindowState,
  Processes,
} from '@interfaces';
import { initializeSentry } from '../common/sentry';
import App from './App';

initializeSentry();

let state: AppState = {
  progress: 0,
  localUserPath: '',
  process: Processes.openDialog,
  isFinished: false,
  processingSize: 0,
};
let updateState: AppUpdate = {
  status: AppUpdateStatus.nothing,
  message: null,
};

let crossWindowState: CrossWindowState = {
  isAuthenticated: false,
  errorMessage: '',
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

window.electron.ipcRenderer.on(
  Channels.acceptTerms,
  (updatedState: AppState) => {
    state = { ...updatedState };
    renderAppComponent();
  }
);

window.electron.ipcRenderer.once('downloadLatestWindows', () => {
  const latestWindowsVersion = window.electron.store.get(
    'latestWindowsVersion'
  );
  const url = `https://github.com/everdome-io/launcher-desktop-app/releases/download/v${latestWindowsVersion}/OKX-Collective-Metaverse-Setup-${latestWindowsVersion}.exe`;
  window.open(url, '_blank');
  window.electron.ipcRenderer.sendMessage('closeApp');
});