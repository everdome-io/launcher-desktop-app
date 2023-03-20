// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { Channels, ElectronHandlerArgs } from '../interfaces';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, args?: ElectronHandlerArgs) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (args?: ElectronHandlerArgs) => void) {
      const subscription = (
        _event: IpcRendererEvent,
        args: ElectronHandlerArgs
      ) => func(args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (args?: ElectronHandlerArgs) => void) {
      ipcRenderer.once(channel, (_event, args) => func(args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
