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
import {
  app,
  BrowserWindow,
  shell,
  ipcMain,
  dialog,
  session,
  BrowserView,
} from 'electron';
import { autoUpdater, UpdateDownloadedEvent } from 'electron-updater';
import Store from 'electron-store';
import request from 'request';
import * as Sentry from '@sentry/electron';
import { initializeSentry } from '../common/sentry';
import {
  AppUpdateStatus,
  Channels,
  Processes,
  ToggleWindowMode,
} from '../interfaces';
import MenuBuilder from './menu';
import { eventsClient } from './events';
import {
  OperatingSystem,
  calculateExtensionWindowPosition,
  calculateProfileWindowPosition,
  getDownloadLink,
  getLatestWindowsVersion,
  getOS,
  resolveHtmlPath,
  uuid,
} from './utils';
import { downloadFileWithProgress } from './utils/download';
import { extractWithProgress } from './utils/extract';
import { getUserFromAPI } from '../api';
import { playEverdome } from './utils/enter-game';

initializeSentry();

const store = new Store();

const OKX_WEB_APP_URL = 'https://okx.prod.aws.everdome.io';
const EXTENSION_ID = 'mcohilncbfahbmgdjkbpemcciiolgcge';
const PROFILE_WINDOW_SIZE = { width: 342, height: 728 };

const windows = new Set();

let mainWindow: BrowserWindow | null = null;
let faqWebView: BrowserView | null = null;
let profileWindow: BrowserWindow | null = null;
let okxWebView: BrowserView | null = null;
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
    .catch((err: any) => {
      Sentry.captureException(err);
      console.log(err);
    });
};
const getAssetPath = (...paths: string[]): string => {
  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');
  return path.join(RESOURCES_PATH, ...paths);
};

const loadExtensions = async () => {
  return session.defaultSession
    .loadExtension(getAssetPath(`okx/${EXTENSION_ID}/2.40.0_0`))
    .catch((error) => {
      Sentry.captureException(error);
    });
};

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

const setStore = (statusCode: number, s3Path: string): Promise<void> => {
  return new Promise((resolve) => {
    const gameFileExist = statusCode.toString()[0] === '2';
    if (gameFileExist) {
      downloadWebLink = `https://metahero-prod-game-builds.s3.amazonaws.com/${s3Path}`;
      // downloadWebLink = `https://github.com/Gann4/Thirdym/releases/download/0.1.0-alpha/Thirdym.v0.1.0-alpha.zip`;
      const storeWebLink = store.get('webLink') as string | undefined;
      const couldUseWebLink = storeWebLink !== downloadWebLink;
      store.set('couldUseWebLink', couldUseWebLink);
      if (couldUseWebLink) {
        store.set('processStage', Processes.openDialog);
      }
      resolve();
    } else {
      Sentry.captureException(`${downloadWebLink} could not be found`);
      store.set('couldUseWebLink', false);
    }
  });
};

