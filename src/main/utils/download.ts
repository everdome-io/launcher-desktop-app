import path from 'path';
import request from 'request';
import * as fs from 'fs';
import { IpcMainEvent } from 'electron';
import { eventsClient } from '../events';
import { Channels, Processes } from '../../interfaces';


function fileExists(path : string){
  try {
    if (fs.existsSync(path)) {
      //file exists
      return true;
    }
    return false;
  } catch(err) {
    return false;
  }
}

export function downloadFileWithProgress(
  localUserPath: string,
  webLink: string,
  event: IpcMainEvent,
  progressCallback: (percent: number) => void
) {
  // Save variable to know progress
  let receivedBytes = 0;
  let totalBytes = 0;
  const eventsInstance = eventsClient(event);


  const filePath = path.join(localUserPath, 'game.zip');

  if(fileExists(filePath)){

  }

  const out = fs.createWriteStream(filePath);

  const req = request({
    method: 'GET',
    uri: webLink,
  });

  req.pipe(out);

  req.on('response', (data) => {
    const contentLength = data?.headers['content-length']?.toString();
    if (contentLength) {
      totalBytes = parseInt(contentLength, 10);
    }
  });

  // Update the received bytes
  req.on('data', (chunk) => {
    receivedBytes += chunk.length;
    const progress = (receivedBytes * 100) / totalBytes;
    progressCallback(progress);
  });

  req.on('end', () => {
    console.log("download finished");
    eventsInstance.reply({
      channel: Channels.changeState,
      message: {
        process: Processes.download,
        progress: 100,
        processingSize: 0,
        localUserPath: '',
        isFinished: true,
      },
    });
  });

  req.on('error', () => {
    console.log("download failed");
    eventsInstance.reply({
      channel: Channels.changeState,
      message: {
        process: Processes.error,
        progress: 100,
        localUserPath: '',
        processingSize: 0,
        isFinished: true,
      },
    });
  });
}
