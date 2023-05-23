/* eslint-disable no-shadow */
export enum Channels {
  openDialog = 'open-dialog-process',
  downloadProcess = 'download-process',
  extractProcess = 'extract-process',
  playProcess = 'play-process',
  showProfileWindow = 'show-profile-window',
  hideProfileWindow = 'hide-profile-window',
  acceptTerms = 'accept-terms',
  connectedOrSkipped = 'connected-or-skipped',
  backToMainView = 'back-to-main-view',
  openFAQWindow = 'open-faq-window',
  closeFAQWindow = 'close-faq-window',

  crossWindow = 'cross-window',
  changeState = 'change-state',

  appUpdate = 'app-update',

  openOKXExtension = 'open-okx',
  closeOKXExtension = 'close-okx',
  showOkxWindow = 'show-okx-window',

  toggleProfileWindow = 'toggle-profile-window',

  handleUpdateForWindows = 'handle-update-for-windows',
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
  play = 'play',
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
  : T extends Channels.playProcess
  ? string
  : never;

export type AppState = {
  progress: null | number;
  isFinished: boolean;
  process: Processes;
  localUserPath: string;
  processingSize: null | number;
};

export type CrossWindowState = {
  isAuthenticated: boolean;
  errorMessage: string;
  webViewLoading: boolean;
};

export type AppUpdate = {
  status: AppUpdateStatus;
  message: string | null;
};

export type ElectronEventArgs<T> = T extends Channels.changeState
  ? AppState
  : T extends Channels.playProcess
  ? string
  : T extends Channels.crossWindow
  ? CrossWindowState
  : never;

export interface UserAttributes {
  userId: string;
  publicKey: string;
  avatarId: string | null;
  nickName: string | null;
  isFakePublicKey: boolean;
}

export enum ToggleWindowMode {
  open = 'open',
  close = 'close',
}

export enum SettingType {
  NFT_Publish = 'NFT_Publish',
}
