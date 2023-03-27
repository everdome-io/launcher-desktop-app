import { AppState } from '@interfaces';
import { FC } from 'react';
import profileIcon from 'assets/images/menu-profile-nopicture.png';
import previewIcon from 'assets/images/preview-icon.png';
import settingsIcon from 'assets/images/settings-icon.png';
import iconDOME from 'assets/images/icon_DOME.png';
import profileSteps from 'assets/images/profile-steps.png';
import './ProfileDetails.css';
export const ProfileDetails: FC<{ state: AppState }> = ({ state }) => {
  return (
    <div className="container">
      <div className="UserProfileHeader">
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
      <div className="Wallet">
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
        <div className="EmptyMessage">
          <img src={profileSteps} />
          <h1>Connect wallet</h1>
          <p>To see your NFT collection and $DOME count</p>
        </div>
      </div>
    </div>
  );
};
