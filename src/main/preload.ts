// Disable no-unused-vars, broken for spread args
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import {
  Channels,
  ElectronHandlerArgs,
  ElectronEventArgs,
} from '../interfaces';

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
      func: (args: ElectronEventArgs<T>) => void
    ) {
      ipcRenderer.once(channel, (_event, args) => func(args));
    },
  },
  store: {
    get(key: string) {
      return ipcRenderer.sendSync('electron-store-get', key);
    },
    set(property: string, val: any) {
      ipcRenderer.send('electron-store-set', property, val);
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
