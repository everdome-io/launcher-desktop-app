import { AppState, AppUpdate, CrossWindowState } from '@interfaces';
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
  console.log(updateState.status);
  console.log(updateState.message);
  console.log(`Is user authenticated?: ${crossWindowState.isAuthenticated}`);
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
