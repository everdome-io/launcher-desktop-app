import { AppState } from '@interfaces';
import { FC } from 'react';
import profileIcon from 'assets/images/menu-profile-nopicture.png';
import previewIcon from 'assets/images/preview-icon.png';
import settingsIcon from 'assets/images/settings-icon.png';
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
    </div>
  );
};
