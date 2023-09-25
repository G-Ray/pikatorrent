import WS from 'ws'

import { peers } from '../index.js'
import { initPeer } from './peers.js'
import { default as config } from '../config.js'
import { saveAcceptedPeer, saveRejectedPeer, settings } from './settings.js'

let isPromptingForNewPeer = false

// TODO: Encrypt signaling data ?
export const initWebSocket = ({ tr, wrtc, onAcceptOrRejectPeer }) => {
  const ws = new WS(config.SIGNALING_URL)

  // Listen for messages
  ws.on('message', async (message) => {
    const json = JSON.parse(message)

    if (
      json.type === 'signal' &&
      json.signal.type === 'offer' &&
      peers.has(json.fromId) === false
    ) {
      const peerId = json.fromId
      // Create new peer
      if (settings.rejectedPeers.find((p) => p.id === peerId)) {
        // Ignore rejected peer
        return
      } else if (settings.acceptedPeers.find((p) => p.id === peerId)) {
        // accept peer connection immediately
        initPeer({ ws, tr, wrtc, id: json.fromId, signal: json.signal })
      } else {
        if (isPromptingForNewPeer) {
          // Ignore new request while old one is still pending
          return false
        }

        isPromptingForNewPeer = true

        const isApproved = await onAcceptOrRejectPeer(
          json.fromId,
          json.fromName
        )

        if (isApproved) {
          saveAcceptedPeer(json.fromId, json.fromName)
          initPeer({ ws, tr, wrtc, id: json.fromId, signal: json.signal })
        } else if (!isApproved) {
          saveRejectedPeer(json.fromId, json.fromName)
        }

        isPromptingForNewPeer = false
      }
    } else {
      // Find existing peer and call signal
      const peer = peers.get(json.fromId)
      if (peer) {
        peer.signal(json.signal)
      }
    }
  })

  ws.on('close', () => {
    // Retry
    setTimeout(
      () => initWebSocket({ tr, wrtc, onAcceptOrRejectPeer }),
      config.WEBSOCKET_RETRY_DELAY
    )
  })

  ws.on('error', (e) => {
    if (e.code === 'ECONNREFUSED') {
      console.error('Connection refused to ' + config.SIGNALING_URL)
    } else {
      console.error(e)
    }
  })

  ws.on('open', () => {
    // Subscribe to a specific channel
    ws.send(
      JSON.stringify({
        type: 'subscribe',
        id: settings.nodeId,
      })
    )
  })
}
