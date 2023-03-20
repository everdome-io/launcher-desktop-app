export enum Channels {
  'ipc-example' = 'ipc-example',
  'download-process' = 'download-process',
}
export type WebFile = {
  link: string;
  filepath: string;
};

export type ElectronHandlerArgs = WebFile | string;
