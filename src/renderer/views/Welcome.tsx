import { AppState, AppUpdateStatus } from '@interfaces';
import { FC } from 'react';
import {
  Hello,
  FileDownloader,
  Menu,
  UpdateStatus,
} from 'src/renderer/components';
import headerImage from 'assets/images/Genesis_NFT.png';
import { News } from './News';
import './Welcome.css';

export const Welcome: FC<{
  state: AppState;
  updateStatus: AppUpdateStatus;
}> = ({ state, updateStatus }) => {
  return (
    <div className="container">
      <Menu />
      <section className="mainSection">
        <div className="welcomeMessage">
          <Hello />
          <FileDownloader state={state} />
          <UpdateStatus updateStatus={updateStatus} />
        </div>
        <img src={headerImage} />
      </section>
      <News />
    </div>
  );
};
