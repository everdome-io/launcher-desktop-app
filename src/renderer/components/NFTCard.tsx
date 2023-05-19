import React, { useEffect } from 'react';
import { getUserTokenFromAPI } from '@api';
import * as Sentry from '@sentry/electron';
import styles from './NFTCard.module.css';
import { Spinner } from './Spinner';

// eslint-disable-next-line no-shadow
enum NFTColor {
  White = 'White',
  Black = 'Black',
  Blue = 'Blue',
}
interface ApiResponse {
  tokenId: string;
  publicKey: string;
  contractAddress: string;
  attributes: {
    trait_type: string;
    value: NFTColor;
  }[];
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

export const NFTCard: React.FC<{
  setPublicKey: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ setPublicKey }) => {
  const collection = 'Alex Greenwood x OKX Trainer Collection';
  const [isLoading, setIsLoading] = React.useState(false);
  const userId = window.electron.store.get('userId');
  const storedContractAddress = window.electron.store.get('contractAddress');
  const storedTokenId = window.electron.store.get('tokenId');
  const storedVariant = window.electron.store.get('variant');
  const [tokenId, setTokenId] = React.useState<string | null>(storedTokenId);
  const [variant, setVariant] = React.useState<NFTColor | null>(storedVariant);
  const [contractAddress, setContractAddress] = React.useState<string | null>(
    storedContractAddress
  );
  const handleOnClick = () => {
    if (contractAddress && tokenId) {
      window.open(
        `https://www.oklink.com/oktc/assets/${contractAddress}/${tokenId}`
      );
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let interval: NodeJS.Timeout | undefined;
    const claimNFT = () => {
      if (!tokenId || !variant || !contractAddress) {
        setIsLoading(true);
        getUserTokenFromAPI({
          userId,
          handleError: (err: any) => {
            Sentry.captureException(err);
            console.log(err);
          },
        })
          .then((response: ApiResponse) => {
            if (
              response.tokenId &&
              response.attributes[0].value &&
              response.contractAddress &&
              response.publicKey
            ) {
              setTokenId(response.tokenId);
              window.electron.store.set('tokenId', response.tokenId);
              setContractAddress(response.contractAddress);
              window.electron.store.set(
                'contractAddress',
                response.contractAddress
              );
              setPublicKey(response.publicKey);
              window.electron.store.set('publicKey', response.publicKey);
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
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [
    storedTokenId,
    storedVariant,
    storedContractAddress,
    tokenId,
    variant,
    contractAddress,
    userId,
    setPublicKey,
  ]);

  return (
    <div
      className={isLoading ? styles.containerStatic : styles.container}
      onClick={handleOnClick}
    >
      {isLoading ? (
        <>
          <p>Your NFT is downloading...</p>
          <Spinner width={40} />
        </>
      ) : (
        <>
          <div className={styles.nftContainer}>
            <div className={getNFTVariantStyles(variant)} />
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
