import { AppState, CrossWindowState } from '@interfaces';
import { FC } from 'react';
import settingsIcon from 'assets/images/settings-icon.svg';
import { ConnectOKXWallet } from '@renderer/components/ConnectOKXWallet';
import { ClearStore } from '@renderer/components/ClearStore';
import { ChooseAvatar } from '@renderer/components/ChooseAvatar';
import styles from './ProfileDetails.module.css';

export const ProfileDetails: FC<{
  state: AppState;
  crossWindowState: CrossWindowState;
}> = ({ crossWindowState }) => {
  return (
    <div className={styles.container}>
      {crossWindowState.isAuthenticated ? (
        <>
          <header className={styles.userProfileHeader}>
            <p className={styles.usernameLabel}>@Your username</p>
            <img src={settingsIcon} />
          </header>
          <ChooseAvatar />
        </>
      ) : (
        <div className={styles.notConnected}>
          <ConnectOKXWallet fromProfileWindow />
        </div>
      )}
      <ClearStore />
    </div>
  );
};
