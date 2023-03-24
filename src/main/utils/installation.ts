import path from 'path';
import { exec } from 'child_process';
import * as sudo from 'sudo-prompt';
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

function execSudoCommand(
  command: string,
  callback: (error: Error | null) => void
): void {
  sudo.exec(
    command,
    { name: 'Your Application Name' },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        callback(error);
        return;
      }

      if (stderr) {
        console.error(`Standard error output: ${stderr}`);
        callback(new Error(stderr.toString()));
        return;
      }

      console.log(`Successfully executed command: ${command}`);
      callback(null);
    }
  );
}

function installOnMacOS(filePath: string): void {
  chmodPlusX(filePath);
  const scriptPath = path.join(__dirname, 'install_dmg.sh');
  execSudoCommand(`sh "${scriptPath}" "${filePath}"`, (error) => {
    if (error) {
      console.error('An error occurred:', error);
      return;
    }

    console.log('Application has been successfully installed.');
  });
}

function installOnWindows(filePath: string): void {
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

export function installEverdome(filePath: string): void {
  const os = getOS();
  switch (os) {
    case OperatingSystem.MacOS:
      installOnMacOS(path.join(filePath, 'game/Everdome.dmg'));
      break;
    case OperatingSystem.Windows:
      installOnWindows(path.join(filePath, 'game/Everdome.exe'));
      break;
    default:
  }
}
