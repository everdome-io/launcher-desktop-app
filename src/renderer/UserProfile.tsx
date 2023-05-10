import * as Sentry from '@sentry/electron';
import { generateFakeEthAddress } from '@interfaces/publicKeyGenerator';
import { CrossWindowState, UserAttributes } from '@interfaces';
import { FC, useEffect, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { ProfileDetails } from './views/ProfileDetails';
import './UserProfile.css';
import { AvatarList } from './views/AvatarList';
import { getUserFromAPI } from '../api';
import { StoreKeys } from '@interfaces/store';

const UserProfile: FC<{
  crossWindowState: CrossWindowState;
}> = ({ crossWindowState }) => {
  const userId = window.electron.store.get(StoreKeys.USER_ID);
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
      handleError: (err: any) => {
        Sentry.captureException(err);
        console.log(err);
      },
    })
      .then((response) => {
        if (response) {
          setUserAttributes(response);
          window.electron.store.set(StoreKeys.PUBLIC_KEY, response.publicKey);
          window.electron.store.set(StoreKeys.AVATAR_ID, response.avatarId);
          window.electron.store.set(StoreKeys.NICK_NAME, response.nickName);
        }
        return response;
      })
      .catch((err) => {
        Sentry.captureException(err);
        console.log(err);
      });
  }, [userId]);

  const saveUser = async ({
    nickName,
    avatarId,
  }: {
    nickName: string;
    avatarId: string | null;
  }) => {
    setUserAttributes({ ...userAttributes, avatarId, nickName });
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProfileDetails
              state={userAttributes}
              crossWindowState={{
                ...crossWindowState,
                isAuthenticated: !userAttributes.isFakePublicKey,
              }}
            />
          }
        />
        <Route
          path="/choose-avatar"
          element={<AvatarList onClickSave={saveUser} />}
        />
      </Routes>
    </HashRouter>
  );
};

export default UserProfile;
