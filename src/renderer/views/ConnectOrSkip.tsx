import { FC } from 'react';
import { ConnectOKXWallet } from '@renderer/components/ConnectOKXWallet';
import { Channels } from '@interfaces';
import { useNavigate } from 'react-router-dom';
import styles from './ConnectOrSkip.module.css';

export const ConnectOrSkip: FC = () => {
  const navigate = useNavigate();
  const skipConnect = () => {
    window.electron.ipcRenderer.sendMessage(Channels.connectedOrSkipped);
    navigate('/');
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
