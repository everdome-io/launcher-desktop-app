import React, { useState } from 'react';
import keyboard from 'assets/images/howto-keyboard.png';
import styles from './HowTo.module.css';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '@renderer/components/BackButton';
import { ArrowRight } from '@renderer/icons/ArrowRight';
import { Channels } from '@interfaces';

export const HowTo: React.FC = () => {
  const navigate = useNavigate();

  const backToMain = () => {
    window.electron.ipcRenderer.sendMessage(Channels.backToMainView);
    navigate('/');
  };
  const play = () => {
    window.electron.ipcRenderer.sendMessage(Channels.playProcess);
  };
  return (
    <div className={styles.container}>
      <img className={styles.image} src={keyboard} width="1152" height="456" />
      <div className={styles.footer}>
        <BackButton onClick={backToMain} />
        <button className={styles.playBtn} onClick={play}>
          Let's go
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
