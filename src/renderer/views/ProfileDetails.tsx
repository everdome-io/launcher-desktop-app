import { Channels, CrossWindowState, ToggleWindowMode } from '@interfaces';
import { FC } from 'react';
import settingsIcon from 'assets/images/settings-icon.svg';
import ag5OKXLogo from 'assets/images/ag5xokx-logo.png';
import { ConnectOKXWallet } from '@renderer/components/ConnectOKXWallet';
import { ClearStore } from '@renderer/components/ClearStore';
import { UserAvatar } from '@renderer/components/UserAvatar';
import { UserName } from '@renderer/components/UserName';
import styles from './ProfileDetails.module.css';
import { NFTCard } from '@renderer/components/NFTCard';
import { useNavigate } from 'react-router-dom';

export const ProfileDetails: FC<{
  state: { avatarId: string | null; nickName: string | null };
  crossWindowState: CrossWindowState;
}> = ({ crossWindowState, state: { avatarId, nickName } }) => {
  const navigate = useNavigate();

  const openSettings = () => {
    window.electron.ipcRenderer.sendMessage(Channels.toggleProfileWindow, {
      mode: ToggleWindowMode.open,
    });
    navigate('/choose-avatar');
  };
  return (
    <div className={styles.container}>
      {crossWindowState.isAuthenticated ? (
        <>
          <header className={styles.userProfileHeader}>
            <UserName userName={nickName} />
            <img
              src={settingsIcon}
              className={styles.settingIcon}
              onClick={openSettings}
            />
          </header>
          <UserAvatar avatarId={avatarId} />
          <NFTCard />
        </>
      ) : (
        <div className={styles.notConnected}>
          <img src={ag5OKXLogo} alt="Logo" width="225" />
          <p className={styles.infoText}>
            Visit the Alex Greenwood exhibition on the 15th May to claim your
            NFT
          </p>
          <p className={styles.disclaimer}>
            This is a space for a disclaimer text, which should not extend to
            more than 2 lines of text.
          </p>
          <ConnectOKXWallet fromProfileWindow />
        </div>
      )}
    </div>
  );
};
