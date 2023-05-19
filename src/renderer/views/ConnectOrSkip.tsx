import { FC, useEffect } from 'react';
import { ConnectOKXWallet } from '@renderer/components/ConnectOKXWallet';
import { Channels } from '@interfaces';
import { useNavigate } from 'react-router-dom';
import ag5OKXLogo from 'assets/images/ag5xokx-logo.png';
import { BackButton } from '@renderer/components/BackButton';
import { sentryEventHandler } from '@main/utils/sentryEventHandler';
import styles from './ConnectOrSkip.module.css';

export const ConnectOrSkip: FC = () => {
  const navigate = useNavigate();
  const connectedOrSkipped = window.electron.store.get('connectedOrSkipped');
  const disclaimer = window.electron.store.get('disclaimer');

  const skipConnect = () => {
    window.electron.ipcRenderer.sendMessage(Channels.connectedOrSkipped);
    sentryEventHandler('ConnectWallet skipped');
    navigate('/');
  };

  const backToTerms = () => {
    navigate('/terms');
  };

  useEffect(() => {
    if (connectedOrSkipped) {
      return navigate('/');
    }
  }, [connectedOrSkipped]);

  return (
    <div className={styles.container}>
      <div className={styles.glow} />
      <div className={styles.header}>
        <h1 className={styles.title}>
          Login to the OKX Wallet and collect your NFT
        </h1>
        <p className={styles.disclaimer}>{disclaimer}</p>
      </div>
      <div className={styles.centerSection}>
        <img src={ag5OKXLogo} alt="Logo" width="932" />
        <p className={styles.infoText}>
          The AG5 x OKX Non Fungible Tokens ("NFTs") are digital assets that
          have been created as collectibles; They are free, not tradeable and
          are not intended to be used as investment. Each NFT has no value nor
          is there any guarantee that they can or will ever have monetary value.
          NFTs are not regulated instruments in the UK.
        </p>
      </div>
      <div className={styles.footer}>
        <BackButton onClick={backToTerms} />
        <div className={styles.btnGroup}>
          <button className={styles.skipBtn} onClick={skipConnect}>
            Skip
          </button>
          <ConnectOKXWallet fromProfileWindow={false} />
        </div>
      </div>
    </div>
  );
};
