import { AppState, AppUpdate, CrossWindowState } from '@interfaces';
import { FC } from 'react';
import { Hello, FileDownloader, Menu } from 'src/renderer/components';
import headerImage from 'assets/images/Genesis_NFT.png';
import { News } from './News';
import styles from './Main.module.css';
import { Navigate } from 'react-router-dom';

export const Main: FC<{
  state: AppState;
  updateState: AppUpdate;
  crossWindowState: CrossWindowState;
}> = ({ state, crossWindowState }) => {
  const connectedOrSkipped = window.electron.store.get('connectedOrSkipped');
  const termsAccepted = window.electron.store.get('termsAccepted');

  if (crossWindowState.errorMessage) {
    console.log(`Error message?: ${crossWindowState.errorMessage}`);
  }

  const renderView = () => {
    if (!termsAccepted && !crossWindowState.isAuthenticated) {
      return <Navigate to="/terms" />;
    }
    if (!connectedOrSkipped && !crossWindowState.isAuthenticated) {
      return <Navigate to="/connect-or-skip" />;
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
