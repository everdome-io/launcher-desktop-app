import React from 'react';
import imgOKX from 'assets/images/image-link-okx.png';
import imgWallet from 'assets/images/image-link-wallet.png';
import imgMatch from 'assets/images/image-link-match.png';
import styles from './LinkCardList.module.css';

export interface LinkCardListProps {}

export const LinkCardList: React.FC<LinkCardListProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img className={styles.cardImg} src={imgOKX} width="80" height="80" />
        <span className={styles.cardTitle}>Learn more about OKX</span>
        <a
          href="https://www.okx.com/learn"
          target="_blank"
          className={styles.cardLink}
        >
          Learn more
        </a>
      </div>
      <div className={styles.card}>
        <img
          className={styles.cardImg}
          src={imgWallet}
          width="80"
          height="80"
        />
        <span className={styles.cardTitle}>OKX - Your portal to Web3</span>
        <a
          href="https://www.okx.com/web3"
          target="_blank"
          className={styles.cardLink}
        >
          Learn more
        </a>
      </div>
      <div className={styles.card}>
        <img className={styles.cardImg} src={imgMatch} width="80" height="80" />
        <span className={styles.cardTitle}>Manchester City Matches</span>
        <a
          href="https://www.mancity.com/results"
          target="_blank"
          className={styles.cardLink}
        >
          See results
        </a>
      </div>
    </div>
  );
};
