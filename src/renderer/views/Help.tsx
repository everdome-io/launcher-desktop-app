import React from 'react';

import styles from './Help.module.css';
import { BackButton } from '@renderer/components/BackButton';
import { Channels, CrossWindowState } from '@interfaces';
import { useNavigate } from 'react-router-dom';

export const Help: React.FC<{ crossWindowState: CrossWindowState }> = ({
  crossWindowState,
}) => {
  const navigate = useNavigate();
  const onCancel = () => {
    navigate('/');
    window.electron.ipcRenderer.sendMessage(Channels.closeFAQWindow);
  };
  return (
    <div className={styles.container}>
      {crossWindowState.errorMessage !== '' ? (
        <div style={{ width: '100%', height: '700px' }}></div>
      ) : (
        <>
          <h1 className={styles.title}>FAQ</h1>
          <ul className={styles.mainSection}>
            <li className={styles.faqCard}>
              <p className={styles.question}>
                Experience does not launch on my MacBook
              </p>
              <p className={styles.answer}>
                To run the OKX experience, you must have a MacBook with at least
                a M1 processor. Older MacBooks with x64 processors are unable to
                run the experience.
              </p>
            </li>
            <li className={styles.faqCard}>
              <p className={styles.question}>
                The Experience does not launch on my Windows computer
              </p>
              <p className={styles.answer}>
                You may need to install the following software:
              </p>
              <ul className={styles.answer}>
                <li>Microsoft Visual C++</li>
                <li>download here</li>
                <li>DirectX Runtime</li>
                <li>download here</li>
              </ul>
            </li>

            <li className={styles.faqCard}>
              <p className={styles.question}>
                Why does a window popup after clicking the 'Install' Button?
              </p>
              <p className={styles.answer}>
                This window allows you to select the destination folder where
                experience will be downloaded. Please select any folder on your
                disk with at least 5 GB of free space.
              </p>
            </li>
            <li className={styles.faqCard}>
              <p className={styles.question}>
                What do I need to do in order to secure an Alex Greenwood NFT?
              </p>
              <p className={styles.answer}>
                To secure one of her NFTs, you first need to connect your OKX
                wallet. If you do not already have an OKX Wallet, you can
                download one here. Once you have connected your OKX Wallet, your
                public wallet address will also be connected and you will
                receive your NFT at a later date.
              </p>
            </li>
          </ul>
        </>
      )}

      <div className={styles.footer}>
        <BackButton onClick={onCancel} />
      </div>
    </div>
  );
};
