import { AppState, BackHandler } from 'react-native'
import { EventType } from '@notifee/react-native'

import * as transmission from './transmission'
import {
  createPersistentNotification,
  destroyPersistentNotification,
  registerEvents,
} from './persistentNotification'

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

const init = () => {
  // Init transmission & persistent notification
  transmission.init()
  createPersistentNotification()
  isInitialized = true
}

export const initApp = async () => {
  // Next time the app become active, re-init if quitApp has been called
  AppState.addEventListener('change', (nextAppState) => {
    if (nextAppState === 'active' && !isInitialized) {
      init()
    }
  })

  // background events handler should be registered only once
  registerEvents(handleEvents)
  init()

  isInitialized = true
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
