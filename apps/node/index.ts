import * as Peer from 'simple-peer'
import * as wrtc from 'wrtc'
import * as WS from 'ws'
import * as Transmission from 'transmission-native'
import * as crypto from 'node:crypto'
import * as fs from 'node:fs'

const { SIGNALING_URL } = process.env

if (!SIGNALING_URL) throw new Error('Missing SIGNALING_URL env var')

const tr = new Transmission('./transmission', 'transmission')

let ws
const peers = new Map<string, InstanceType<Peer.SimplePeer>>() // clientId -> SimplePeer

let settings = null

// load settings.json
if (fs.existsSync('./settings.json')) {
  const settingsFileData = fs.readFileSync('./settings.json')
  if (settingsFileData) {
    settings = JSON.parse(settingsFileData.toString())
  }
}

const nodeId =
  settings && settings.nodeId ? settings.nodeId : crypto.randomUUID()

if (!settings) {
  // Save nodeId to settings.json
  fs.writeFileSync(
    './settings.json',
    JSON.stringify({
      nodeId,
    })
  )
}

const initWebSocket = () => {
  ws = new WS(SIGNALING_URL)

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
