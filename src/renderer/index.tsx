import { createRoot } from 'react-dom/client';
import { AppConfig, Channels, DownloadStatus } from '../interfaces';
import App from './App';

const initialConfig: AppConfig = { isFileDownloaded: false };

const container = document.getElementById('root')!;
const root = createRoot(container);
function renderAppComponent() {
  root.render(<App config={initialConfig} />);
}
renderAppComponent();

window.electron.ipcRenderer.once(Channels.downloadProcess, (text) => {
  if (text === DownloadStatus.finished) {
    initialConfig.isFileDownloaded = true;
    renderAppComponent();
  }
});
