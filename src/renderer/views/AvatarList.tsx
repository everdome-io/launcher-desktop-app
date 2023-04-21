import { FC, useState } from 'react';
import avatars from '@renderer/utils/avatars';
import avatarStand from 'assets/images/avatar-stand.svg';
import { Channels } from '@interfaces';
import styles from './AvatarList.module.css';

interface AvatarListProps {
  handleBack: () => void;
}
export const AvatarList: FC<AvatarListProps> = ({ handleBack }) => {
  const [avatarIndex, setAvatarIndex] = useState(0);

  const onClick = () => {
    setAvatarIndex((avatarIndex + 2) % avatars.length);
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
      <div className={styles.avatarContainer}>
        <img
          src={avatars[avatarIndex]}
          srcSet={`${avatars[avatarIndex + 1]} 2x`}
          alt="Choose avatar"
          className={styles.avatar}
        />
        <img className={styles.stand} src={avatarStand} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1rem',
          width: '40%',
        }}
      >
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onClick}>Next</button>
      </div>
    </div>
  );
};
