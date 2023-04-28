import path from 'path';
import { exec } from 'child_process';
import { getOS, OperatingSystem } from '.';

type PlayProperties = {
  filePath: string;
  uid: string;
  displayname: string;
  avatarid: string;
};

function chmodPlusX(filePath: string): void {
  exec(`chmod +x ${filePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing chmod: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Standard error output: ${stderr}`);
      return;
    }

    console.log(`Successfully executed chmod +x on ${filePath}`);
  });
}

export async function execCommand(command: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        reject(error);
        return;
      }

      if (stderr) {
        console.error(`Standard error output: ${stderr}`);
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
    `${filePath} -game -log -uid=${uid} -displayname=${displayname} -avatarid=${avatarid}`
  );
}

function playOnWindows({
  filePath,
  uid,
  displayname,
  avatarid,
}: PlayProperties): void {
  exec(
    `"${filePath}" -game -log -uid=${uid} -displayname=${displayname} -avatarid=${avatarid}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing file: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
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
  switch (os) {
    case OperatingSystem.MacOS:
      playOnMacOS({
        filePath: path.join(
          filePath,
          'Mac/Mars-Mac-Shipping.app/Contents/MacOS/Mars-Mac-Shipping'
        ),
        avatarid,
        displayname,
        uid,
      });
      break;
    case OperatingSystem.Windows:
      playOnWindows({
        filePath: path.join(filePath, `WindowsClientShipping/Mars.exe`),
        avatarid,
        displayname,
        uid,
      });
      break;
    default:
  }
}
