import { AppState, CrossWindowState } from '@interfaces';
import { FC, useEffect, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { ProfileDetails } from './views/ProfileDetails';
import './UserProfile.css';
import { AvatarList } from './views/AvatarList';
import { UserAttributes, getUserFromAPI, setUserInAPI } from '../api';
import { generateFakeEthAddress } from './utils/publicKeyGenerator';
import { generateNickname } from './utils/usernameGenerator';

const UserProfile: FC<{
  state: AppState;
  crossWindowState: CrossWindowState;
}> = ({ state, crossWindowState }) => {
  const userId = window.electron.store.get('userId');
  const [userAttributes, setUserAttributes] = useState<UserAttributes>({
    userId,
    publicKey: generateFakeEthAddress(),
    nickName: generateNickname(),
    isFakePublicKey: true,
    avatarId: '',
  });
  useEffect(() => {
    getUserFromAPI({
      userId,
      handleError: (err: any) => console.log('User not created jet'),
    })
      .then((response) => {
        const user = {
          ...response,
          avatarId:
            response.nickName === null ? generateNickname() : response.nickName,
          publicKey:
            response.publicKey === null
              ? generateNickname()
              : response.publicKey,
        };
        setUserAttributes(user);
        return response;
      })
      .catch((err) => console.log('User not created jet'));
  }, [userId]);

  const saveUser = async ({
    nickName,
    avatarId,
  }: {
    nickName: string;
    avatarId: string;
  }) => {
    setUserAttributes({ ...userAttributes, avatarId, nickName });
    await setUserInAPI({ ...userAttributes, avatarId, nickName }, () =>
      console.log('err')
    );
  };

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
