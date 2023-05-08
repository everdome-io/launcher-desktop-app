/* eslint-disable no-console */
import path from 'path';
import { exec, ExecException } from 'child_process';
import { dialog } from 'electron';
import { getOS, OperatingSystem } from '.';
import { errorHandler } from './errorHandler';

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
}: EnterGameProperties): Promise<void> {
  const os = getOS();
  if (os === OperatingSystem.MacOS) await execChmodPlusX(filePath);
  await execCommand(
    `${filePath} -game -uid=${uid} -displayname=${displayname} -avatarid=${avatarid}`
  );
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

export async function playMetaverse(
  dirPath: string,
  getOpenParams: () => Pick<
    EnterGameProperties,
    'displayname' | 'uid' | 'avatarid'
  >
): Promise<void> {
  const { uid, displayname, avatarid } = getOpenParams();
  const os = getOS();
  await enterGame({
    filePath: getFilePath(dirPath),
    avatarid: avatarid + 1,
    displayname,
    uid,
  }).catch((error: ExecException) => {
    const dialogOpts = {
      type: 'warning',
      buttons: ['Confirm'],
      title: 'Could not enter metaverse',
      message: error.toString().includes('Bad CPU type in executable')
        ? `${
            os === OperatingSystem.MacOS ? 'Could not enter metaverse.' : ''
          } Your system does not meets game’s requirements.`
        : `${
            os === OperatingSystem.MacOS ? 'Could not enter metaverse.' : ''
          } Please contact everdome support to get more details.`,
      icon: path.join(
        __dirname.toString().replace('src/main/utils', ''),
        'assets/icons/96x96.png'
      ),
    };
    // eslint-disable-next-line promise/no-nesting
    dialog.showMessageBox(dialogOpts).catch(errorHandler);
  });
}
