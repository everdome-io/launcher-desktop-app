import { FC } from 'react';
import { Channels, ToggleWindowMode } from '@interfaces';
import chooseAvatarImg from 'assets/images/choose-avatar.png';
import chooseAvatarImg_2x from 'assets/images/choose-avatar@2x.png';
import { useNavigate } from 'react-router-dom';
import { sentryEventHandler } from '@main/utils/sentryEventHandler';
import styles from './ChooseAvatar.module.css';

export const ChooseAvatar: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    sentryEventHandler('Choose avatar from profile');
    window.electron.ipcRenderer.sendMessage(Channels.toggleProfileWindow, {
      mode: ToggleWindowMode.open,
    });
    navigate('/choose-avatar');
  };
  return (
    <div className={styles.container}>
      <img
        src={chooseAvatarImg}
        srcSet={`${chooseAvatarImg_2x} 2x`}
        alt="Choose avatar"
      />
      <button className={styles.chooseAvatarBtn} onClick={handleClick}>
        Choose avatar
      </button>
    </div>
  );
};
