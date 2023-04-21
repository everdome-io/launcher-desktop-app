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
import Store from 'electron-store';
import {
  AppUpdateStatus,
  Channels,
  Processes,
  initAppState,
} from '../interfaces';
import MenuBuilder from './menu';
import { eventsClient } from './events';
import { getDownloadLink, resolveHtmlPath, uuid } from './utils';
import { downloadFileWithProgress } from './utils/download';
import { installEverdome } from './utils/installation';
import { extractWithProgress } from './utils/extract';
import { getUserFromAPI } from './api';

const store = new Store();

const OKX_WEB_APP_URL = 'https://okx.prod.aws.everdome.io';
const EXTENSION_ID = 'mcohilncbfahbmgdjkbpemcciiolgcge';

let mainWindow: BrowserWindow | null = null;
let profileWindow: BrowserWindow | null = null;
let okxWindow: BrowserWindow | null = null;
let downloadWebLink: string | null = null;

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
    // TODO: Ten Await na pewno ma tu być ?
    getAssetPath(`okx/${EXTENSION_ID}/2.40.0_0`)
  );
};

const createWindow = async () => {
  // const s3Path = await getDownloadLink();
  const s3Path = 'Thirdym.v0.1.0-alpha';
  if (s3Path) {
    const pathSplit = s3Path.split('/');
    store.set(
      'folderName',
      pathSplit[pathSplit.length - 1].replace('.zip', '')
    );
  }
  // downloadWebLink = `https://metahero-prod-game-builds.s3.amazonaws.com/${s3Path}`;
  downloadWebLink = `https://github.com/Gann4/Thirdym/releases/download/0.1.0-alpha/Thirdym.v0.1.0-alpha.zip`;
  const storeWebLink = store.get('webLink') as string | undefined;
  const couldUseWebLink = !!downloadWebLink && storeWebLink !== downloadWebLink;
  store.set('couldUseWebLink', couldUseWebLink);
  if (couldUseWebLink) {
    store.set('processStage', Processes.openDialog);
  }

  if (isDebug) {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    skipTaskbar: true,
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', async () => {
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
  await autoUpdater.checkForUpdates();
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
    parent: mainWindow || undefined,
    autoHideMenuBar: true,
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  profileWindow.loadURL(resolveHtmlPath('profile.html'));
  profileWindow.setPosition(1100, 100);

  profileWindow.on('ready-to-show', () => {
    if (store.get('termsAccepted') && store.get('connectedOrSkipped')) {
      if (!profileWindow) {
        throw new Error('"profileWindow" is not defined');
      }
      if (process.env.START_MINIMIZED) {
        profileWindow.minimize();
      } else {
        profileWindow.show();
      }
    }
  });

  profileWindow.webContents.on('did-navigate', async (event, url) => {
    if (url.includes('/success')) {
      await profileWindow?.loadURL(resolveHtmlPath('profile.html'));
      okxWindow?.hide();
      store.set('connectedOrSkipped', true);
      const userId = store.get('userId') as string | undefined;
      if (userId) {
        await getUserFromAPI({
          userId,
          handleError: (err: any) =>
            mainWindow?.webContents.send(Channels.crossWindow, {
              isAuthenticated: true,
              errorMessage: err.toString(),
            }),
        });
        profileWindow?.webContents.send(Channels.crossWindow, {
          isAuthenticated: true,
        });
        mainWindow?.webContents.send(Channels.crossWindow, {
          isAuthenticated: true,
        });
      } else {
        mainWindow?.webContents.send(Channels.crossWindow, {
          isAuthenticated: true,
          errorMessage: 'No userId',
        });
      }
      profileWindow?.show();
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
    backgroundColor: '#000000',
    frame: false,
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  okxWindow.on('ready-to-show', () => {
    if (!okxWindow) {
      throw new Error('"okxWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      okxWindow.minimize();
    } else {
      okxWindow.show();
    }
  });

  okxWindow.on('closed', () => {
    okxWindow = null;
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

ipcMain.on(Channels.downloadProcess, (event) => {
  console.log('Downloading game...');

  const localFilePath = store.get('userPath') as string;
  const eventsInstance = eventsClient(event);
  eventsInstance.reply({
    channel: Channels.changeState,
    message: {
      ...initAppState,
      process: Processes.download,
      progress: 0,
      localUserPath: '',
      isFinished: false,
      processingSize: null,
    },
  });
  let prevProgress = 0;
  if (downloadWebLink) {
    downloadFileWithProgress(
      localFilePath,
      downloadWebLink,
      event,
      (progress) => {
        if (progress - prevProgress >= 0.1) {
          console.log(`Downloaded ${progress.toFixed(2)}%`);
          prevProgress = progress;
        }
        if (progress === 100) {
          store.set('webLink', downloadWebLink);
          store.set('processStage', Processes.extract);
        }
        eventsInstance.reply({
          channel: Channels.changeState,
          message: {
            ...initAppState,
            process: Processes.download,
            progress,
            localUserPath: '',
            isFinished: false,
            processingSize: 0,
          },
        });
      }
    );
  }
});

ipcMain.on(Channels.playProcess, async function (event) {
  console.log('Starting game...');
  const localFilePath = store.get('userPath') as string;

  const eventsInstance = eventsClient(event);
  eventsInstance.reply({
    channel: Channels.changeState,
    message: {
      ...initAppState,
      process: Processes.play,
      progress: null,
      localUserPath: '',
      isFinished: false,
      processingSize: 0,
    },
  });
  installEverdome(localFilePath, () => {
    const windowsFolderName = store.get('folderName') as string;
    return windowsFolderName;
  });
});

ipcMain.on(Channels.openDialog, async function (event) {
  const eventsInstance = eventsClient(event);

  const localUserPath = await dialog.showOpenDialog({
    properties: ['openDirectory'],
    message: 'Pick directory to store everdome file',
  });

  store.set('userPath', localUserPath.filePaths[0]);
  store.set('processStage', Processes.download);
  eventsInstance.reply({
    channel: Channels.changeState,
    message: {
      ...initAppState,
      process: Processes.openDialog,
      progress: null,
      localUserPath: localUserPath.filePaths[0],
      isFinished: false,
      processingSize: 0,
    },
  });
});

ipcMain.on(Channels.extractProcess, async (event) => {
  const localFilePath = store.get('userPath') as string;
  const eventsInstance = eventsClient(event);

  // TODO: Add Sentry log on started extraction

  eventsInstance.reply({
    channel: Channels.changeState,
    message: {
      ...initAppState,
      process: Processes.extract,
      processingSize: 0,
      progress: 0,
      localUserPath: '',
      isFinished: false,
    },
  });

  await extractWithProgress(
    path.join(localFilePath, 'game.zip'),
    localFilePath,
    (chunkSize: number, progress: number) => {
      console.log(`Extraction progress: ${progress.toFixed(2)}%`);
      eventsInstance.reply({
        channel: Channels.changeState,
        message: {
          ...initAppState,
          process: Processes.extract,
          progress,
          localUserPath: '',
          isFinished: false,
          processingSize: chunkSize,
        },
      });
    }
  )
    .then(() => {
      console.log('Extraction completed');
      eventsInstance.reply({
        channel: Channels.changeState,
        message: {
          ...initAppState,
          process: Processes.extract,
          progress: 100,
          localUserPath: '',
          isFinished: true,
          processingSize: 0,
        },
      });
      store.set('processStage', Processes.play);
    })
    .catch((error) => {
      console.error('Error during extraction:', error);
      eventsInstance.reply({
        channel: Channels.changeState,
        message: {
          process: Processes.error,
          progress: 100,
          processingSize: 0,
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

ipcMain.on(Channels.showProfileWindow, async function (_event, state) {
  if (state === true) profileWindow?.show();
});

ipcMain.on(
  Channels.openOKXExtension,
  (_event, state: { fromProfileWindow: boolean }) => {
    const userId = handleUserId();
    profileWindow!
      .loadURL(`${OKX_WEB_APP_URL}?userId=${userId}`)
      .then(() => {
        okxWindow!.focus();
      })
      .catch((err) => {
        console.log(err);
      });

    if (okxWindow === null) {
      createOKXWindow();
    }
    if (okxWindow) {
      okxWindow.loadURL(`chrome-extension://${EXTENSION_ID}/home.html`);
      if (state.fromProfileWindow) {
        okxWindow.setPosition(1095, 100);
      } else {
        okxWindow.center();
      }
      okxWindow.show();
    }
  }
);

ipcMain.on(Channels.acceptTerms, (_event) => {
  store.set('termsAccepted', true);
  mainWindow?.webContents.send(Channels.acceptTerms, {
    termsAccepted: true,
  });
  if (store.get('connectedOrSkipped')) {
    profileWindow?.show();
  }
});

ipcMain.on(Channels.connectedOrSkipped, (_event) => {
  store.set('connectedOrSkipped', true);

  if (store.get('termsAccepted')) {
    profileWindow?.show();
  }
});

ipcMain.on('electron-store-get', async (event, val) => {
  event.returnValue = store.get(val);
});
ipcMain.on('electron-store-set', async (event, key, val) => {
  store.set(key, val);
});

ipcMain.on('dev:clear-store', async (event) => {
  store.clear();
});

const handleUserId = () => {
  let userId: string;
  const storeUserId = store.get('userId') as undefined | string;
  if (storeUserId) {
    userId = storeUserId;
  } else {
    userId = uuid();
    store.set('userId', userId);
  }
  return userId;
};
