import Transmission from 'react-native-transmission'
import * as FileSystem from 'expo-file-system'

const documentDirectory = FileSystem.documentDirectory?.substring(
  'file://'.length
)

const ANDROID_TRANSMISSION_CONFIG_DIR = `${documentDirectory}transmission`
const ANDROID_TRANSMISSION_APP_NAME = 'transmission'
const ANDROID_TRANSMISSION_DOWNLOAD_DIR = '/sdcard/Download'

let transmission: Transmission

export const init = async () => {
  transmission = new Transmission(
    ANDROID_TRANSMISSION_CONFIG_DIR,
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

  // Save settings as they have been updated
  transmission.saveSettings()
}

export const request = (...args) => {
  return transmission.request(...args)
}

export const close = () => {
  return transmission.close()
}

export { transmission }
