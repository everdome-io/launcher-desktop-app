/* eslint-disable func-names */
/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain, dialog } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import { Channels } from '../interfaces';
import MenuBuilder from './menu';
import {
  downloadFile,
  resolveHtmlPath,
  chmodPlusX,
  installDMG,
  extractWithProgress,
} from './util';
import { eventsClient } from './events';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;
let profileWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

const createProfileWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  profileWindow = new BrowserWindow({
    show: false,
    width: 342,
    height: 688,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  profileWindow.loadURL(resolveHtmlPath('profile.html'));

  profileWindow.setAlwaysOnTop(true);
  profileWindow.setPosition(1300, 200);

  profileWindow.on('ready-to-show', () => {
    if (!profileWindow) {
      throw new Error('"profileWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      profileWindow.minimize();
    } else {
      profileWindow.show();
    }
  });

  profileWindow.on('closed', () => {
    profileWindow = null;
  });

  const profileBuilder = new MenuBuilder(profileWindow);
  profileBuilder.buildMenu();

  // Open urls in the user's browser
  profileWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    createProfileWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
      if (profileWindow === null) createProfileWindow();
    });
  })
  .catch(console.log);

ipcMain.on(Channels.downloadProcess, (event, webFile) => {
  downloadFile(event, webFile);
});

ipcMain.on(Channels.openGame, async function (event, userPath) {
  console.log('opening game...');
  chmodPlusX(userPath);
  installDMG(userPath);
});

ipcMain.on(Channels.openDialog, async function (event) {
  const eventsInstance = eventsClient(event);

  const localUserPath = await dialog.showOpenDialog({
    properties: ['openDirectory'],
    message: 'Pick directory to store everdome file',
  });
  eventsInstance.reply({
    channel: Channels.changeState,
    message: {
      localUserPath: localUserPath.filePaths[0],
      isDownloaded: false,
      duringDownload: false,
      downloadProgress: 0,
      isExtracted: false,
      extractProgress: 0,
      duringExtract: false,
    },
  });
});

ipcMain.on(Channels.extractGame, async (event, localFile) => {
  const eventsInstance = eventsClient(event);

  eventsInstance.reply({
    channel: Channels.changeState,
    message: {
      localUserPath: '',
      isDownloaded: true,
      duringDownload: false,
      downloadProgress: 100,
      isExtracted: false,
      extractProgress: 0,
      duringExtract: true,
    },
  });

  await extractWithProgress(
    path.join(localFile.filepath, 'game.zip'),
    localFile.filepath,
    (progress) => {
      console.log(`Extraction progress: ${progress.toFixed(2)}%`);
      eventsInstance.reply({
        channel: Channels.changeState,
        message: {
          localUserPath: '',
          isDownloaded: false,
          duringDownload: false,
          downloadProgress: 100,
          isExtracted: false,
          extractProgress: progress,
          duringExtract: true,
        },
      });
    }
  )
    .then(() => {
      console.log('Extraction completed');
      eventsInstance.reply({
        channel: Channels.changeState,
        message: {
          localUserPath: '',
          isDownloaded: false,
          duringDownload: false,
          downloadProgress: 100,
          isExtracted: true,
          extractProgress: 100,
          duringExtract: false,
        },
      });
    })
    .catch((error) => {
      console.error('Error during extraction:', error);
    });
});
