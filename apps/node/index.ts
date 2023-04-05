import * as Peer from 'simple-peer'
import * as wrtc from 'wrtc'
import * as WS from 'ws'

const Transmission = require('transmission-native')
const tr = new Transmission('./transmission', 'transmission')

let ws
let peers = new Map<string, InstanceType<Peer.SimplePeer>>() // clientId -> SimplePeer

// TODO: generate randomly and save on disk
// const channelId = 'channel-id'
const nodeId = 'node-id'

const initWebSocket = () => {
  ws = new WS('ws://localhost:9001')

  // Listen for messages
  ws.on('message', (message) => {
    const json = JSON.parse(message)

    if (json.type === 'signal' && json.signal.type === 'offer') {
      // Create new peer
      initPeer(json.fromId, json.signal)
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
    setTimeout(initWebSocket, 1000)
  })

  ws.on('error', console.error)

  ws.on('open', () => {
    // Subscribe to a specific channel
    ws.send(
      JSON.stringify({
        type: 'subscribe',
        id: nodeId,
      })
    )
  })
}

const initPeer = (id, offer) => {
  console.log('initPeer')

  const peer = new Peer({ initiator: false, wrtc })
  peers.set(id, peer)

  peer.on('error', (err) => {
    console.error(err)
  })

  peer.on('close', () => {
    console.log('peer closed')
    peer.destroy()
    peers.delete(id)
  })

  peer.on('connect', () => {
    console.log('peer connected')
  })

  peer.on('signal', (signal) => {
    console.log('signal')
    ws.send(
      JSON.stringify({
        type: 'signal',
        fromId: nodeId,
        toId: id,
        signal,
      })
    )
  })

  peer.on('data', async (data) => {
    const { payload } = JSON.parse(data)
    let response

    // Trigger request
    try {
      response = await tr.request(payload)
    } catch (e) {
      response = { error: e.message }
    }

    // Return response
    try {
      peer.send(JSON.stringify({ id: JSON.parse(data).id, payload: response }))
    } catch (e) {
      console.error(e)
    }
  })

  peer.signal(offer)
}

initWebSocket()

// Handle exit gracefully
process.on('SIGINT', () => {
  tr.close()
  process.exit()
})
