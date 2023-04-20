import { FC } from 'react';
import { ConnectOKXWallet } from '@renderer/components/ConnectOKXWallet';
import { Channels } from '@interfaces';
import styles from './ConnectOrSkip.module.css';

interface ConnectOrSkipProps {
  onSkip: () => void;
}

export const ConnectOrSkip: FC<ConnectOrSkipProps> = ({ onSkip }) => {
  const skipConnect = () => {
    window.electron.ipcRenderer.sendMessage(Channels.connectedOrSkipped);
    onSkip();
  };
  return (
    <div className={styles.cosContainer}>
      <ConnectOKXWallet fromProfileWindow={false} />

      <button className={styles.skipBtn} onClick={skipConnect}>
        Skip
      </button>
    </div>
  );
};