const setStoreOnError = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    store.set('couldUseWebLink', false);
    resolve();
  });
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    show: true,
    width: 1280,
    height: 800,
    icon: getAssetPath('icon.png'),
    autoHideMenuBar: true,
    webPreferences: {
      webSecurity: !isDebug,
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });
  windows.add(mainWindow);

  okxWebView = new BrowserView();
  mainWindow!.setBrowserView(okxWebView);

  mainWindow.loadURL(resolveHtmlPath('index.html'));
  mainWindow.center();
  mainWindow.on('ready-to-show', async () => {
    if (!mainWindow) {
      const message = '"mainWindow" is not defined';
      Sentry.captureException(message);
      throw new Error(message);
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('move', function () {
    if (mainWindow && profileWindow) {
      const [x, y] = calculateProfileWindowPosition(mainWindow.getPosition());
      profileWindow.setBounds({
        x,
        y,
        width: PROFILE_WINDOW_SIZE.width,
        height: PROFILE_WINDOW_SIZE.height,
      });
    }
  });

  okxWebView.webContents.on('did-navigate', async (event, url) => {
    if (url.includes('/success')) {
      await profileWindow
        ?.loadURL(resolveHtmlPath('profile.html'))
        .catch((err) => console.log(err));
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

  mainWindow.on('closed', () => {
    windows.delete(mainWindow);
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
    width: PROFILE_WINDOW_SIZE.width,
    height: PROFILE_WINDOW_SIZE.height,
    icon: getAssetPath('icon.png'),
    backgroundColor: '#000000',
    parent: mainWindow || undefined,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    skipTaskbar: true,
    webPreferences: {
      webSecurity: !isDebug,
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });
  windows.add(profileWindow);

  profileWindow.loadURL(resolveHtmlPath('profile.html'));
  const [x, y] = calculateProfileWindowPosition(mainWindow?.getPosition());
  profileWindow.setPosition(x, y);

  profileWindow.on('ready-to-show', () => {
    if (store.get('termsAccepted') && store.get('connectedOrSkipped')) {
      if (!profileWindow) {
        const message = '"profileWindow" is not defined';
        Sentry.captureException(message);
        throw new Error(message);
      }
      if (process.env.START_MINIMIZED) {
        profileWindow.minimize();
      } else {
        profileWindow.show();
      }
    }
  });

  profileWindow.on('closed', () => {
    windows.delete(profileWindow);
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
    parent: mainWindow || undefined,
    autoHideMenuBar: true,
    skipTaskbar: true,
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });
  windows.add(okxWindow);

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
    windows.delete(okxWindow);
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

const createAllWindows = () => {
  createWindow();
  createProfileWindow();
  createOKXWindow();
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (windows.size === 0) {
      if (mainWindow === null) createWindow();
      if (profileWindow === null) createProfileWindow();
      if (okxWindow === null) createOKXWindow();
    }
  });
};

const setupApp = async () => {
  Sentry.captureException('test log');
  handleUserId();
  loadExtensions();
  const os = getOS();
  if (os === OperatingSystem.Windows) {
    const latestWindowsVersion = await getLatestWindowsVersion();
    store.set('latestWindowsVersion', latestWindowsVersion);
    store.set('appCurrentVersion', app.getVersion());
  }
  const s3Path = await getDownloadLink();
  // const s3Path = 'Thirdym.v0.1.0-alpha';
  if (s3Path) {
    const pathSplit = s3Path.split('/');
    store.set(
      'folderName',
      pathSplit[pathSplit.length - 1].replace('.zip', '')
    );
    request
      .head(`https://metahero-prod-game-builds.s3.amazonaws.com/${s3Path}`)
      .on('error', (error) => {
        Sentry.captureException(error);

        console.log('error', error);
        // eslint-disable-next-line promise/no-promise-in-callback
        setStoreOnError()
          .then(() => {
            createAllWindows();
          })
          .catch((err) => {
            Sentry.captureException(err);
            console.log('err', err);
          });
      })
      .on('response', (res) => {
        setStore(res.statusCode, s3Path)
          .then(() => {
            createAllWindows();
          })
          .catch((err) => {
            Sentry.captureException(err);
            console.log('err', err);
          });
      });
  }
};

app
  .whenReady()
  .then(() => {
    setupApp();
  })
  .catch(console.log);

ipcMain.on(Channels.downloadProcess, (event) => {
  console.log('Downloading game...');

  const localFilePath = store.get('userPath') as string;
  const eventsInstance = eventsClient(event);
  eventsInstance.reply({
    channel: Channels.changeState,
    message: {
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
  const publicKey = store.get('publicKey') as string;
  const avatarId = store.get('avatarId') as string;
  const nickName = store.get('nickName') as string;

  const eventsInstance = eventsClient(event);
  eventsInstance.reply({
    channel: Channels.changeState,
    message: {
      process: Processes.play,
      progress: null,
      localUserPath: '',
      isFinished: false,
      processingSize: 0,
    },
  });

  playEverdome(localFilePath, () => {
    return {
      avatarid: avatarId,
      uid: publicKey,
      displayname: nickName,
    };
  });
});

ipcMain.on(Channels.openDialog, async function (event) {
  const eventsInstance = eventsClient(event);

  const localUserPath = await dialog.showOpenDialog({
    properties: ['openDirectory'],
    message: 'Select the destination folder',
    buttonLabel: 'Save',
  });

  store.set('userPath', localUserPath.filePaths[0]);
  store.set('processStage', Processes.download);
  eventsInstance.reply({
    channel: Channels.changeState,
    message: {
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

  eventsInstance.reply({
    channel: Channels.changeState,
    message: {
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
      Sentry.captureException(error);
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

autoUpdater.on('error', (error) => {
  const feedURL = autoUpdater.getFeedURL();
  if (mainWindow) {
    mainWindow.webContents.send(Channels.appUpdate, {
      status: AppUpdateStatus.error,
      message: JSON.stringify({ ...error, feedURL }),
    });
    Sentry.captureException(error);
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
    .catch((err) => {
      Sentry.captureException(err);
      console.log(err);
    });
});

ipcMain.on(Channels.showProfileWindow, async function (_event, state) {
  if (state === true) profileWindow?.show();
});

ipcMain.on(
  Channels.openOKXExtension,
  (_event, state: { fromProfileWindow: boolean }) => {
    const userId = store.get('userId');
    okxWebView!.setBounds({ x: 0, y: 0, width: 1, height: 1 });
    okxWebView!.webContents
      .loadURL(`${OKX_WEB_APP_URL}?userId=${userId}`)
      .then(() => {
        okxWindow!.focus();
        okxWindow!.setAlwaysOnTop(true, 'floating');
      })
      .catch((err) => {
        Sentry.captureException(err);
        console.log(err);
      });

    if (okxWindow === null) {
      createOKXWindow();
    }
    if (okxWindow) {
      okxWindow.loadURL(`chrome-extension://${EXTENSION_ID}/home.html`);
      if (state.fromProfileWindow && profileWindow) {
        const [x, y] = calculateExtensionWindowPosition(
          profileWindow.getPosition()
        );
        okxWindow.setPosition(x - 5, y - 10);
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
  if (okxWindow && okxWindow.isVisible()) {
    okxWindow.hide();
  }
  store.set('connectedOrSkipped', true);

  if (store.get('termsAccepted')) {
    profileWindow?.show();
  }
});

ipcMain.on(
  Channels.toggleProfileWindow,
  (_event, state: { mode: ToggleWindowMode }) => {
    if (state.mode === ToggleWindowMode.open) {
      profileWindow?.setSize(1280, 800);
      profileWindow?.center();
    } else {
      profileWindow?.setSize(
        PROFILE_WINDOW_SIZE.width,
        PROFILE_WINDOW_SIZE.height
      );
      const [x, y] = calculateProfileWindowPosition(mainWindow?.getPosition());
      profileWindow?.setPosition(x, y);
    }
    profileWindow?.close;
  }
);

ipcMain.on(Channels.hideProfileWindow, async function (_event) {
  profileWindow?.hide();
});

ipcMain.on(Channels.backToMainView, (_event) => {
  mainWindow?.show();
  mainWindow?.center();
  const [x, y] = calculateProfileWindowPosition(mainWindow?.getPosition());
  profileWindow?.setPosition(x, y);
  profileWindow?.show();
  mainWindow?.focus();
});

ipcMain.on(Channels.handleUpdateForWindows, () => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Download', 'Later'],
    title: 'Application Update',
    message: 'Please download and install new version of the Launcher',
  };
  dialog
    .showMessageBox(dialogOpts)
    .then((returnValue) => {
      if (returnValue.response === 0) {
        mainWindow?.webContents.send('downloadLatestWindows');
      }
    })
    .catch((err) => console.log(err));
});

ipcMain.on('closeApp', () => {
  app.quit();
});

ipcMain.on(Channels.openFAQWindow, () => {
  profileWindow?.hide();
  faqWebView = new BrowserView();
  mainWindow!.setBrowserView(faqWebView);
  faqWebView.webContents.loadURL(`${OKX_WEB_APP_URL}/faq.html`);
  faqWebView.setBounds({ x: 0, y: 0, width: 1280, height: 700 });
});

ipcMain.on(Channels.closeFAQWindow, () => {
  mainWindow!.setBrowserView(null);
  profileWindow?.show();
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
