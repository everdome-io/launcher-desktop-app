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
          Visit the Alex Greenwood exhibition on the 15th May to claim your NFT
        </p>
      </div>
      <div className={styles.centerSection}>
        <img src={ag5OKXLogo} alt="Logo" width="932" />
        <p className={styles.disclaimer}>
          This is a space for a disclaimer text,
        </p>
        <p className={styles.disclaimer}>
          which should not extend to more than 2 lines of text.
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
