import { FC } from 'react';
import avatars from '@renderer/utils/avatars';
import avatarStand from 'assets/images/avatar-stand.svg';
import { ChooseAvatar } from './ChooseAvatar';
import styles from './UserAvatar.module.css';

export const UserAvatar: FC<{
  avatarId: string | null;
}> = ({ avatarId }) => {
  return avatarId ? (
    <div className={styles.avatar}>
      <img
        src={avatars[Number(avatarId)]}
        width="342"
        height="386"
        alt="Your avatar"
      />
      <img className={styles.stand} src={avatarStand} />
    </div>
  ) : (
    <ChooseAvatar />
  );
};
