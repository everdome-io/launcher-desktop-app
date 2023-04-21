import { URL } from 'url';
import path from 'path';
import * as uuid1 from 'uuid';
import createS3Client from './clients/s3-client';

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
  const bucket = 'metahero-prod-game-builds';
  const s3Client = createS3Client({});
  const configFile = await s3Client.getObject({
    path: 'version.json',
    bucket,
  });
  const os = getOS();
  const config = configFile?.body.toString();
  if (config) {
    const filePath = JSON.parse(config)[os] as string;
    const exist = await s3Client.checkObjectExistence({
      path: filePath,
      bucket,
    });
    return exist ? filePath : null;
  }
  return null;
}

export const uuid = uuid1.v4;
