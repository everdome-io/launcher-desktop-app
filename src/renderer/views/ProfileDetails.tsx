import { CrossWindowState } from '@interfaces';
import { FC } from 'react';
import settingsIcon from 'assets/images/settings-icon.svg';
import { ConnectOKXWallet } from '@renderer/components/ConnectOKXWallet';
import { ClearStore } from '@renderer/components/ClearStore';
import { UserAvatar } from '@renderer/components/UserAvatar';
import { UserName } from '@renderer/components/UserName';
import styles from './ProfileDetails.module.css';

export const ProfileDetails: FC<{
  state: { avatarId: string | null; nickName: string };
  crossWindowState: CrossWindowState;
}> = ({ crossWindowState, state: { avatarId, nickName } }) => {
  return (
    <div className={styles.container}>
      {crossWindowState.isAuthenticated ? (
        <>
          <header className={styles.userProfileHeader}>
            <UserName userName={nickName} />
            <img src={settingsIcon} />
          </header>
          <UserAvatar avatarId={avatarId} />
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
