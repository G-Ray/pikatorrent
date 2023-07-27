import Transmission from 'react-native-transmission'

import { default as expoConfig } from '../app.config'

const appPackage = expoConfig().expo.android.package

const ANDROID_TRANSMISSION_CONFIG_FOLDER = `/data/data/${appPackage}/files/transmission`
const ANDROID_TRANSMISSION_APP_NAME = 'transmission'
const ANDROID_TRANSMISSION_DOWNLOAD_DIR = '/sdcard/Download'

let transmission: Transmission

export const init = async () => {
  transmission = new Transmission(
    ANDROID_TRANSMISSION_CONFIG_FOLDER,
    ANDROID_TRANSMISSION_APP_NAME
  )

  // Beware to correctly set the download dir when the app load,
  // as default location is not correct by default on android yet.
  await transmission.request({
    method: 'session-set',
    arguments: {
      'download-dir': ANDROID_TRANSMISSION_DOWNLOAD_DIR,
    },
  })
}

export const request = (...args) => {
  return transmission.request(...args)
}

export const close = () => {
  return transmission.close()
}

export { transmission }
