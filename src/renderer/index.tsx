import { createRoot } from 'react-dom/client';
import {
  AppState,
  AppUpdate,
  AppUpdateStatus,
  Channels,
  CrossWindowState,
  Processes,
} from '@interfaces';
import App from './App';

let state: AppState = {
  progress: 0,
  localUserPath: '',
  process: Processes.openDialog,
  isFinished: false,
};
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
    const shouldRender =
      updatedState.localUserPath !== '' ||
      updatedState.progress === null ||
      state.progress === null ||
      updatedState.progress > state.progress + 0.05;
    if (shouldRender) {
      state = {
        ...updatedState,
        localUserPath:
          updatedState.localUserPath !== ''
            ? updatedState.localUserPath
            : state.localUserPath,
      };
      renderAppComponent();
    }
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
