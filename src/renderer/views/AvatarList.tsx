import { FC, useState } from 'react';
import avatars from '@renderer/utils/avatars';
import avatarStand from 'assets/images/avatar-stand.svg';
import { Channels } from '@interfaces';
import styles from './AvatarList.module.css';
import { ArrowRight } from '@renderer/icons/ArrowRight';
import { ArrowLeft } from '@renderer/icons/ArrowLeft';

interface AvatarListProps {
  handleBack: () => void;
}
export const AvatarList: FC<AvatarListProps> = ({ handleBack }) => {
  const [avatarIndex, setAvatarIndex] = useState(0);

  const onClickNext = () => {
    setAvatarIndex(avatarIndex + 2);
  };
  const onClickPrev = () => {
    setAvatarIndex(avatarIndex - 2);
  };
  const onCancel = () => {
    window.electron.ipcRenderer.sendMessage(Channels.closeAvatarDialog);
    handleBack();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Enter <strong>username</strong> & choose your <strong>avatar</strong>
      </h1>
      <div className={styles.userNameInput}>
        <input type="text" placeholder="@Your username" />
      </div>
      <div className={styles.chooseAvatarContainer}>
        <button
          onClick={onClickPrev}
          className={styles.showNext}
          disabled={avatarIndex < 1}
        >
          <ArrowLeft />
        </button>
        <div className={styles.avatar}>
          <img
            src={avatars[avatarIndex]}
            srcSet={`${avatars[avatarIndex + 1]} 2x`}
            alt="Choose avatar"
          />
          <img className={styles.stand} src={avatarStand} />
        </div>
        <button
          onClick={onClickNext}
          className={styles.showNext}
          disabled={avatarIndex === avatars.length - 2}
        >
          <ArrowRight />
        </button>
      </div>
      <div className={styles.actionBtns}>
        <button onClick={onCancel} className={styles.cancel}>
          <ArrowLeft />
          Back
        </button>
        <button className={styles.saveAvatar}>Save</button>
      </div>
    </div>
  );
};
