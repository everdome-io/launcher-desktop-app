import { createRoot } from 'react-dom/client';
import { AppState, Channels, CrossWindowState, Processes } from '../interfaces';
import UserProfile from './UserProfile';

let state: AppState = {
  progress: 0,
  localUserPath: '',
  process: Processes.openDialog,
  isFinished: false,
};

const container = document.getElementById('root')!;
const root = createRoot(container);
function renderComponent() {
  root.render(<UserProfile state={state} />);
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
