/* eslint-disable no-shadow */
export enum Channels {
  openDialog = 'open-dialog-process',
  downloadProcess = 'download-process',
  extractProcess = 'extract-process',
  installationProcess = 'installation-process',

  changeState = 'change-state',
}
export enum Processes {
  openDialog = 'open-dialog',
  download = 'download',
  extract = 'extract',
  installation = 'installation',
}

export type LocalFile = {
  filepath: string;
};

export type ElectronHandlerArgs<T> = T extends Channels.downloadProcess
  ? string
  : T extends Channels.extractProcess
  ? LocalFile
  : T extends Channels.openDialog
  ? null
  : T extends Channels.installationProcess
  ? string
  : never;

export type AppState = {
  progress: null | number;
  isFinished: boolean;
  process: Processes;
  localUserPath: string;
};
export type ElectronEventArgs<T> = T extends Channels.changeState
  ? AppState
  : T extends Channels.installationProcess
  ? string
  : never;
