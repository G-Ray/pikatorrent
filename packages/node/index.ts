import Peer from 'simple-peer'
import Transmission from 'transmission-native'
import wrtc from '@roamhq/wrtc'

import { default as config } from './config.js'
import { initWebSocket } from './lib/websocket.js'
import { onAcceptOrRejectPeerCli, printNodeInfo } from './lib/tui.js'
import {
  settings,
  saveSettings,
  saveTransmissionSettingsIfNeeded,
  updateSettings,
  transmissionConfigPath,
} from './lib/settings.js'

const { SIGNALING_URL, APP_URL } = config

if (!SIGNALING_URL) throw new Error('Missing SIGNALING_URL env var')
if (!APP_URL) throw new Error('Missing APP_URL env var')

const tr = new Transmission(transmissionConfigPath, 'transmission')

export let onUpdateSettings
export const peers = new Map<string, InstanceType<Peer.SimplePeer>>() // clientId -> SimplePeer

type Options = {
  onAcceptOrRejectPeer?: (peerId: string, peerName: string) => Promise<boolean>
  connectWebsocket?: boolean
  wrtc?: any
  onUpdateSettings?: () => {}
}

const startNode = (
  options: Options = {
    connectWebsocket: true,
    onAcceptOrRejectPeer: onAcceptOrRejectPeerCli,
    onUpdateSettings: null,
  }
) => {
  if (options.onUpdateSettings) {
    onUpdateSettings = options.onUpdateSettings
  }

  printNodeInfo()

  if (options.connectWebsocket) {
    initWebSocket({
      tr,
      wrtc: options.wrtc || wrtc,
      onAcceptOrRejectPeer:
        options.onAcceptOrRejectPeer || onAcceptOrRejectPeerCli,
    })
  }

  return settings.nodeId
}

const transmission = {
  request: (...args) => {
    tr.request(...args)
    saveTransmissionSettingsIfNeeded(tr, args[0])
  },
  saveSettings: () => tr.saveSettings(),
  close: () => {
    saveSettings()
    tr.close()
  },
}

// Handle exit gracefully
process.on('SIGINT', () => {
  saveSettings()
  tr.close()
  process.exit()
})

export { startNode, transmission, settings, updateSettings }
