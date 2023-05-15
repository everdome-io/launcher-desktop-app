import React, { useEffect } from 'react';
import styles from './NFTCard.module.css';
import { Spinner } from './Spinner';
import { getUserTokenFromAPI } from '@api';
import * as Sentry from '@sentry/electron';

interface ApiResponse {
  tokenId: string;
  attributes: {
    trait_type: string;
    value: NFTColor;
  }[];
}

enum NFTColor {
  White = 'White',
  Black = 'Black',
  Blue = 'Blue',
}

const getNFTVariantStyles = (variant: NFTColor | null) => {
  switch (variant) {
    case NFTColor.White:
      return styles.nftImgWhite;
    case NFTColor.Black:
      return styles.nftImgBlack;
    case NFTColor.Blue:
      return styles.nftImgBlue;
    default:
      return styles.nftImg;
  }
};

export const NFTCard: React.FC = () => {
  const collection = 'Alex Greenwood x OKX Trainer Collection';
  const [isLoading, setIsLoading] = React.useState(false);
  const userId = window.electron.store.get('userId');
  const storedTokenId = window.electron.store.get('tokenId');
  const storedVariant = window.electron.store.get('variant');
  const [tokenId, setTokenId] = React.useState<string | null>(storedTokenId);
  const [variant, setVariant] = React.useState<NFTColor | null>(storedVariant);
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;
    const claimNFT = () => {
      if (!tokenId || !variant) {
        setIsLoading(true);
        getUserTokenFromAPI({
          userId,
          handleError: (err: any) => {
            Sentry.captureException(err);
            console.log(err);
          },
        })
          .then((response: ApiResponse) => {
            if (response.tokenId && response.attributes[0].value) {
              setTokenId(response.tokenId);
              window.electron.store.set('tokenId', response.tokenId);
              setVariant(response.attributes[0].value);
              window.electron.store.set(
                'variant',
                response.attributes[0].value
              );
              setIsLoading(false);
              clearInterval(interval);
            }
            return response;
          })
          .catch((err) => {
            Sentry.captureException(err);
            console.log(err);
          });
      }
    };

    claimNFT();

    if (!tokenId || !variant) {
      interval = setInterval(() => {
        claimNFT();
      }, 20000);
    }
    return () => clearInterval(interval);
  }, [storedTokenId, storedVariant]);

  return (
    <div className={isLoading ? styles.containerStatic : styles.container}>
      {isLoading ? (
        <>
          <p>Your NFT is downloading...</p>
          <Spinner width={40} />
        </>
      ) : (
        <>
          <div className={styles.nftContainer}>
            <div className={getNFTVariantStyles(variant)}></div>
          </div>
          <div className={styles.tokenInfo}>
            <div className={styles.item}>
              <div className={styles.itemName}>Collection</div>
              <div className={styles.itemValue}>{collection}</div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemName}>Token ID</div>
              <div className={styles.itemValue}>{tokenId}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
