import { URL } from 'url';
import path from 'path';
import date from 'date-and-time';

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
    // case OperatingSystem.Windows:
    //   return 'https://metahero-prod-game-builds.s3.amazonaws.com/TLauncher-2.876-Installer-1.0.7-global.zip';
    case OperatingSystem.Windows:
      return 'https://metahero-prod-game-builds.s3.amazonaws.com/Everdome_Client_Win64_Shipping_002499.zip';
    case OperatingSystem.MacOS:
      return 'https://metahero-prod-game-builds.s3.amazonaws.com/Everdome_Client_Mac_Shipping_002234.zip';
    default:
      return '';
  }
}

export function setupLogging(exePath : string, baseFileName : string, level : string = 'silly') {

  const log = require('electron-log');
  var fs = require('fs');

  if(baseFileName.split('.').length!==2){
    throw new Error(`baseFileName must have exacly one '.'`);
  }

  const fileName = baseFileName.split('.')[0];
  const extension = baseFileName.split('.')[1];

  Object.assign(console, log.functions);

  log.transports.file.level = level;
  log.transports.file.maxSize = 1024*1024;

  const currentLogNameWithPath = path.join(
    path.join(exePath, 'logs'),
    baseFileName
  );

  log.transports.file.resolvePath = () => {
    return currentLogNameWithPath;
  };

  log.transports.file.archiveLog = (file: any)=>{
    var oldPath = file.toString();
    const now = new Date();
    const dateStr = date.format(now, 'YYYYMMDDHHmmss');
    console.log(`Archiving ${baseFileName} to ${fileName}${dateStr}.${extension}`);
    const newPath = oldPath.replace(baseFileName, `${fileName}${dateStr}.${extension}`)
    fs.renameSync(oldPath, newPath);

  }
}

