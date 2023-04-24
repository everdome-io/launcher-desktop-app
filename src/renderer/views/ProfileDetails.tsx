import { AppState, CrossWindowState } from '@interfaces';
import { FC } from 'react';
import settingsIcon from 'assets/images/settings-icon.svg';
import { ConnectOKXWallet } from '@renderer/components/ConnectOKXWallet';
import { ClearStore } from '@renderer/components/ClearStore';
import { UserAvatar } from '@renderer/components/UserAvatar';
import { UserName } from '@renderer/components/UserName';
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
            <UserName crossWindowState={crossWindowState} />
            <img src={settingsIcon} />
          </header>
          <UserAvatar crossWindowState={crossWindowState} />
        </>
      ) : (
        <div className={styles.notConnected}>
          <ConnectOKXWallet fromProfileWindow={true} />
        </div>
      )}
      <ClearStore />
    </div>
  );
};
