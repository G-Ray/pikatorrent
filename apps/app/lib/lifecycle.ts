import isElectron from 'is-electron'

export const initApp = async () => {}

export const quitApp = async () => {
  if (isElectron()) {
    // Electron
    window.electronAPI.quitApp()
  } else {
    // Browser
    window.close()
  }
}
