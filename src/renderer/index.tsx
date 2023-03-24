import { createRoot } from 'react-dom/client';
import { AppState, Channels, Processes } from '../interfaces';
import App from './App';

let state: AppState = {
  progress: 0,
  localUserPath: '',
  process: Processes.openDialog,
};

const container = document.getElementById('root')!;
const root = createRoot(container);
function renderAppComponent() {
  root.render(<App state={state} />);
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
