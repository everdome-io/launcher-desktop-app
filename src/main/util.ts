/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import path from 'path';
import request from 'request';
import * as fs from 'fs';
import { IpcMainEvent } from 'electron';
import { exec } from 'child_process';
import * as sudo from 'sudo-prompt';
import StreamZip from 'node-stream-zip';
import { eventsClient } from './events';

import { Channels, WebFile } from '../interfaces';

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

export function downloadFile(event: IpcMainEvent, webFile: WebFile) {
  const eventsInstance = eventsClient(event);
  // Save variable to know progress
  let receivedBytes = 0;
  let totalBytes = 0;

  const req = request({
    method: 'GET',
    uri: webFile.link,
  });

  const out = fs.createWriteStream(path.join(webFile.filepath, 'game.zip'));
  req.pipe(out);

  // Change the total bytes value to get progress later.
  req.on('response', (data) => {
    const contentLength = data?.headers['content-length']?.toString();
    if (contentLength) {
      eventsInstance.reply({
        channel: Channels.changeState,
        message: {
          duringDownload: true,
          isDownloaded: false,
          extractProgress: 0,
          downloadProgress: 0,
          duringExtract: false,
          isExtracted: false,
          localUserPath: '',
        },
      });
      totalBytes = parseInt(contentLength, 10);
    }
  });

  // Update the received bytes
  req.on('data', (chunk) => {
    receivedBytes += chunk.length;
    console.log(`Bytes received ${receivedBytes} of ${totalBytes}`);
    eventsInstance.reply({
      channel: Channels.changeState,
      message: {
        duringDownload: true,
        isDownloaded: false,
        downloadProgress: (receivedBytes * 100) / totalBytes,
        extractProgress: 0,
        duringExtract: false,
        isExtracted: false,
        localUserPath: '',
      },
    });
  });

  req.on('end', () => {
    console.log('File succesfully downloaded');
    eventsInstance.reply({
      channel: Channels.changeState,
      message: {
        isDownloaded: true,
        duringDownload: false,
        downloadProgress: 100,
        extractProgress: 0,
        duringExtract: false,
        isExtracted: false,
        localUserPath: '',
      },
    });
  });
}

export function chmodPlusX(filePath: string): void {
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

export function installDMG(dmgPath: string): void {
  const scriptPath = path.join(__dirname, 'install_dmg.sh');
  execSudoCommand(`sh "${scriptPath}" "${dmgPath}"`, (error) => {
    if (error) {
      console.error('An error occurred:', error);
      return;
    }

    console.log('Application has been successfully installed.');
  });
}

async function getEntries(filePath: string): Promise<StreamZip.ZipEntry[]> {
  const zip = new StreamZip.async({ file: filePath });
  const entries = await zip.entries();
  const files: StreamZip.ZipEntry[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const entryName in entries) {
    if (!entryName.startsWith('__MACOSX/')) {
      files.push(entries[entryName]);
    }
  }

  await zip.close();
  return files;
}

async function extractEntry(
  filePath: string,
  entry: StreamZip.ZipEntry,
  destination: string
): Promise<void> {
  const zip = new StreamZip.async({ file: filePath });
  const outputPath = path.join(destination, entry.name);

  await zip.extract(entry.name, outputPath);
  await zip.close();
}

export async function extractWithProgress(
  filePath: string,
  destination: string,
  progressCallback: (percent: number) => void
): Promise<void> {
  const entries = await getEntries(filePath);
  const totalSize = entries.reduce((sum, entry) => sum + entry.size, 0);

  let extractedSize = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const entry of entries) {
    try {
      await extractEntry(filePath, entry, destination);
      extractedSize += entry.size;
      const percent = (extractedSize / totalSize) * 100;
      progressCallback(percent);
    } catch (error) {
      console.error('Error during extraction:', error);
    }
  }
}
