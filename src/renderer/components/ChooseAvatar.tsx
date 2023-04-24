import { FC } from 'react';
import { Channels } from '@interfaces';
import chooseAvatarImg from 'assets/images/choose-avatar.png';
import chooseAvatarImg_2x from 'assets/images/choose-avatar@2x.png';
import styles from './ChooseAvatar.module.css';
import { useNavigate } from 'react-router-dom';

export const ChooseAvatar: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.electron.ipcRenderer.sendMessage(Channels.openAvatarDialog);
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
