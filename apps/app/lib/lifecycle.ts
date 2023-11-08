import isElectron from 'is-electron'
import { BackHandler, Platform } from 'react-native'
import * as transmission from '../lib/transmission'

export const quitApp = () => {
  if (Platform.OS !== 'web') {
    // Native
    transmission.close()
    BackHandler.exitApp()
  } else if (isElectron()) {
    // Electron
    window.electronAPI.quitApp()
  } else {
    // Browser
    window.close()
  }
}
