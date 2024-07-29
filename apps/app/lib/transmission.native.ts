import Transmission from 'react-native-transmission'
import * as FileSystem from 'expo-file-system'
import RNFS from 'react-native-fs'

const documentDirectory = FileSystem.documentDirectory?.substring(
  'file://'.length,
)

const ANDROID_TRANSMISSION_CONFIG_DIR = `${documentDirectory}transmission`
const ANDROID_TRANSMISSION_APP_NAME = 'transmission'
export const PRIVATE_DOWNLOAD_DIR = `${documentDirectory}downloads`
export const PUBLIC_DOWNLOAD_DIR =
  RNFS.ExternalStorageDirectoryPath + '/Download'
export const PUBLIC_DOCUMENTS_DIR =
  RNFS.ExternalStorageDirectoryPath + '/Documents'

let transmission: Transmission | null

export const init = async () => {
  transmission = new Transmission(
    ANDROID_TRANSMISSION_CONFIG_DIR,
    ANDROID_TRANSMISSION_APP_NAME,
  )

  const res = await transmission.request({
    method: 'session-get',
    arguments: {
      fields: ['download-dir'],
    },
  })

  const downloadDir = res.arguments['download-dir']

  if (
    downloadDir !== PRIVATE_DOWNLOAD_DIR &&
    !downloadDir.startsWith(PUBLIC_DOWNLOAD_DIR) &&
    !downloadDir.startsWith(PUBLIC_DOCUMENTS_DIR)
  ) {
    // Beware to correctly set the download dir when the app load,
    // as default location is not correct by default on android yet.
    await transmission.request({
      method: 'session-set',
      arguments: {
        'download-dir': PUBLIC_DOWNLOAD_DIR,
      },
    })
  }

  // Save settings as they have been updated
  transmission.saveSettings()
}

export const request = (...args) => {
  return transmission?.request(...args)
}

export const close = () => {
  transmission?.close()
  transmission = null
}

export { transmission }
