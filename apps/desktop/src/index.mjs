process.env.NODE_ENV = process.env.NODE_ENV || 'production'

import {
  app,
  BrowserWindow,
  ipcMain,
  shell,
  nativeTheme,
  dialog,
} from 'electron'
import fs from 'node:fs'
import path from 'node:path'
import serve from 'electron-serve'
import minimist from 'minimist'
import { fileURLToPath } from 'url'

import { handleSquirrelEvent, registerAppAssociations } from './windows.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
handleSquirrelEvent(app)

if (process.defaultApp) {
  if (process.argv.length >= 2) {
    // Can not register magnet yet: https://github.com/electron/electron/issues/14108
    app.setAsDefaultProtocolClient('pikatorrent', process.execPath, [
      path.resolve(process.argv[1]),
    ])
  }
} else {
  app.setAsDefaultProtocolClient('pikatorrent')
}

if (process.platform === 'win32') {
  registerAppAssociations()
}

const parsedArgs = minimist(
  process.argv.slice(process.env.NODE_ENV === 'production' ? 1 : 2)
)

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  // Linux & Windows
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }

    // the commandLine is array of strings in which last element is deep link url
    const link = commandLine.pop()
    redirect(buildDeepLink(link))
  })

  // Create mainWindow, load the rest of the app, etc...
  app.whenReady().then(() => {
    handleAppReady()
  })

  // TODO: MacOS only
  // app.on('open-url', (event, url) => {
  // })
}

const buildInitialDeepLink = () => {
  const initialLink = parsedArgs._[0]

  return buildDeepLink(initialLink)
}

const buildDeepLink = (link = '') => {
  // Hash in url is not supported by expo-router yet
  if (link === '') {
    return ''
  }

  const isFilePath = fs.existsSync(link)

  if (isFilePath) {
    try {
      const normalizedPath = path.normalize(link)
      // Is it a path to .torrent file ?
      const parsedPath = path.parse(normalizedPath)
      if (parsedPath.ext === '.torrent') {
        return '/add?file=' + normalizedPath
      }
    } catch (e) {
      console.error(e)
    }
  } else {
    try {
      const url = new URL(link)
      // Magnet:
      if (url.protocol === 'magnet:') {
        return '/add?magnet=' + encodeURIComponent(link)
      }

      // Pikatorrent:
      if (url.protocol === 'pikatorrent:') {
        // Open deep link
        try {
          const afterHash = url.hash.split('#')[1]
          if (/^magnet:/.test(afterHash)) {
            return '/add?magnet=' + encodeURIComponent(afterHash)
          }

          return url.pathname
        } catch (e) {
          console.error(e)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  return ''
}

const handleAppReady = () => {
  createWindow()
  startPikatorrentNode()
  ipcMain.handle('node:getNodeSettings', handleGetNodeSettings)
  ipcMain.handle('node:updateSettings', handleUpdateNodeSettings)
  ipcMain.handle('transmission:request', handleTransmissionRequest)
  ipcMain.handle('node:openFolder', handleOpenFolder)
  ipcMain.handle('selectFolder', handleSelectFolder)
  ipcMain.handle('openFile', handleOpenFile)
  ipcMain.handle('quitApp', handleClose)
  ipcMain.handle('readFileAsBase64', readFileAsBase64)
  import('./check-updates.mjs').then((m) => m.default(parsedArgs))
}

let wrtc
let loadURL =
  process.env.NODE_ENV === 'production' ? serve({ directory: 'dist' }) : null

let mainWindow
let nodeRef

const createWindow = async () => {
  const preloadPath = path.join(__dirname, 'preload.js')
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: process.env.NODE_ENV === 'production' ? 1280 : 1800,
    height: process.env.NODE_ENV === 'production' ? 720 : 900,
    webPreferences: {
      preload: preloadPath,
    },
    ...(process.platform === 'linux' && { icon: 'assets/icon.png' }),
  })

  mainWindow.on('closed', handleClose)

  mainWindow.webContents.setWindowOpenHandler((details) => {
    import('electron').then((m) => m.shell.openExternal(details.url))
    return { action: 'deny' }
  })

  // and load the index.html of the app.
  if (process.env.NODE_ENV === 'production') {
    mainWindow.removeMenu()
    await loadURL(mainWindow)
    await mainWindow.loadURL('app://-' + buildInitialDeepLink())
  } else {
    mainWindow.loadURL('http://localhost:8081' + buildInitialDeepLink())
    // Open the DevTools.
    mainWindow.webContents.openDevTools()
  }
}

const handleAcceptOrRejectPeer = (id, name) => {
  return new Promise((resolve) => {
    ipcMain.once('onAcceptOrRejectPeerResponse', (_event, response) => {
      resolve(response)
    })

    mainWindow.webContents.send('onAcceptOrRejectPeer', { id, name })
  })
}

const startPikatorrentNode = async () => {
  wrtc = (await import('@ca9io/electron-webrtc-relay')).default()
  wrtc.init()

  // handle errors that may occur when trying to communicate with Electron
  wrtc.on('error', console.error)

  import('@pikatorrent/node').then((node) => {
    nodeRef = node
    node.startNode({
      wrtc,
      connectWebsocket: true,
      onAcceptOrRejectPeer: handleAcceptOrRejectPeer,
      onUpdateSettings: sendSettingToRenderer,
    })
  })
}

// handle IPC transmisison requests
const handleTransmissionRequest = (_, json) => {
  return new Promise((resolve) => {
    nodeRef.transmission.request(json, (err, res) => {
      resolve(err || res)
    })
  })
}

const handleGetNodeSettings = () => {
  return nodeRef.settings
}

const handleUpdateNodeSettings = (_, update) => {
  nodeRef.updateSettings(update)
}

const sendSettingToRenderer = () => {
  mainWindow.webContents.send('onNodeSettingsUpdate', nodeRef.settings)
}

const handleOpenFolder = (_, ...paths) => {
  const pathToFolder = path.join(...paths)
  shell.showItemInFolder(pathToFolder)
}

const redirect = (route) => {
  mainWindow.webContents.send('onRedirect', route)
}

const readFileAsBase64 = async (_, path) => {
  try {
    const buffer = fs.readFileSync(path, { encoding: 'base64' })
    return buffer
  } catch (e) {
    console.error(e)
  }
}

const handleSelectFolder = (_, defaultPath) => {
  return dialog.showOpenDialogSync(mainWindow, {
    defaultPath,
    properties: ['openDirectory'],
  })
}

const handleOpenFile = async (_, ...paths) => {
  const pathToFile = path.join(...paths)
  const res = await shell.openPath(pathToFile)
  return res
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
const handleClose = () => {
  if (process.platform !== 'darwin') {
    nodeRef.transmission.close()
    wrtc.close()
    app.quit()
  }
}

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.handle('theme:set', (_, theme) => {
  nativeTheme.themeSource = theme
  return nativeTheme.shouldUseDarkColors
})
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
