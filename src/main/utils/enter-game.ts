import path from 'path';
import { exec } from 'child_process';
import { getOS, OperatingSystem } from '.';

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

function playOnMacOS(filePath: string): void {
  chmodPlusX(filePath);
  execCommand(filePath);
}

function playOnWindows(filePath: string): void {
  exec(`"${filePath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing file: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

export function playEverdome(
  filePath: string,
  getFolderName: () => string
): void {
  const os = getOS();
  switch (os) {
    case OperatingSystem.MacOS:
      playOnMacOS(
        path.join(
          filePath,
          'Mac/Mars-Mac-Shipping.app/Contents/MacOS/Mars-Mac-Shipping'
        )
      );
      break;
    case OperatingSystem.Windows:
      playOnWindows(path.join(filePath, `${getFolderName()}/Everdome.exe`));
      break;
    default:
  }
}
