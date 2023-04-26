import { FC, useEffect } from 'react';
import { ConnectOKXWallet } from '@renderer/components/ConnectOKXWallet';
import { Channels } from '@interfaces';
import { useNavigate } from 'react-router-dom';
import ag5OKXLogo from 'assets/images/ag5xokx-logo.png';
import styles from './ConnectOrSkip.module.css';
import { BackButton } from '@renderer/components/BackButton';

export const ConnectOrSkip: FC = () => {
  const navigate = useNavigate();
  const connectedOrSkipped = window.electron.store.get('connectedOrSkipped');

  const skipConnect = () => {
    window.electron.ipcRenderer.sendMessage(Channels.connectedOrSkipped);
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
      <div className={styles.glow}></div>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Login to the OKX Wallet and collect your NFT
        </h1>
        <p className={styles.infoText}>
          NFT will be available from 15th of May
        </p>
      </div>
      <img src={ag5OKXLogo} alt="Logo" width="932" />
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
