import { CrossWindowState, UserAttributes } from '@interfaces';
import { FC, useEffect, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { ProfileDetails } from './views/ProfileDetails';
import './UserProfile.css';
import { AvatarList } from './views/AvatarList';
import { getUserFromAPI, setUserInAPI } from '../api';
import { generateFakeEthAddress } from './utils/publicKeyGenerator';

const UserProfile: FC<{
  crossWindowState: CrossWindowState;
}> = ({ crossWindowState }) => {
  const userId = window.electron.store.get('userId');
  const [userAttributes, setUserAttributes] = useState<UserAttributes>({
    userId,
    publicKey: generateFakeEthAddress(),
    nickName: null,
    isFakePublicKey: true,
    avatarId: null,
  });
  useEffect(() => {
    getUserFromAPI({
      userId,
      handleError: (err: any) => console.log(err),
    })
      .then((response) => {
        setUserAttributes(response);
        return response;
      })
      .catch((err) => console.log(err));
  }, [userId]);

  const saveUser = async ({
    nickName,
    avatarId,
  }: {
    nickName: string;
    avatarId: string | null;
  }) => {
    setUserAttributes({ ...userAttributes, avatarId, nickName });
    await setUserInAPI({ ...userAttributes, avatarId, nickName }, (err) =>
      console.log('err', err)
    );
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProfileDetails
              state={userAttributes}
              crossWindowState={crossWindowState}
            />
          }
        />
        <Route
          path="/choose-avatar"
          element={
            <AvatarList
              saveAvatar={saveUser}
              nickName={userAttributes.nickName || undefined}
            />
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default UserProfile;
