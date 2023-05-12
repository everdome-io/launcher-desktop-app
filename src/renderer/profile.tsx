import { createRoot } from 'react-dom/client';
import { initializeSentry } from '../common/sentry';
import { Channels, CrossWindowState } from '../interfaces';
import UserProfile from './UserProfile';

initializeSentry();

let crossWindowState: CrossWindowState = {
  isAuthenticated: false,
  errorMessage: '',
  webViewLoading: true,
  shouldDisplayNFT: false,
  disclaimer:
    'Visit the Alex Greenwood exhibition on the 15th May to claim your NFT',
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
