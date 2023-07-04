import isElectron from 'is-electron'
import { BackHandler, Platform } from 'react-native'

export const quitApp = () => {
  if (Platform.OS !== 'web') {
    // Native
    BackHandler.exitApp()
  } else if (isElectron()) {
    // Electron
    window.electronAPI.quitApp()
  } else {
    // Browser
    window.close()
  }
}
