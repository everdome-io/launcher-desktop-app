import { createRoot } from 'react-dom/client';
import { AppConfig, Channels } from '../interfaces';
import App from './App';

let config: AppConfig = {
  isFileDownloaded: false,
  duringDownload: false,
  progress: 0,
};

const container = document.getElementById('root')!;
const root = createRoot(container);
function renderAppComponent() {
  root.render(<App config={config} />);
}
renderAppComponent();

window.electron.ipcRenderer.on(Channels.changeConfig, (updatedConfig) => {
  config = updatedConfig;
  renderAppComponent();
});
