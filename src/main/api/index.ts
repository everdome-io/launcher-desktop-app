const BACKEND_URL = 'https://backend.prod.aws.everdome.io';

export async function getUserFromAPI({
  userId,
  handleError,
}: {
  userId: string;
  handleError: (err: any) => void;
}) {
  await fetch(`${BACKEND_URL}/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching user data');
      }
      return response.json();
    })
    .catch((error) => {
      handleError(error);
    });
}
