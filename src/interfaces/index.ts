/* eslint-disable no-shadow */
export enum Channels {
  openDialog = 'open-dialog-process',
  downloadProcess = 'download-process',
  extractProcess = 'extract-process',
  installationProcess = 'installation-process',
  rendererLog = 'renderer-log',
  showProfileWindow = 'show-profile-window',

  crossWindow = 'cross-window',
  changeState = 'change-state',

  appUpdate = 'app-update',

  openOKXExtension = 'open-okx',
  closeOKXExtension = 'close-okx',
}
/* eslint-disable no-shadow */
export enum AppUpdateStatus {
  nothing = 'nothing',
  checking = 'checking',
  available = 'available',
  notAvailable = 'notAvailable',
  error = 'error',
}
export enum Processes {
  openDialog = 'open-dialog',
  download = 'download',
  extract = 'extract',
  installation = 'installation',
  error = 'error',
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
  processingSize: null | number;
  isFinished: boolean;
  process: Processes;
  localUserPath: string;
};

export type CrossWindowState = {
  isAuthenticated: boolean;
};

export type AppUpdate = {
  status: AppUpdateStatus;
  message: string | null;
};

export type RendererError = {
  lvl: string,
  message: string
}

export enum ErrorTypes {
  error,
  warn,
  info,
  verbose,
  debug,
  silly
}

export type ElectronEventArgs<T> = T extends Channels.changeState
  ? AppState
  : T extends Channels.installationProcess
  ? string
  : T extends Channels.crossWindow
  ? CrossWindowState
  : T extends Channels.rendererError
  ? RendererError
  : never;
