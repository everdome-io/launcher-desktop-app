/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import path from 'path';
import request from 'request';
import * as fs from 'fs';
import { IpcMainEvent } from 'electron';
import { Channels, WebFile } from '../interfaces';
import { eventsClient } from './events';

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
          isFileDownloaded: false,
          duringDownload: true,
          progress: 0,
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
        isFileDownloaded: false,
        duringDownload: true,
        progress: (receivedBytes * 100) / totalBytes,
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
        isFileDownloaded: true,
        duringDownload: false,
        progress: 100,
        isExtracted: false,
        localUserPath: '',
      },
    });
  });
}
