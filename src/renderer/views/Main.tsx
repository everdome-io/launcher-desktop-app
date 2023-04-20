import { AppState, AppUpdate, CrossWindowState } from '@interfaces';
import { FC, useState } from 'react';
import { Hello, FileDownloader, Menu } from 'src/renderer/components';
import headerImage from 'assets/images/Genesis_NFT.png';
import { News } from './News';
import { TermsOfService } from './TermsOfService';
import { ConnectOrSkip } from './ConnectOrSkip';
import styles from './Main.module.css';

export const Main: FC<{
  state: AppState;
  updateState: AppUpdate;
  crossWindowState: CrossWindowState;
}> = ({ state, crossWindowState }) => {
  const [connectedOrSkipped, setConnectedOrSkipped] = useState(
    window.electron.store.get('connectedOrSkipped') || false
  );
  const [termsAccepted, setTermsAccepted] = useState(
    window.electron.store.get('termsAccepted') || false
  );

  if (crossWindowState.errorMessage) {
    console.log(`Error message?: ${crossWindowState.errorMessage}`);
  }

  const renderView = () => {
    if (!termsAccepted && !crossWindowState.isAuthenticated) {
      return <TermsOfService onAccept={() => setTermsAccepted(true)} />;
    }
    if (!connectedOrSkipped && !crossWindowState.isAuthenticated) {
      return <ConnectOrSkip onSkip={() => setConnectedOrSkipped(true)} />;
    }
    return (
      <div className={styles.main}>
        <div className={styles.container}>
          <Menu />
          <section className={styles.mainSection}>
            <div className={styles.welcomeMessage}>
              <Hello />
              <FileDownloader state={state} />
            </div>
            <img src={headerImage} />
          </section>
          <News />
        </div>
      </div>
    );
  };

  return renderView();
};
