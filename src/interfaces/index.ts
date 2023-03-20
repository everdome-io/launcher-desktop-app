export enum Channels {
  ipcExample = 'ipc-example',
  downloadProcess = 'download-process',
  changeConfig = 'change-config',
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
  in_progress = 'in_progress',
}

export type AppConfig = {
  isFileDownloaded: boolean;
  duringDownload: boolean;
  progress: number;
};
export type ElectronOnceArgs<T> = T extends Channels.ipcExample
  ? string
  : T extends Channels.downloadProcess
  ? DownloadStatus
  : T extends Channels.changeConfig
  ? AppConfig
  : never;
