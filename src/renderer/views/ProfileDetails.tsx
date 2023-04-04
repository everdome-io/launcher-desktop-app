import { AppState, Channels } from '@interfaces';
import { FC, useState } from 'react';
import profileIcon from 'assets/images/menu-profile-nopicture.png';
import previewIcon from 'assets/images/preview-icon.png';
import settingsIcon from 'assets/images/settings-icon.png';
import iconDOME from 'assets/images/icon_DOME.png';
import './ProfileDetails.css';

export const ProfileDetails: FC<{ state: AppState }> = ({ state }) => {
  const [isLogged, setIsLogged] = useState(false);

  const connectWallet = () => {
    window.electron.ipcRenderer.sendMessage(Channels.openOKXExtension);

    window.okxwallet
      .request({ method: 'eth_requestAccounts' })
      .then((res: string) => {
        setIsLogged(true);
        console.log(`OKX res`, res);
        window.electron.ipcRenderer.sendMessage(Channels.closeOKXExtension);
      })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to OKX Wallet.');
        } else {
          console.error(err);
        }
      });
  };

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
      <div className="MainSection">
        {!isLogged && (
          <div className="EmptyMessage">
            <p className="InfoText">If you new to decentralized world</p>
            <a
              className="CTAButton CreateWallet"
              href="https://www.okx.com/account/register"
              target="_blank"
              rel="noreferrer"
            >
              Create Wallet
            </a>
            <p className="InfoText">or if you already have a wallet</p>
            <button
              className="CTAButton CTAButtonInverse ConnectWallet"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
