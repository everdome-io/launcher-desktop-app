export enum Channels {
  ipcExample = 'ipc-example',
  downloadProcess = 'download-process',
  extractGame = 'extract-game',
  changeState = 'change-state',
  openGame = 'open-game',
}
export type WebFile = {
  link: string;
  filepath: string;
};
export type LocalFile = {
  filepath: string;
};

export type ElectronHandlerArgs<T> = T extends Channels.ipcExample
  ? string
  : T extends Channels.downloadProcess
  ? WebFile
  : T extends Channels.extractGame
  ? LocalFile
  : T extends Channels.openGame
  ? string
  : never;

export enum DownloadStatus {
  finished = 'finished',
  in_progress = 'in_progress',
}

export type AppState = {
  isFileDownloaded: boolean;
  duringDownload: boolean;
  isExtracted: boolean;
  progress: number;
};
export type ElectronOnceArgs<T> = T extends Channels.ipcExample
  ? string
  : T extends Channels.downloadProcess
  ? DownloadStatus
  : T extends Channels.changeState
  ? AppState
  : T extends Channels.openGame
  ? string
  : never;
