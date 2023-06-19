import * as Bowser from 'bowser'
import isElectron from 'is-electron'
import { Platform } from 'react-native'

let appName = 'unknown'

export const getDeviceName = () => {
  if (Platform.OS === 'web') {
    const bowser = Bowser.parse(window.navigator.userAgent)
    appName = `${isElectron() ? 'PikaTorrent' : bowser.browser.name} ${
      bowser.platform.type
    } on ${bowser.os.name}`
  } else {
    appName = `PikaTorrent on ${Platform.OS}`
  }

  return appName
}
