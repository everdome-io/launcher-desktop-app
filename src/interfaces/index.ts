export enum Channels {
  ipcExample = 'ipc-example',
  downloadProcess = 'download-process',
}
export type WebFile = {
  link: string;
  filepath: string;
};

export type ElectronHandlerArgs<T> = T extends Channels.ipcExample
  ? string
  : T extends Channels.downloadProcess
  ? WebFile
  : never;

export enum DownloadStatus {
  finished = 'finished',
  pending = 'pending',
}

export type ElectronOnceArgs<T> = T extends Channels.ipcExample
  ? string
  : T extends Channels.downloadProcess
  ? DownloadStatus
  : never;

export type AppConfig = {
  isFileDownloaded: boolean;
};
