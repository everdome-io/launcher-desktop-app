import {
  AppState,
  AppUpdate,
  Channels,
  CrossWindowState,
  ToggleWindowMode,
} from '@interfaces';
import { FC, useEffect } from 'react';
import chevronRight from 'assets/images/chevron-right.png';
import { Navigate, useNavigate } from 'react-router-dom';
import logoImage from 'assets/images/okx-logo.png';
import { LinkCardList } from '@renderer/components/LinkCardList';
import { FileDownloader } from '@renderer/components';
import { ClearStore } from '@renderer/components/ClearStore';
import styles from './Main.module.css';
import { sentryEventHandler } from '@main/utils/sentryEventHandler';

export const Main: FC<{
  state: AppState;
  updateState: AppUpdate;
  crossWindowState: CrossWindowState;
}> = ({ state, crossWindowState }) => {
  const navigate = useNavigate();
  const connectedOrSkipped = window.electron.store.get('connectedOrSkipped');
  const termsAccepted = window.electron.store.get('termsAccepted');
  const latestWindowsVersion: string | undefined = window.electron.store.get(
    'latestWindowsVersion'
  );
  const currentVersion: string | undefined =
    window.electron.store.get('appCurrentVersion');

  useEffect(() => {
    if (shouldDisplayUpdateInfo(latestWindowsVersion, currentVersion)) {
      window.electron.ipcRenderer.sendMessage(Channels.handleUpdateForWindows);
    }
  }, [latestWindowsVersion, currentVersion]);

  if (crossWindowState.errorMessage) {
    console.log(`Error message?: ${crossWindowState.errorMessage}`);
  }

  const onClickHelp = () => {
    sentryEventHandler('Open FAQ');
    window.electron.ipcRenderer.sendMessage(Channels.openFAQWindow);
    navigate('/help');
  };

  const renderView = () => {
    if (!termsAccepted && !crossWindowState.isAuthenticated) {
      return <Navigate to="/terms" />;
    }
    if (!connectedOrSkipped && !crossWindowState.isAuthenticated) {
      return <Navigate to="/connect-or-skip" />;
    }
    return (
      <div className={styles.main}>
        <div className={styles.slider}>
          <div className={styles.slide} />
          <div className={styles.slide} />
        </div>
        <div className={styles.container}>
          <img src={logoImage} alt="Everdome" width="120" height="76" />
          <button className={styles.helpBtn} onClick={onClickHelp}>
            FAQ
          </button>
          <section className={styles.mainSection}>
            <div className={styles.welcomeMessage}>
              <p>
                Enter to see Jack Grealish DJ in the metaverse, Alex Greenwood’s
                exclusive NFT drop and exclusive content from İlkay Gündoğan and
                Rúben Dias
              </p>
              <FileDownloader state={state} />
            </div>
          </section>
          <section className={styles.poweredBy}>
            <p className={styles.poweredByText}>
              Powered by{' '}
              <a
                href="https://everdome.io/"
                target="_blank"
                className={styles.poweredByLink}
                rel="noreferrer"
              >
                Everdome
              </a>
            </p>
            <img src={chevronRight} />
          </section>
          <section>
            <LinkCardList />
          </section>
        </div>
        {/* <ClearStore /> */}
      </div>
    );
  };

  return renderView();
};

function shouldDisplayUpdateInfo(
  latestWindowsVersion: string | undefined,
  currentVersion: string | undefined
) {
  return (
    latestWindowsVersion !== undefined &&
    currentVersion !== undefined &&
    latestWindowsVersion !== currentVersion
  );
}
