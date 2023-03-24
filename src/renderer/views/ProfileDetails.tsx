import { AppState } from '@interfaces';
import { FC } from 'react';

export const ProfileDetails: FC<{ state: AppState }> = ({ state }) => {
  return (
    <div className="container">
      <h1>Profile</h1>
    </div>
  );
};
