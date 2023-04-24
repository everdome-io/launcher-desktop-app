import React from 'react';
import { CrossWindowState } from '@interfaces';
import styles from './UserName.module.css';

export const UserName: React.FC<{ crossWindowState: CrossWindowState }> = ({
  crossWindowState,
}) => {
  const username = crossWindowState.username;
  return (
    <p className={username ? styles.usernameLabel : styles.usernameEmpty}>
      @{`${username ? username : 'Your username'}`}
    </p>
  );
};
