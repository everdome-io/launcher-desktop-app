import { SettingType, UserAttributes } from '@interfaces';

const BACKEND_URL = 'https://backend.prod.aws.everdome.io';

export async function getUserFromAPI({
  userId,
  handleError,
}: {
  userId: string;
  handleError: (err: any) => void;
}) {
  const result = await fetch(`${BACKEND_URL}/user/${userId}`)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('Error fetching user data');
      }
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch(handleError);

  return result;
}

export async function setUserInAPI(
  {
    userId,
    publicKey,
    avatarId,
    nickName,
    isFakePublicKey,
  }: Partial<UserAttributes>,
  handleError: (err: any) => void
) {
  await fetch(`${BACKEND_URL}/user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      publicKey,
      avatarId,
      nickName,
      isFakePublicKey,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error posting user data');
      }
      return response.json();
    })
    .catch(handleError);
}

export async function getSettingFromAPI({
  settingType,
  handleError,
}: {
  settingType: SettingType;
  handleError: (err: any) => void;
}) {
  const result = await fetch(`${BACKEND_URL}/setting/${settingType}`)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('Error fetching user data');
      }
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch(handleError);

  return result;
}

export async function getUserTokenFromAPI({
  userId,
  handleError,
}: {
  userId: string;
  handleError: (err: any) => void;
}) {
  const result = await fetch(`${BACKEND_URL}/user/${userId}/token`)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('Error fetching user data');
      }
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch(handleError);

  return result;
}
