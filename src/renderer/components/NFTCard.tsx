import React from 'react';
import styles from './NFTCard.module.css';

interface NFTCardProps {
  colection: string;
  tokenId: number;
  variant: number;
}

export const NFTCard: React.FC<NFTCardProps> = ({
  colection,
  tokenId,
  variant,
}) => {
  const nftList = [styles.nftImg1, styles.nftImg2, styles.nftImg3];

  return (
    <div className={styles.container}>
      <div className={styles.nftContainer}>
        <div className={nftList[(variant - 1) % 3]}></div>
      </div>
      <div className={styles.tokenInfo}>
        <div className={styles.item}>
          <div className={styles.itemName}>Collection</div>
          <div className={styles.itemValue}>{colection}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemName}>Token ID</div>
          <div className={styles.itemValue}>{tokenId}</div>
        </div>
      </div>
    </div>
  );
};
