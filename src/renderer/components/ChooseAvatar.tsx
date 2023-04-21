import { FC } from 'react';
import { Channels } from '@interfaces';
import chooseAvatarImg from 'assets/images/choose-avatar.png';
import chooseAvatarImg_2x from 'assets/images/choose-avatar@2x.png';
import styles from './ChooseAvatar.module.css';

interface ChooseAvatarProps {
  onClick: () => void;
}
export const ChooseAvatar: FC<ChooseAvatarProps> = ({ onClick }) => {
  const handleClick = () => {
    window.electron.ipcRenderer.sendMessage(Channels.openAvatarDialog);
    onClick();
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
