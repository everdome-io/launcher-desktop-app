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
import { autoUpdater, UpdateDownloadedEvent } from 'electron-updater';
import * as childProcess from 'child_process';
import { AppUpdateStatus, Channels, Processes } from '../interfaces';
import MenuBuilder from './menu';
import { eventsClient } from './events';
import { getDownloadLink, resolveHtmlPath } from './utils';
import { downloadFileWithProgress } from './utils/download';
import { installEverdome } from './utils/installation';
import { extractWithProgress } from './utils/extract';

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
  const result = await autoUpdater.checkForUpdates();
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
    createProfileWindow();
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (profileWindow === null) createProfileWindow();
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

ipcMain.on(Channels.downloadProcess, (event, localUserPath) => {
  const webLink = getDownloadLink();
  const eventsInstance = eventsClient(event);
  eventsInstance.reply({
    channel: Channels.changeState,
    message: {
      process: Processes.download,
      progress: 0,
      localUserPath: '',
      isFinished: false,
    },
  });
  downloadFileWithProgress(localUserPath, webLink, event, (progress) => {
    console.log(`Downloaded ${progress.toFixed(2)}%`);
    eventsInstance.reply({
      channel: Channels.changeState,
      message: {
        process: Processes.download,
        progress,
        localUserPath: '',
        isFinished: false,
      },
    });
  });
});

ipcMain.on(Channels.installationProcess, async function (event, userPath) {
  console.log('Installing game...');
  const eventsInstance = eventsClient(event);
  eventsInstance.reply({
    channel: Channels.changeState,
    message: {
      process: Processes.installation,
      progress: null,
      localUserPath: '',
      isFinished: false,
    },
  });
  installEverdome(userPath);
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
      process: Processes.openDialog,
      progress: null,
      localUserPath: localUserPath.filePaths[0],
      isFinished: false,
    },
  });
});

ipcMain.on(Channels.extractProcess, async (event, localFile) => {
  const eventsInstance = eventsClient(event);

  eventsInstance.reply({
    channel: Channels.changeState,
    message: {
      process: Processes.extract,
      progress: 0,
      localUserPath: '',
      isFinished: false,
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
          process: Processes.extract,
          progress,
          localUserPath: '',
          isFinished: false,
        },
      });
    }
  )
    .then(() => {
      console.log('Extraction completed');
      eventsInstance.reply({
        channel: Channels.changeState,
        message: {
          process: Processes.extract,
          progress: 100,
          localUserPath: '',
          isFinished: true,
        },
      });
    })
    .catch((error) => {
      console.error('Error during extraction:', error);
    });
});

autoUpdater.on('checking-for-update', () => {
  const message = autoUpdater.getFeedURL();

  if (mainWindow) {
    mainWindow.webContents.send(Channels.appUpdate, {
      status: AppUpdateStatus.checking,
      message,
    });
  }
});

autoUpdater.on('update-available', (info) => {
  if (mainWindow) {
    mainWindow.webContents.send(Channels.appUpdate, {
      status: AppUpdateStatus.available,
      message: JSON.stringify(info),
    });
  }
});

autoUpdater.on('update-not-available', (info) => {
  if (mainWindow) {
    mainWindow.webContents.send(Channels.appUpdate, {
      status: AppUpdateStatus.notAvailable,
      message: '',
    });
  }
});

autoUpdater.on('error', (err) => {
  const feedURL = autoUpdater.getFeedURL();
  if (mainWindow) {
    mainWindow.webContents.send(Channels.appUpdate, {
      status: AppUpdateStatus.error,
      message: JSON.stringify({ ...err, feedURL }),
    });
  }
});

autoUpdater.on('update-downloaded', (event: UpdateDownloadedEvent) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Application Update',
    message:
      process.platform === 'win32'
        ? event.releaseNotes!.toString()
        : event.releaseName!,
    detail:
      'A new version has been downloaded. Restart the application to apply the updates.',
  };
  dialog
    .showMessageBox(dialogOpts)
    .then((returnValue) => {
      if (returnValue.response === 0) autoUpdater.quitAndInstall();
    })
    .catch((err) => console.log(err));
});

ipcMain.on(Channels.crossWindow, async function (_event, state) {
  mainWindow?.webContents.send(Channels.crossWindow, state);
});

ipcMain.on(Channels.showProfileWindow, async function (_event, state) {
  if (state === true) profileWindow?.show();
});

app.on('before-quit', () => {
  // Check the platform to run the appropriate command
  const command =
    process.platform === 'win32'
      ? 'taskkill /IM Electron.exe /F'
      : 'pkill -f Electron';

  childProcess.exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(
        `Error executing command to kill Electron processes: ${error}`
      );
      return;
    }

    if (stderr) {
      console.error(`Error killing Electron processes: ${stderr}`);
      return;
    }

    console.log(`Killed Electron processes: ${stdout}`);
  });
});
