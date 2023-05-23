import React, { useState } from 'react';
import copyIcon from 'assets/icons/copy-icon.svg';
import styles from './UserName.module.css';
import { OpenWallet } from '@renderer/icons/OpenWallet';
import { Channels } from '@interfaces';
import { DropDownArrow } from '@renderer/icons/DropDownArrow';

export const UserName: React.FC<{
  userName: string | null;
  publicKey: string | null;
}> = ({ userName, publicKey }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleCopyText = async () => {
    if (publicKey) await navigator.clipboard.writeText(publicKey);
    setIsOpen(!isOpen);
  };
  const openOKXWallet = () => {
    window.electron.ipcRenderer.sendMessage(Channels.showOkxWindow);
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <p className={userName ? styles.usernameLabel : styles.usernameEmpty}>
        @{`${userName || 'Your username'}`}
      </p>
      {publicKey && (
        <>
          <button
            className={isOpen ? styles.walletBtnOpen : styles.walletBtnClose}
            onClick={toggleMenu}
          >
            <p className={styles.walletAddress}>{shortenAddress(publicKey)}</p>
            <DropDownArrow />
          </button>
          <ul
            className={
              isOpen ? styles.dropDownMenuOpen : styles.dropDownMenuClose
            }
          >
            <li onClick={handleCopyText}>
              Copy address
              <img className={styles.copyIcon} src={copyIcon} alt="copy" />
            </li>
            <li onClick={openOKXWallet}>
              Show wallet
              <OpenWallet />
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export function shortenAddress(address?: string | null) {
  if (!address) {
    return null;
  }
  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4
  )}`;
}
