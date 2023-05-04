import path from 'path';
import { exec } from 'child_process';
import { getOS, OperatingSystem } from '.';
import { errorHandler } from './errorHandler';

type PlayProperties = {
  filePath: string;
  uid: string;
  displayname: string;
  avatarid: string;
};

function chmodPlusX(filePath: string): void {
  exec(`chmod +x ${filePath}`, (error, stdout, stderr) => {
    if (error) {
      return errorHandler(error);
    }

    if (stderr) {
      return errorHandler(stderr);
    }

    console.log(`Successfully executed chmod +x on ${filePath}`);
  });
}

export async function execCommand(command: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        errorHandler(error);
        reject(error);
        return;
      }

      if (stderr) {
        errorHandler(stderr);
        reject(new Error(stderr));
        return;
      }

      console.log(`Successfully executed command: ${command}`);
      resolve();
    });
  });
}

function playOnMacOS({
  filePath,
  uid,
  displayname,
  avatarid,
}: PlayProperties): void {
  chmodPlusX(filePath);
  execCommand(
    `${filePath} -game -uid=${uid} -displayname=${displayname} -avatarid=${avatarid}`
  );
}

function playOnWindows({
  filePath,
  uid,
  displayname,
  avatarid,
}: PlayProperties): void {
  exec(
    `"${filePath}" -game -uid=${uid} -displayname=${displayname} -avatarid=${avatarid}`,
    (error, stdout, stderr) => {
      if (error) {
        return errorHandler(error);
      }
      if (stderr) {
        return errorHandler(stderr);
      }
      console.log(`stdout: ${stdout}`);
    }
  );
}

export function playEverdome(
  filePath: string,
  getOpenParams: () => Pick<PlayProperties, 'displayname' | 'uid' | 'avatarid'>
): void {
  const os = getOS();
  const { uid, displayname, avatarid } = getOpenParams();
  const avatarNumber = parseInt(avatarid, 10) + 1;
  switch (os) {
    case OperatingSystem.MacOS:
      playOnMacOS({
        filePath: path.join(
          filePath,
          'Mac/Mars-Mac-Shipping.app/Contents/MacOS/Mars-Mac-Shipping'
        ),
        avatarid: avatarNumber.toString(),
        displayname,
        uid,
      });
      break;
    case OperatingSystem.Windows:
      playOnWindows({
        filePath: path.join(filePath, `WindowsClientShipping/Mars.exe`),
        avatarid: avatarNumber.toString(),
        displayname,
        uid,
      });
      break;
    default:
  }
}
