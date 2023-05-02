import { AppState, AppUpdate, Channels, CrossWindowState } from '@interfaces';
import { FC } from 'react';
import chevronRight from 'assets/images/chevron-right.png';
import styles from './Main.module.css';
import { Navigate } from 'react-router-dom';
import logoImage from 'assets/images/okx-logo.png';
import { LinkCardList } from '@renderer/components/LinkCardList';
import { FileDownloader } from '@renderer/components';
import { ClearStore } from '@renderer/components/ClearStore';

export const Main: FC<{
  state: AppState;
  updateState: AppUpdate;
  crossWindowState: CrossWindowState;
}> = ({ state, crossWindowState }) => {
  const connectedOrSkipped = window.electron.store.get('connectedOrSkipped');
  const termsAccepted = window.electron.store.get('termsAccepted');
  const latestWindowsVersion: string | undefined = window.electron.store.get(
    'latestWindowsVersion'
  );
  const currentVersion: string | undefined =
    window.electron.store.get('currentVersion');

  const onUpdate = () => {
    const url = `https://github.com/everdome-io/launcher-desktop-app/releases/download/v${latestWindowsVersion}/OKX-Collective-Metaverse-Setup-${latestWindowsVersion}.exe`;
    window.open(url, '_blank');
    window.electron.ipcRenderer.sendMessage(Channels.handleUpdateForWindows);
    return;
  };

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
        <div className={styles.slider}>
          <div className={styles.slide}></div>
          <div className={styles.slide}></div>
        </div>
        <div className={styles.container}>
          <img src={logoImage} alt="Everdome" width="120" height="76" />
          <section className={styles.mainSection}>
            <div className={styles.welcomeMessage}>
              <p>
                Enter to see Jack Grealish DJ in the metaverse, Alex Greenwood’s
                exclusive NFT drop and exclusive content from İlkay Gündoğan and
                Rúben Dias
              </p>
              {shouldDisplayUpdateInfo(latestWindowsVersion, currentVersion) ? (
                <p onClick={onUpdate}>Please update</p>
              ) : (
                <FileDownloader state={state} />
              )}
            </div>
          </section>
          <section className={styles.poweredBy}>
            <p className={styles.poweredByText}>
              Powered by{' '}
              <a
                href="https://everdome.io/"
                target="_blank"
                className={styles.poweredByLink}
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
        <ClearStore />
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
