import {
  Channels,
  CrossWindowState,
  SettingType,
  ToggleWindowMode,
} from '@interfaces';
import { FC, useEffect, useState } from 'react';
import settingsIcon from 'assets/images/settings-icon.svg';
import ag5OKXLogo from 'assets/images/ag5xokx-logo.png';
import { ConnectOKXWallet } from '@renderer/components/ConnectOKXWallet';
import { ClearStore } from '@renderer/components/ClearStore';
import { UserAvatar } from '@renderer/components/UserAvatar';
import { UserName } from '@renderer/components/UserName';
import { NFTCard } from '@renderer/components/NFTCard';
import { useNavigate } from 'react-router-dom';
import { sentryEventHandler } from '@main/utils/sentryEventHandler';
import { NFTCardDisclaimer } from '@renderer/components/NFTCardDisclaimer';
import styles from './ProfileDetails.module.css';

export const ProfileDetails: FC<{
  state: { avatarId: string | null; nickName: string | null };
  crossWindowState: CrossWindowState;
}> = ({ crossWindowState, state: { avatarId, nickName } }) => {
  const navigate = useNavigate();
  const shouldDisplayNFT = window.electron.store.get('shouldDisplayNFT');
  const disclaimer = window.electron.store.get('disclaimer');

  const openSettings = () => {
    sentryEventHandler('OpenSettings');
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
          {shouldDisplayNFT ? <NFTCard /> : <NFTCardDisclaimer />}
        </>
      ) : (
        <div className={styles.notConnected}>
          <img src={ag5OKXLogo} alt="Logo" width="225" />
          <p className={styles.disclaimer}>{disclaimer}</p>
          <p className={styles.infoText}>
            The AG5 x OKX Non Fungible Tokens ("NFTs") are digital assets that
            have been created as collectibles; They are free, not tradeable and
            are not intended to be used as investment. Each NFT has no value nor
            is there any guarantee that they can or will ever have monetary
            value. NFTs are not regulated instruments in the UK.
          </p>
          <ConnectOKXWallet fromProfileWindow />
        </div>
      )}
    </div>
  );
};
