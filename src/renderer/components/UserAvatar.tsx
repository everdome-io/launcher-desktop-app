import { FC } from 'react';
import { CrossWindowState } from '@interfaces';
import { ChooseAvatar } from './ChooseAvatar';
import avatars from '@renderer/utils/avatars';
import avatarStand from 'assets/images/avatar-stand.svg';
import styles from './UserAvatar.module.css';

export const UserAvatar: FC<{
  crossWindowState: CrossWindowState;
}> = ({ crossWindowState }) => {
  const avatarId = crossWindowState.avatarId || undefined;
  return avatarId ? (
    <div className={styles.avatar}>
      <img
        src={avatars[Number(avatarId)]}
        srcSet={`${avatars[Number(avatarId) + 1]} 2x`}
        alt="Your avatar"
      />
      <img className={styles.stand} src={avatarStand} />
    </div>
  ) : (
    <ChooseAvatar />
  );
};
