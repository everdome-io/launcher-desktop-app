import React from 'react';

import { BackButton } from '@renderer/components/BackButton';
import { Channels } from '@interfaces';
import { useNavigate } from 'react-router-dom';
import styles from './Help.module.css';

export const Help: React.FC = () => {
  const navigate = useNavigate();
  const onCancel = () => {
    navigate('/');
    window.electron.ipcRenderer.sendMessage(Channels.closeFAQWindow);
  };
  return (
    <div className={styles.container}>
      <div className={styles.webView}>
        <div className={styles.spinner}>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>

      <div className={styles.footer}>
        <BackButton onClick={onCancel} />
      </div>
    </div>
  );
};
