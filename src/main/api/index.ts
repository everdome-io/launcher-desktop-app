import { Channels } from '../../interfaces';
import { BrowserWindow } from 'electron';

const BACKEND_URL = 'https://backend.prod.aws.everdome.io';

export async function getUserFromAPI({
  userId,
  mainWindow,
}: {
  userId: string;
  mainWindow: BrowserWindow | null;
}) {
  await fetch(`${BACKEND_URL}/user/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching user data');
      }
      return response.json();
    })
    .catch((error) => {
      mainWindow?.webContents.send(Channels.crossWindow, {
        isAuthenticated: true,
        errorMessage: error.toString(),
      });
    });
}
