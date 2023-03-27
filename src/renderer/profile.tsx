import { createRoot } from 'react-dom/client';
import { AppState, Channels } from '../interfaces';
import UserProfile from './UserProfile';

let state: AppState = {
  isDownloaded: false,
  duringDownload: false,
  isExtracted: false,
  duringExtract: false,
  downloadProgress: 0,
  extractProgress: 0,
  localUserPath: '',
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