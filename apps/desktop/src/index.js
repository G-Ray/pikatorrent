const { app, BrowserWindow } = require('electron')
const path = require('path')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  // and load the index.html of the app.
  if (process.env.NODE_ENV === 'production') {
    mainWindow.loadFile('../app/out/index.html')
  } else {
    mainWindow.loadURL('http://localhost:19000')
  }
  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

const createWebrtcRelay = () => {
  const wrtc = require('@ca9io/electron-webrtc-relay')()
  wrtc.init()

  // handle errors that may occur when trying to communicate with Electron
  wrtc.on('error', console.error)

  import('@pikatorrent/node').then((node) => {
    node.default({ wrtc })
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow()
  createWebrtcRelay()
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
