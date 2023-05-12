import React from 'react';
import ag5OKXLogo from 'assets/images/ag5xokx-logo.png';
import styles from './NFTCardDisclaimer.module.css';
import { CrossWindowState } from '@interfaces';

export const NFTCardDisclaimer: React.FC<{
  crossWindowState: CrossWindowState;
}> = ({ crossWindowState }) => {
  return (
    <div className={styles.container}>
      <img src={ag5OKXLogo} alt="Logo" width="225" height="22" />
      <p className={styles.disclaimer}>{crossWindowState.disclaimer}</p>
      <p className={styles.infoText}>
        The AG5 x OKX Non Fungible Tokens ("NFTs") are digital assets that have
        been created as collectibles; They are free, not tradeable and are not
        intended to be used as investment. Each NFT has no value nor is there
        any guarantee that they can or will ever have monetary value. NFTs are
        not regulated instruments in the UK.
      </p>
    </div>
  );
};
