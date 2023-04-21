import { createRoot } from 'react-dom/client';
import { AppState, Channels, CrossWindowState, Processes } from '../interfaces';
import UserProfile from './UserProfile';

let state: AppState = {
  progress: 0,
  localUserPath: '',
  process: Processes.openDialog,
  isFinished: false,
  processingSize: 0,
};

let crossWindowState: CrossWindowState = {
  isAuthenticated: false,
  errorMessage: '',
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
          : state.localUserPath,
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
