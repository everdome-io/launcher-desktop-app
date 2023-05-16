import { URL } from 'url';
import path from 'path';
import * as uuid1 from 'uuid';
import { errorHandler } from './errorHandler';

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
    .catch(errorHandler);

  return s3Path;
}

export async function getLatestWindowsVersion(): Promise<string | null> {
  let version: string | null = null;
  await fetch(
    `https://metahero-prod-game-builds.s3.amazonaws.com/launcher-version.json`
  )
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('Error fetching user data');
      }
      const body = await response.json();
      version = body.latest;
      return response;
    })
    .catch(errorHandler);

  return version;
}

export const uuid = uuid1.v4;

export const calculateProfileWindowPosition = (
  mainWindowPosition: number[] | undefined
) => {
  const [x, y] = mainWindowPosition || [];
  if (x && y) {
    return [x + 962, y + 68];
  }
  return [1218, 202];
};

export const calculateExtensionWindowPosition = (
  profileWindowPosition: number[]
) => {
  const [x, y] = profileWindowPosition;
  return [x - 5, y + 70];
};

export function getDialogMessageByOS(title: string, text: string) {
  const os = getOS();
  return `${os === OperatingSystem.MacOS ? title : ''} ${text}`;
}
