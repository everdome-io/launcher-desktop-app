import { AppState, CrossWindowState } from '@interfaces';
import { FC, useState } from 'react';
import settingsIcon from 'assets/images/settings-icon.svg';
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
      {crossWindowState.isAuthenticated ? (
        <>
          <header className={styles.userProfileHeader}>
            <p className={styles.usernameLabel}>@Your username</p>
            <img src={settingsIcon} />
          </header>
          <ChooseAvatar onClick={() => setView(View.ChooseAvatar)} />
        </>
      ) : (
        <div className={styles.notConnected}>
          <ConnectOKXWallet fromProfileWindow={true} />
        </div>
      )}
      <ClearStore />
    </div>
  ) : (
    <AvatarList handleBack={() => setView(View.ProfileDetails)} />
  );
};
