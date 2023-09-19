import prettyBytes from 'pretty-bytes'
import notifee, {
  AndroidImportance,
  EventType,
  AuthorizationStatus,
} from '@notifee/react-native'

import * as transmission from './transmission.native'
import { quitApp } from './lifecycle'

const CHANNEL_ID = 'foregroundServiceId'

async function checkNotificationPermission() {
  const settings = await notifee.getNotificationSettings()
  if (settings.authorizationStatus !== AuthorizationStatus.AUTHORIZED) {
    await notifee.requestPermission()
  }
}

// Create or update notification, querying data from transmission
const updateNotification = async (notification?: any) => {
  const resSession = await transmission.request({ method: 'session-stats' })
  const resTorrents = await transmission.request({
    method: 'torrent-get',
    arguments: {
      fields: ['status', 'percentDone'],
    },
  })
  const { torrents } = resTorrents.arguments
  const downloadingTorrents = torrents.filter((t) => t.status === 4)
  const sessionStats = resSession.arguments
  const isPaused = sessionStats.pausedTorrentCount === sessionStats.torrentCount

  notifee.displayNotification({
    ...(notification && { id: notification.id }),
    title: isPaused
      ? 'paused'
      : `${sessionStats.activeTorrentCount} active torrent${
          sessionStats.activeTorrentCount > 0 ? 's' : ''
        } • ${downloadingTorrents.length} downloading`,
    body: isPaused
      ? undefined
      : `↓ ${prettyBytes(sessionStats.downloadSpeed || 0)}/s ↑ ${prettyBytes(
          sessionStats.uploadSpeed || 0
        )}/s`,
    android: {
      channelId: CHANNEL_ID,
      asForegroundService: true,
      ongoing: true,
      smallIcon: 'notification_icon',
      progress: downloadingTorrents.length
        ? {
            indeterminate: true,
          }
        : undefined,
      autoCancel: false,
      pressAction: {
        id: 'default',
      },
      actions: [
        {
          title: 'Start All',
          pressAction: {
            id: 'startAll',
          },
        },
        {
          title: 'Pause All',
          pressAction: {
            id: 'pauseAll',
          },
        },
        {
          title: 'Exit',
          pressAction: {
            id: 'exit',
          },
        },
      ],
    },
  })
}

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
    await notifee.stopForegroundService()
    quitApp()
  }
}

export const createPersistentNotification = async () => {
  await checkNotificationPermission()

  await notifee.createChannel({
    id: CHANNEL_ID,
    name: 'Persistent notification',
    lights: false,
    vibration: false,
    importance: AndroidImportance.DEFAULT,
  })

  notifee.onBackgroundEvent(handleEvents)

  // Create foreground notification
  updateNotification()

  notifee.registerForegroundService((notification) => {
    return new Promise((resolve, reject) => {
      notifee.onForegroundEvent(handleEvents)

      // Refresh notification every 5 seconds
      setInterval(async () => {
        await updateNotification(notification)
      }, 5000)
    })
  })
}
