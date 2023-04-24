import { AppState, CrossWindowState } from '@interfaces';
import { FC } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { ProfileDetails } from './views/ProfileDetails';
import './UserProfile.css';
import { AvatarList } from './views/AvatarList';

const UserProfile: FC<{
  state: AppState;
  crossWindowState: CrossWindowState;
}> = ({ state, crossWindowState }) => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProfileDetails state={state} crossWindowState={crossWindowState} />
          }
        />
        <Route path="/choose-avatar" element={<AvatarList />} />
      </Routes>
    </HashRouter>
  );
};

export default UserProfile;
