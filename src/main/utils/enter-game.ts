/* eslint-disable no-console */
import path from 'path';
import { exec, ExecException } from 'child_process';
import { dialog } from 'electron';
import { getOS, OperatingSystem } from '.';
import { errorHandler } from './errorHandler';
import fs from 'fs';

type EnterGameProperties = {
  filePath: string;
  uid: string;
  displayname: string;
  avatarid: number;
};

function execChmodPlusX(filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(`chmod +x ${filePath}`, (error, stdout, stderr) => {
      if (stderr) {
        errorHandler(stderr);
      }
      if (error) {
        errorHandler(error);
        reject(error);
        return;
      }

      console.log(`Successfully executed command: chmod +x`);
      resolve();
    });
  });
}

export async function execCommand(command: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (stderr) {
        errorHandler(stderr);
      }
      if (error) {
        errorHandler(error);
        reject(error);
        return;
      }

      console.log(`Successfully executed command: ${command}`);
      resolve();
    });
  });
}

async function enterGame({
  filePath,
  uid,
  displayname,
  avatarid,
}: EnterGameProperties,
resetDownload : () => Promise<void>): Promise<void> {
  console.log("in enter game", filePath);
  if (!fs.existsSync(filePath)) {
    console.log("in enter game, file does not exist");
    await resetDownload();
  }else{
    const os = getOS();
    if (os === OperatingSystem.MacOS) await execChmodPlusX(filePath);
    await execCommand(
      `"${filePath}" -game -uid=${uid} -displayname=${displayname} -avatarid=${avatarid}`
    );
  }
}

function getFilePath(dirPath: string) {
  const os = getOS();
  return path.join(
    dirPath,
    os === OperatingSystem.MacOS
      ? 'Mac/Mars-Mac-Shipping.app/Contents/MacOS/Mars-Mac-Shipping'
      : 'WindowsClientShipping/Mars.exe'
  );
}

function getDialogMessage(text: string) {
  const os = getOS();
  return `${
    os === OperatingSystem.MacOS ? 'Could not enter metaverse.' : ''
  } ${text}`;
}

async function handlePlayMetaverseError(error: ExecException) {
  const dialogOpts = {
    type: 'warning',
    buttons: ['Ok'],
    title: 'Could not enter metaverse',
    message: error.toString().includes('Bad CPU type in executable')
      ? getDialogMessage('Your system does not meet the game’s requirements.')
      : getDialogMessage(
          'Please contact Everdome support to get more details.'
        ),
  };
  return dialog.showMessageBox(dialogOpts);
}

export async function playMetaverse(
  dirPath: string,
  getOpenParams: () => Pick<
    EnterGameProperties,
    'displayname' | 'uid' | 'avatarid'
  >,
  resetDownload: () => Promise<void>
): Promise<void> {
  const { uid, displayname, avatarid } = getOpenParams();
  await enterGame({
    filePath: getFilePath(dirPath),
    avatarid: avatarid + 1,
    displayname,
    uid,
  },
  resetDownload).catch(handlePlayMetaverseError);
}
