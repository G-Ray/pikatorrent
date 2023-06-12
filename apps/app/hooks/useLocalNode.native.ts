import { useEffect } from 'react'
import * as transmission from 'react-native-transmission'

import { default as expoConfig } from '../app.config'

const appPackage = expoConfig().expo.android.package
const ANDROID_TRANSMISSION_CONFIG_FOLDER = `/data/data/${appPackage}/files/transmission`
const ANDROID_TRANSMISSION_APP_NAME = 'transmission'
const ANDROID_TRANSMISSION_DOWNLOAD_DIR = '/sdcard/Download'

export const useLocalNode = () => {
  useEffect(() => {
    console.log('transmission init ok')
    transmission.init(
      ANDROID_TRANSMISSION_CONFIG_FOLDER,
      ANDROID_TRANSMISSION_APP_NAME
    )
    // Beware to correctly set the download dir when your app load,
    // as default location is not correct by default on android yet.
    transmission.request(
      {
        method: 'session-set',
        arguments: {
          'download-dir': ANDROID_TRANSMISSION_DOWNLOAD_DIR,
        },
      },
      (err: string, res: string) => {}
    )

    return () => {
      transmission.close()
    }
  }, [])

  const sendRPCMessage = (json: any) => {
    if (!transmission) return

    return new Promise((resolve, reject) => {
      transmission.request(json, (err, res) => {
        return err ? reject(err) : resolve(JSON.parse(res)) // FIXME do no parse anymore
      })
    })
  }

  return {
    sendRPCMessage,
    isConnected: true,
  }
}
