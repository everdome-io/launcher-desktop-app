import {
  AppState,
  AppUpdate,
  AppUpdateStatus,
  CrossWindowState,
} from '@interfaces';
import { FC } from 'react';
import { Hello, FileDownloader, Menu } from 'src/renderer/components';
import headerImage from 'assets/images/Genesis_NFT.png';
import { News } from './News';
import './Welcome.css';
import { TermsOfService } from './TermsOfService';

export const Welcome: FC<{
  state: AppState;
  updateState: AppUpdate;
  crossWindowState: CrossWindowState;
}> = ({ state, updateState, crossWindowState }) => {
  const termsAccepted =
    window.electron.store.get('termsAccepted') || state.termsAccepted;

  console.log(
    `store.get('termsAccepted')`,
    window.electron.store.get('termsAccepted')
  );
  return termsAccepted ? (
    <div className="main">
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
    </div>
  ) : (
    <TermsOfService />
  );
};
