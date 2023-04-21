import { FC } from 'react';
import chooseAvatarImg from 'assets/images/choose-avatar.png';
import chooseAvatarImg_2x from 'assets/images/choose-avatar@2x.png';
import btnStyles from '../theme/buttons.module.css';
import { Channels } from '@interfaces';

interface ChooseAvatarProps {
  onClick: () => void;
}
export const ChooseAvatar: FC<ChooseAvatarProps> = ({ onClick }) => {
  const handleClick = () => {
    window.electron.ipcRenderer.sendMessage(Channels.openAvatarDialog);
    onClick();
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        src={chooseAvatarImg}
        srcSet={`${chooseAvatarImg_2x} 2x`}
        alt="Choose avatar"
      />
      <button className={btnStyles.secondary} onClick={handleClick}>
        Choose avatar
      </button>
    </div>
  );
};
