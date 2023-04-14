import { AppState, Channels, CrossWindowState } from '@interfaces';
import { FC, useEffect, useState } from 'react';
import profileIcon from 'assets/images/menu-profile-nopicture.png';
import previewIcon from 'assets/images/preview-icon.png';
import settingsIcon from 'assets/images/settings-icon.png';
import iconDOME from 'assets/images/icon_DOME.png';
import './ProfileDetails.css';

export const ProfileDetails: FC<{
  state: AppState;
  crossWindowState: CrossWindowState;
}> = ({ state, crossWindowState }) => {
  const [isLogged, setIsLogged] = useState(false);

  const connectWallet = () => {
    window.electron.ipcRenderer.sendMessage(Channels.openOKXExtension);
  };

  useEffect(() => {
    if (crossWindowState.isAuthenticated) {
      setIsLogged(true);
    }
  }, [crossWindowState]);

  return (
    <div className="container">
      {isLogged && (
        <div className="UserProfileHeader" hidden={!isLogged}>
          <div className="UserInfo">
            <img src={profileIcon} width="40" height="40" alt="" />
            <div className="UserDetails">
              <h3>User_3758</h3>
              <span>Wallet address</span>
            </div>
          </div>
          <div className="SideMenu">
            <a href="#">
              <img src={previewIcon} />
            </a>
            <a href="#">
              <img src={settingsIcon} />
            </a>
          </div>
        </div>
      )}
      <div>
        <div className="Wallet" hidden={!isLogged}>
          <div className="WalletItem">
            <h5>Wallet</h5>
            <div className="WalletItemDetails">
              <span>
                <img
                  style={{ verticalAlign: 'middle' }}
                  src={iconDOME}
                  alt="DOME"
                />{' '}
                DOME
              </span>
              <span>0.00</span>
              <span>$0.00</span>
            </div>
          </div>
        </div>
        {!isLogged && (
          <div className="NotConnected">
            <button className="CTAButton ConnectWallet" onClick={connectWallet}>
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
