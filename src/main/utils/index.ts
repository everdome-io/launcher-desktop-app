import { URL } from 'url';
import path from 'path';

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

export function getDownloadLink(): string {
  const os = getOS();
  switch (os) {
    case OperatingSystem.Windows:
      return 'https://metahero-prod-game-builds.s3.amazonaws.com/Everdome_Client_Win64_Shipping_002499.zip';
    case OperatingSystem.MacOS:
      return 'https://metahero-prod-game-builds.s3.amazonaws.com/Everdome_Client_Mac_Shipping_002234.zip';
    default:
      return '';
  }
}
