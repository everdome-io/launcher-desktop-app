import { FC } from 'react';
import { Channels } from '@interfaces';
import styles from './ConnectOKXWallet.module.css';

export const ConnectOKXWallet: FC<{ fromProfileWindow: boolean }> = ({
  fromProfileWindow,
}) => {
  const connectWallet = () => {
    window.electron.ipcRenderer.sendMessage(Channels.openOKXExtension, {
      fromProfileWindow,
    });
  };
  return (
    <button
      className={
        fromProfileWindow ? styles.connectWallet : styles.connectWalletPrimary
      }
      onClick={connectWallet}
    >
      Secure your NFT
    </button>
  );
};
