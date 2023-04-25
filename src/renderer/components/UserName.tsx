import React from 'react';
import styles from './UserName.module.css';

export const UserName: React.FC<{ userName: string | null }> = ({
  userName,
}) => {
  return (
    <p className={userName ? styles.usernameLabel : styles.usernameEmpty}>
      @{`${userName || 'Your username'}`}
    </p>
  );
};
