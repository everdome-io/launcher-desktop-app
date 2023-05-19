import React from 'react';
import copyIcon from 'assets/icons/copy-icon.svg';
import styles from './UserName.module.css';

export const UserName: React.FC<{
  userName: string | null;
  publicKey: string | null;
}> = ({ userName, publicKey }) => {
  const handleCopyText = async () => {
    if (publicKey) await navigator.clipboard.writeText(publicKey);
  };
  return (
    <div>
      <p className={userName ? styles.usernameLabel : styles.usernameEmpty}>
        @{`${userName || 'Your username'}`}
      </p>
      <div style={{ fontSize: '12px' }}>
        {`${publicKey?.substring(0, 32)}...`}
        <a href="#">
          <img
            className={styles.copyIcon}
            src={copyIcon}
            alt="copy"
            onClick={handleCopyText}
          />
        </a>
      </div>
    </div>
  );
};
