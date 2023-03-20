import { createRoot } from 'react-dom/client';
import { AppState, Channels } from '../interfaces';
import App from './App';

let state: AppState = {
  isFileDownloaded: false,
  duringDownload: false,
  isExtracted: false,
  progress: 0,
};

const container = document.getElementById('root')!;
const root = createRoot(container);
function renderAppComponent() {
  root.render(<App state={state} />);
}
renderAppComponent();

window.electron.ipcRenderer.on(Channels.changeState, (updatedState) => {
  state = updatedState;
  renderAppComponent();
});
