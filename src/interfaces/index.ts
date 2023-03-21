export enum Channels {
  downloadProcess = 'download-process',
  extractGame = 'extract-game',
  changeState = 'change-state',
  openGame = 'open-game',
  openDialog = 'open-dialog',
}
export type WebFile = {
  link: string;
  filepath: string;
};
export type LocalFile = {
  filepath: string;
};

export type ElectronHandlerArgs<T> = T extends Channels.downloadProcess
  ? WebFile
  : T extends Channels.extractGame
  ? LocalFile
  : T extends Channels.openDialog
  ? null
  : T extends Channels.openGame
  ? string
  : never;

export type AppState = {
  isFileDownloaded: boolean;
  duringDownload: boolean;
  isExtracted: boolean;
  progress: number;
  localUserPath: string;
};
export type ElectronEventArgs<T> = T extends Channels.changeState
  ? AppState
  : T extends Channels.openGame
  ? string
  : never;
