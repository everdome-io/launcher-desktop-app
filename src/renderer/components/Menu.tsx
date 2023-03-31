import { Channels } from '@interfaces';
import { FC } from 'react';
import { Logo } from './Logo';

export const Menu: FC = ({}) => {
  const handleOnClick = () => {
    window.electron.ipcRenderer.sendMessage(Channels.showProfileWindow, true);
  };
  return (
    <menu className="MainMenu">
      <Logo />
      <ul>
        <li>
          <a href="#">
            <div className="myWallet" onClick={handleOnClick}>
              My wallet
            </div>
          </a>
        </li>
        <li>
          <a href="#">Send feedback</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
      </ul>
    </menu>
  );
};
