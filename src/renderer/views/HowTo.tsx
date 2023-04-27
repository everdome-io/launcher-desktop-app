import React, { useState } from 'react';
import keyboard from 'assets/images/howto-keyboard.png';
import quest from 'assets/images/howto-quest.png';
import styles from './HowTo.module.css';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '@renderer/components/BackButton';
import { ArrowRight } from '@renderer/icons/ArrowRight';
import { Channels } from '@interfaces';

enum HowToView {
  Keyboard = 'keyboard',
  Quest = 'quest',
}

export const HowTo: React.FC = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<HowToView>(HowToView.Keyboard);

  const backToMain = () => {
    window.electron.ipcRenderer.sendMessage(Channels.backToMainView);
    navigate('/');
  };
  const play = () => {
    window.electron.ipcRenderer.sendMessage(Channels.playProcess);
  };
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button
          className={
            view === HowToView.Keyboard ? styles.activeTab : styles.defaultTab
          }
          onClick={() => setView(HowToView.Keyboard)}
        >
          Keyboard + mouse
        </button>
        <button
          className={
            view === HowToView.Quest ? styles.activeTab : styles.defaultTab
          }
          onClick={() => setView(HowToView.Quest)}
        >
          Quest
        </button>
      </div>
      <img
        src={view === HowToView.Keyboard ? keyboard : quest}
        width="1152"
        height="456"
      />
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
