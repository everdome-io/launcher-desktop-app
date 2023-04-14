import { AppState, CrossWindowState } from '@interfaces';
import { FC } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ProfileDetails } from './views/ProfileDetails';
import './UserProfile.css';

const UserProfile: FC<{
  state: AppState;
  crossWindowState: CrossWindowState;
}> = ({ state, crossWindowState }) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProfileDetails state={state} crossWindowState={crossWindowState} />
          }
        />
      </Routes>
    </Router>
  );
};

export default UserProfile;
