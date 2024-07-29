import {
  Alert,
  AppState,
  BackHandler,
  PermissionsAndroid,
  Platform,
} from 'react-native'
import { Event, EventType } from '@notifee/react-native'

import * as transmission from './transmission'
import {
  createPersistentNotification,
  destroyPersistentNotification,
  registerEvents,
} from './persistentNotification'
import i18n from '../i18n'
import {
  requestReadExternalStoragePermission,
  requestWriteExternalStoragePermission,
} from './permissionsAndroid'

const handleEvents = async ({ type, detail }: Event) => {
  // Start all
  if (
    type === EventType.ACTION_PRESS &&
    detail.pressAction?.id === 'startAll'
  ) {
    await transmission.request({
      method: 'torrent-start-now',
      arguments: {},
    })
  }

  // Pause all
  if (
    type === EventType.ACTION_PRESS &&
    detail.pressAction?.id === 'pauseAll'
  ) {
    await transmission.request({
      method: 'torrent-stop',
      arguments: {},
    })
  }

  // Exit
  if (type === EventType.ACTION_PRESS && detail.pressAction?.id === 'exit') {
    quitApp()
  }
}

let isInitialized = false

const createStoragePermissionDeniedAlert = () =>
  Alert.alert(
    i18n.t('alerts.storagePermissionDenied.title'),
    i18n.t('alerts.storagePermissionDenied.description'),
    [{ text: 'Quit', onPress: quitApp }],
  )

const init = async () => {
  isInitialized = true

  // Init transmission & persistent notification
  transmission.init()
  createPersistentNotification()

  // See https://developer.android.com/training/data-storage/use-cases#access-file-paths
  // Android <= 12
  if (Platform.OS === 'android' && Platform.Version <= 33) {
    const granted =
      Platform.Version <= 29
        ? await requestWriteExternalStoragePermission() // Android <= 10
        : await requestReadExternalStoragePermission() // Android >= 11

    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      createStoragePermissionDeniedAlert()
    }
  }
}

export const initApp = async () => {
  // Next time the app become active, re-init if quitApp has been called
  AppState.addEventListener('change', async (nextAppState) => {
    if (nextAppState === 'active' && !isInitialized) {
      init()
    }
  })

  // background events handler should be registered only once
  registerEvents(handleEvents)
  init()
}

export const quitApp = async () => {
  if (!isInitialized) {
    return
  }
  // NOTE: on android & iOS, apps can't and shouldn't be really closed,
  // so we just stop the transmission engine and persistent notification
  transmission.close()
  await destroyPersistentNotification()
  isInitialized = false
  BackHandler.exitApp()
}
