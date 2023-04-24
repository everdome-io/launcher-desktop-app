import { FC, useState } from 'react';
import avatars from '@renderer/utils/avatars';
import avatarStand from 'assets/images/avatar-stand.svg';
import { Channels } from '@interfaces';
import { ArrowRight } from '@renderer/icons/ArrowRight';
import { ArrowLeft } from '@renderer/icons/ArrowLeft';
import { BackButton } from '@renderer/components/BackButton';
import { useNavigate } from 'react-router-dom';
import styles from './AvatarList.module.css';

export const AvatarList: FC<{
  nickName: string;
  saveAvatar: ({
    nickName,
    avatarId,
  }: {
    nickName: string;
    avatarId: string;
  }) => Promise<void>;
}> = ({ nickName, saveAvatar }) => {
  const navigate = useNavigate();
  const [avatarIndex, setAvatarIndex] = useState(0);

  const onClickNext = () => {
    setAvatarIndex(avatarIndex + 2);
  };
  const onClickPrev = () => {
    setAvatarIndex(avatarIndex - 2);
  };
  const onCancel = () => {
    window.electron.ipcRenderer.sendMessage(Channels.closeAvatarDialog);
    navigate('/');
  };
  const onSave = () => {
    saveAvatar({ nickName: 'to_be_changed', avatarId: 'to_be_changed' });
    window.electron.ipcRenderer.sendMessage(Channels.closeAvatarDialog);
    navigate('/');
  };
  const onSaveUsername = () => {
    saveAvatar({ nickName: 'to_be_changed', avatarId: 'to_be_changed' });
    (document.activeElement as HTMLElement).blur();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Enter <strong>username</strong> & choose your <strong>avatar</strong>
      </h1>
      <div className={styles.userNameInputBox}>
        <span className={styles.prefix}>@ </span>
        <input type="text" placeholder="Your username" />
        <button onClick={onSaveUsername} className={styles.inputBtn}>
          Save
        </button>
      </div>
      <div className={styles.chooseAvatarContainer}>
        <button
          onClick={onClickPrev}
          className={styles.sliderBtn}
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
          className={styles.sliderBtn}
          disabled={avatarIndex === avatars.length - 2}
        >
          <ArrowRight />
        </button>
      </div>
      <div className={styles.actionBtns}>
        <BackButton onClick={onCancel} />
        <button onClick={onSave} className={styles.saveAvatar}>
          Save
        </button>
      </div>
    </div>
  );
};
