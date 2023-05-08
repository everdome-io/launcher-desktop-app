import { FC } from 'react';
import { Channels } from '@interfaces';
import styles from './ConnectOKXWallet.module.css';
import { sentryEventHandler } from '@main/utils/sentryEventHandler';

export const ConnectOKXWallet: FC<{ fromProfileWindow: boolean }> = ({
  fromProfileWindow,
}) => {
  const connectWallet = () => {
    sentryEventHandler(
      `Connect wallet ${fromProfileWindow ? 'from profile' : 'after Terms'}`
    );
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
