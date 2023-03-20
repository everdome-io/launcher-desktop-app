/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import path from 'path';
import request from 'request';
import * as fs from 'fs';
import { IpcMainEvent } from 'electron';
import { Channels, DownloadStatus, WebFile } from '../interfaces';

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
    if (contentLength) totalBytes = parseInt(contentLength, 10);
  });

  // Update the received bytes
  req.on('data', (chunk) => {
    receivedBytes += chunk.length;
    console.log(`Bytes received ${receivedBytes} of ${totalBytes}`);
  });

  req.on('end', () => {
    console.log('File succesfully downloaded');
    event.reply(Channels.downloadProcess, DownloadStatus.finished);
  });
}
