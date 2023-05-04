import { createRoot } from 'react-dom/client';
import { initializeSentry } from '../common/sentry';
import { Channels, CrossWindowState } from '../interfaces';
import UserProfile from './UserProfile';

initializeSentry();

let crossWindowState: CrossWindowState = {
  isAuthenticated: false,
  errorMessage: '',
};

const container = document.getElementById('root')!;
const root = createRoot(container);
function renderComponent() {
  root.render(<UserProfile crossWindowState={crossWindowState} />);
}
renderComponent();

window.electron.ipcRenderer.on(
  Channels.crossWindow,
  (newCrossWindowState: CrossWindowState) => {
    crossWindowState = newCrossWindowState;
    renderComponent();
  }
);
