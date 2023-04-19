import { FC } from 'react';
import './ConnectOrSkip.css';
import { ConnectOKXWallet } from '@renderer/components/ConnectOKXWallet';
import { Channels } from '@interfaces';

interface ConnectOrSkipProps {
  onSkip: () => void;
}

export const ConnectOrSkip: FC<ConnectOrSkipProps> = ({ onSkip }) => {
  const skipConnect = () => {
    window.electron.ipcRenderer.sendMessage(Channels.connectedOrSkipped);
    onSkip();
  };
  return (
    <div className="cosContainer">
      <ConnectOKXWallet fromProfileWindow={false} />

      <button onClick={skipConnect}>Skip</button>
    </div>
  );
};
