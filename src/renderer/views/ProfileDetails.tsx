import { AppState, CrossWindowState } from '@interfaces';
import { FC, useState } from 'react';
import profileIcon from 'assets/images/menu-profile-nopicture.png';
import previewIcon from 'assets/images/preview-icon.png';
import settingsIcon from 'assets/images/settings-icon.svg';
import iconDOME from 'assets/images/icon_DOME.png';
import { ConnectOKXWallet } from '@renderer/components/ConnectOKXWallet';
import { ClearStore } from '@renderer/components/ClearStore';
import styles from './ProfileDetails.module.css';
import { ChooseAvatar } from '@renderer/components/ChooseAvatar';
import { AvatarList } from './AvatarList';

enum View {
  ChooseAvatar = 'choose-avatar',
  ProfileDetails = 'profile-details',
}

export const ProfileDetails: FC<{
  state: AppState;
  crossWindowState: CrossWindowState;
}> = ({ crossWindowState }) => {
  const [view, setView] = useState(View.ProfileDetails);
  return view === View.ProfileDetails ? (
    <div className={styles.container}>
      <header className={styles.userProfileHeader}>
        <p className={styles.UsernameLabel}>@Your username</p>
        <img src={settingsIcon} />
      </header>
      <ClearStore />
      <ChooseAvatar onClick={() => setView(View.ChooseAvatar)} />
      {crossWindowState.isAuthenticated && (
        <div
          className={styles.UserProfileHeader}
          hidden={!crossWindowState.isAuthenticated}
        >
          <div className={styles.UserInfo}>
            <img src={profileIcon} width="40" height="40" alt="" />
            <div className={styles.UserDetails}>
              <h3>User_3758</h3>
              <span>Wallet address</span>
            </div>
          </div>
          <div className={styles.SideMenu}>
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
        <div
          className={styles.Wallet}
          hidden={!crossWindowState.isAuthenticated}
        >
          <div className={styles.WalletItem}>
            <h5>Wallet</h5>
            <div className={styles.WalletItemDetails}>
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
        {!crossWindowState.isAuthenticated && (
          <div className={styles.NotConnected}>
            <ConnectOKXWallet fromProfileWindow={true} />
          </div>
        )}
      </div>
    </div>
  ) : (
    <AvatarList handleBack={() => setView(View.ProfileDetails)} />
  );
};
