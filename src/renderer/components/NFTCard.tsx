import React from 'react';
import ag5OKXLogo from 'assets/images/ag5xokx-logo.png';
import styles from './NFTCard.module.css';

export const NFTCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={ag5OKXLogo} alt="Logo" width="225" height="22" />
      <p className={styles.infoText}>
        Visit the Alex Greenwood exhibition on the 15th May to claim your NFT
      </p>
      <p className={styles.disclaimer}>
        This is a space for a disclaimer text, which should not extend to more
        than 2 lines of text.
      </p>
    </div>
  );
};
