process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const {
  app,
  BrowserWindow,
  ipcMain,
  shell,
  nativeTheme,
  dialog,
} = require('electron')
const path = require('path')
const serve = require('electron-serve')
require('update-electron-app')()

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit()
}

let wrtc
let loadURL =
  process.env.NODE_ENV === 'production' ? serve({ directory: 'dist' }) : null

let mainWindow
let nodeRef

const createWindow = async () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: process.env.NODE_ENV === 'production' ? 1280 : 1600,
    height: process.env.NODE_ENV === 'production' ? 720 : 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    ...(process.platform === 'linux' && { icon: 'assets/icon.png' }),
  })

  mainWindow.on('closed', handleClose)

  mainWindow.webContents.setWindowOpenHandler((details) => {
    require('electron').shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // and load the index.html of the app.
  if (process.env.NODE_ENV === 'production') {
    mainWindow.removeMenu()
    await loadURL(mainWindow)
    await mainWindow.loadURL('app://-')
  } else {
    mainWindow.loadURL('http://localhost:19000')
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

const startPikatorrentNode = () => {
  wrtc = require('@ca9io/electron-webrtc-relay')()
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

const handleOpenFolder = (_, path) => {
  shell.showItemInFolder(path)
}

const handleSelectFolder = (_, defaultPath) => {
  return dialog.showOpenDialogSync(mainWindow, {
    defaultPath,
    properties: ['openDirectory'],
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow()
  startPikatorrentNode()
  ipcMain.handle('node:getNodeSettings', handleGetNodeSettings)
  ipcMain.handle('node:updateSettings', handleUpdateNodeSettings)
  ipcMain.handle('transmission:request', handleTransmissionRequest)
  ipcMain.handle('node:openFolder', handleOpenFolder)
  ipcMain.handle('selectFolder', handleSelectFolder)
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
const handleClose = () => {
  if (process.platform !== 'darwin') {
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
