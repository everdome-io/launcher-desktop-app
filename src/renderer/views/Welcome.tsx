import { AppState } from 'interfaces';
import { FC } from 'react';
import { Logo, Hello, FileDownloader } from 'renderer/components';
import headerImage from '../../../assets/images/Genesis_NFT.png';
import './Welcome.css';

export const Welcome: FC<{ state: AppState }> = ({ state }) => {
  return (
    <div className="container">
      <Logo />
      <div className="mainSection">
        <div className="welcomeMessage">

        <Hello />
        <FileDownloader state={state} />
        </div>
        <img src={headerImage} />
      </div>
    </div>
  );
};
