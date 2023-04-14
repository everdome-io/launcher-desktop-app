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
import { app, BrowserWindow, shell, ipcMain, dialog, session } from 'electron';
import { autoUpdater, UpdateDownloadedEvent } from 'electron-updater';
import { AppUpdateStatus, Channels, Processes } from '../interfaces';
import MenuBuilder from './menu';
import { eventsClient } from './events';
import { getDownloadLink, resolveHtmlPath, setupLogging } from './utils';
import { downloadFileWithProgress } from './utils/download';
import { installEverdome } from './utils/installation';
import { extractWithProgress } from './utils/extract';

const OKX_WEB_APP_URL = 'https://okx.prod.aws.everdome.io/';
const EXTENSION_ID = 'mcohilncbfahbmgdjkbpemcciiolgcge';

let mainWindow: BrowserWindow | null = null;
let profileWindow: BrowserWindow | null = null;
let okxWindow: BrowserWindow | null = null;

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

const getAssetPath = (...paths: string[]): string => {
  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');
  return path.join(RESOURCES_PATH, ...paths);
};

const loadExtensions = async () => {
  return await session.defaultSession.loadExtension(
    getAssetPath(`okx/${EXTENSION_ID}/2.40.0_0`)
  );
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

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

  profileWindow = new BrowserWindow({
    show: false,
    width: 342,
    height: 688,
    icon: getAssetPath('icon.png'),
    backgroundColor: '#000000',
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  profileWindow.loadURL(resolveHtmlPath('profile.html'));

  profileWindow.setPosition(1300, 200);
  profileWindow.setAlwaysOnTop(true, 'floating', 1);

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

  profileWindow.webContents.on('did-navigate', (event, url) => {
    if (url.includes('/success')) {
      console.log(`did-navigate`);
      profileWindow?.loadURL(resolveHtmlPath('profile.html'));
      okxWindow?.hide();
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

const createOKXWindow = async () => {
  okxWindow = new BrowserWindow({
    show: false,
    width: 360,
    height: 600,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  okxWindow.setPosition(1295, 200);
  okxWindow.setAlwaysOnTop(true, 'floating', 2);
};
/**
 * Add event listeners...
 */


setupLogging(app.getPath("exe"), "log.txt");

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
    loadExtensions();
    createProfileWindow();
    createWindow();
    createOKXWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (profileWindow === null) createProfileWindow();
      if (okxWindow === null) createOKXWindow();
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
  let prevProgress = 0;
  downloadFileWithProgress(localUserPath, webLink, event, (progress) => {
    if(progress-prevProgress>=0.1){
      console.log(`Downloaded ${progress.toFixed(2)}%`);
      prevProgress = progress;
    }
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

ipcMain.on(Channels.rendererError,async (_event, payload) => {
  (console as any)[payload.lvl](`From renderer: ${payload.message}`);
})

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

  console.log("Extracting started", localFile.filepath);

  eventsInstance.reply({
    channel: Channels.changeState,
    message: {
      process: Processes.extract,
      progress: 0,
      localUserPath: '',
      isFinished: false,
    },
  });

  console.log("State updated");

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
      eventsInstance.reply({
        channel: Channels.changeState,
        message: {
          process: Processes.error,
          progress: 100,
          localUserPath: '',
          isFinished: true,
        },
      });
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

ipcMain.on(Channels.openOKXExtension, (event) => {
  profileWindow!.loadURL(OKX_WEB_APP_URL);

  if (okxWindow) {
    okxWindow.loadURL(`chrome-extension://${EXTENSION_ID}/home.html`);
    okxWindow.show();
  }
});
