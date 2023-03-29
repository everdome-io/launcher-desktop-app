import { AppState, AppUpdate } from '@interfaces';
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
  updateState: AppUpdate;
}> = ({ state, updateState }) => {
  return (
    <div className="container">
      <Menu />
      <section className="mainSection">
        <div className="welcomeMessage">
          <Hello />
          <FileDownloader state={state} />
          <UpdateStatus updateState={updateState} />
        </div>
        <img src={headerImage} />
      </section>
      <News />
    </div>
  );
};
