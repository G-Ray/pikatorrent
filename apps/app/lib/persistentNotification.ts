import prettyBytes from 'pretty-bytes'
import notifee, {
  AndroidImportance,
  AuthorizationStatus,
  Event,
} from '@notifee/react-native'

import * as transmission from './transmission'

const CHANNEL_ID = 'foregroundServiceId'
// reference to interval function which update the persisten notification
let updateNotificationInterval: NodeJS.Timer

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
      onlyAlertOnce: true,
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
          title: 'Shutdown',
          pressAction: {
            id: 'exit',
          },
        },
      ],
    },
  })
}

export const registerEvents = (
  eventsHandler: (event: Event) => Promise<void>
) => {
  notifee.onBackgroundEvent(eventsHandler)
  notifee.onForegroundEvent(eventsHandler)
}

export const createPersistentNotification = async () => {
  await checkNotificationPermission()
  // Be sure to clear any existing notifications or foreground service
  await notifee.cancelAllNotifications()
  await notifee.stopForegroundService()

  await notifee.createChannel({
    id: CHANNEL_ID,
    name: 'Persistent notification',
    lights: false,
    vibration: false,
    importance: AndroidImportance.LOW,
  })

  // Create foreground notification
  updateNotification()

  notifee.registerForegroundService((notification) => {
    return new Promise((resolve, reject) => {
      // Refresh notification every 5 seconds
      updateNotificationInterval = setInterval(async () => {
        await updateNotification(notification)
      }, 5000)
    })
  })
}

export const destroyPersistentNotification = async () => {
  if (updateNotificationInterval) {
    clearInterval(updateNotificationInterval)
  }
  await notifee.stopForegroundService()
  await notifee.cancelAllNotifications()
}
