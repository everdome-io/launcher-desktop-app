// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { Channels, ElectronHandlerArgs, ElectronOnceArgs } from '../interfaces';

const electronHandler = {
  ipcRenderer: {
    sendMessage<T extends Channels>(channel: T, args: ElectronHandlerArgs<T>) {
      ipcRenderer.send(channel, args);
    },
    on<T extends Channels>(
      channel: T,
      func: (args: ElectronHandlerArgs<T>) => void
    ) {
      const subscription = (
        _event: IpcRendererEvent,
        args: ElectronHandlerArgs<T>
      ) => func(args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once<T extends Channels>(
      channel: T,
      func: (args: ElectronOnceArgs<T>) => void
    ) {
      ipcRenderer.once(channel, (_event, args) => func(args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
