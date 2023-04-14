import {
  AppState,
  AppUpdate,
  AppUpdateStatus,
  Channels,
  CrossWindowState,
} from '@interfaces';
import { FC } from 'react';
import { Hello, FileDownloader, Menu } from 'src/renderer/components';
import headerImage from 'assets/images/Genesis_NFT.png';
import { News } from './News';
import './Welcome.css';

export const Welcome: FC<{
  state: AppState;
  updateState: AppUpdate;
  crossWindowState: CrossWindowState;
}> = ({ state, updateState, crossWindowState }) => {
  if (updateState.status === AppUpdateStatus.error) {
    console.log(`update error ${updateState.message}`);
    window.electron.ipcRenderer.sendMessage(Channels.rendererError, {
      lvl: 'error',
      message:`update error ${updateState.message}`
    });
  }
  console.log(`Is user authenticated?: ${crossWindowState.isAuthenticated}`);
  window.electron.ipcRenderer.sendMessage(Channels.rendererError, {
    lvl: 'log',
    message:`Is user authenticated?: ${crossWindowState.isAuthenticated}`
  });
  return (
    <div className="container">
      <Menu />
      <section className="mainSection">
        <div className="welcomeMessage">
          <Hello />
          <FileDownloader state={state} />
        </div>
        <img src={headerImage} />
      </section>
      <News />
    </div>
  );
};
