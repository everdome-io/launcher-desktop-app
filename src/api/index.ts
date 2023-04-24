const BACKEND_URL = 'https://backend.prod.aws.everdome.io';

export async function getUserFromAPI({
  userId,
  handleError,
}: {
  userId: string;
  handleError: (err: any) => void;
}) {
  const result = await fetch(`${BACKEND_URL}/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching user data');
      }
      return response.json();
    })
    .catch((error) => {
      handleError(error);
    });

  return result;
}

export interface UserAttributes {
  userId: string;
  publicKey: string;
  avatarId: string | null;
  nickName: string;
  isFakePublicKey: boolean;
}
export async function setUserInAPI(
  { userId, publicKey, avatarId, nickName, isFakePublicKey }: UserAttributes,
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
    .catch((error) => {
      handleError(error);
    });
}
