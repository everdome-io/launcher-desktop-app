import { FC, useState } from 'react';
import avatars from '@renderer/utils/avatars';
import { Channels } from '@interfaces';

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Enter username & choose your avatar</h1>
      <img
        src={avatars[avatarIndex]}
        srcSet={`${avatars[avatarIndex + 1]} 2x`}
        alt="Choose avatar"
      />
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
