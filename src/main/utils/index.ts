import { URL } from 'url';
import path from 'path';
import * as uuid1 from 'uuid';

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

// eslint-disable-next-line no-shadow
export enum OperatingSystem {
  Windows = 'Windows',
  MacOS = 'MacOS',
}

export function getOS(): OperatingSystem {
  const { platform } = process;

  switch (platform) {
    case 'win32':
      return OperatingSystem.Windows;
    case 'darwin':
      return OperatingSystem.MacOS;
    default:
      throw new Error('Wrong OS');
  }
}

export async function getDownloadLink(): Promise<string | null> {
  const os = getOS();
  let s3Path: string | null = null;
  await fetch(`https://metahero-prod-game-builds.s3.amazonaws.com/version.json`)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('Error fetching user data');
      }
      const body = await response.json();
      s3Path = body[os];
      return response;
    })
    .catch((error) => {
      console.log('error', error);
    });

  return s3Path;
}

export const uuid = uuid1.v4;

export const calculateProfileWindowPosition = (
  mainWindowPosition: number[] | undefined
) => {
  const [x, y] = mainWindowPosition || [];
  if (x && y) {
    return [x + 962, y + 56];
  }
  return [1218, 216];
};

export const calculateExtensionWindowPosition = (
  profileWindowPosition: number[]
) => {
  const [x, y] = profileWindowPosition;
  return [x - 5, y - 10];
};
