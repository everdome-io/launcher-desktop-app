import { FC } from 'react';
import { Channels } from '@interfaces';
import './ConnectOKXWallet.css';

export const ConnectOKXWallet: FC<{ fromProfileWindow: boolean }> = ({
  fromProfileWindow,
}) => {
  const connectWallet = () => {
    window.electron.ipcRenderer.sendMessage(Channels.openOKXExtension, {
      fromProfileWindow,
    });
  };
  return (
    <button className="CTAButton ConnectWallet" onClick={connectWallet}>
      Connect OKX Wallet
    </button>
  );
};
