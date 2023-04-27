import React from 'react';
import ag5OKXLogo from 'assets/images/ag5xokx-logo.png';
import styles from './NFTCard.module.css';

export const NFTCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={ag5OKXLogo} alt="Logo" width="225" />
      <p className={styles.infoText}>NFT will be available</p>
      <p className={styles.infoText}>from 15th of May</p>
    </div>
  );
};
