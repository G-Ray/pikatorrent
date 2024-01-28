import { Alert, AppState, BackHandler, PermissionsAndroid } from 'react-native'
import { EventType } from '@notifee/react-native'

import * as transmission from './transmission'
import {
  createPersistentNotification,
  destroyPersistentNotification,
  registerEvents,
} from './persistentNotification'
import { requestStoragePermission } from './permissionsAndroid'
import i18n from '../i18n'

const handleEvents = async ({ type, detail }) => {
  // Start all
  if (type === EventType.ACTION_PRESS && detail.pressAction.id === 'startAll') {
    await transmission.request({
      method: 'torrent-start-now',
      arguments: {},
    })
  }

  // Pause all
  if (type === EventType.ACTION_PRESS && detail.pressAction.id === 'pauseAll') {
    await transmission.request({
      method: 'torrent-stop',
      arguments: {},
    })
  }

  // Exit
  if (type === EventType.ACTION_PRESS && detail.pressAction.id === 'exit') {
    console.log('handleEvents exit')
    quitApp()
  }
}

let isInitialized = false

const createPermissionDeniedAlert = () =>
  Alert.alert(
    i18n.t('alerts.storagePermissionDenied.title'),
    i18n.t('alerts.storagePermissionDenied.description'),
    [{ text: 'Quit', onPress: quitApp }]
  )

const init = async () => {
  isInitialized = true

  // Init transmission & persistent notification
  transmission.init()
  createPersistentNotification()

  const granted = await requestStoragePermission()
  if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
    createPermissionDeniedAlert()
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
