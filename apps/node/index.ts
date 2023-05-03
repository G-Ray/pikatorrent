import * as Peer from 'simple-peer'
import * as wrtc from 'wrtc'
import * as WS from 'ws'
import * as Transmission from 'transmission-native'
import * as crypto from 'node:crypto'
import * as fs from 'node:fs'
import * as dotenv from 'dotenv'

dotenv.config()

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

console.log('Node ID:', nodeId)

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

    if (
      json.type === 'signal' &&
      json.signal.type === 'offer' &&
      peers.has(json.fromId) === false
    ) {
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
  const reconstructingMessages = new Map()

  const peer = new Peer({ initiator: false, wrtc })
  peers.set(id, peer)

  /**
   * Initial buffer contaning id and expected byteLength
   * @param data - the buffer
   */
  const handleInitialData = (data) => {
    // Message id
    const messageId = new Uint32Array(
      new Uint8Array(data.subarray(1, 5)).buffer
    )[0]
    // Total expected byteLength of the message
    const byteLength = new Uint32Array(
      new Uint8Array(data.subarray(5, 10)).buffer
    )[0]

    // Destroy the message if no chunk arrived by 10 seconds
    const checkMessageTimeoutInterval = setInterval(() => {
      if (!reconstructingMessages.get(messageId)) {
        clearInterval(checkMessageTimeoutInterval)
      }

      const delta =
        new Date().getTime() -
        reconstructingMessages.get(messageId)?.lastReceivedDate.getTime()

      if (delta > 10_000) {
        // destroy reconstructing message after 10 seconds without new chunks
        reconstructingMessages.delete(messageId)
        clearInterval(checkMessageTimeoutInterval)
      }
    }, 10_000)

    reconstructingMessages.set(messageId, {
      byteLength,
      buffer: new Uint8Array(),
      lastReceivedDate: new Date(),
    })
  }

  /**
   * Handle next chunks and append them
   * @param data - the buffer
   */
  const handleChunkData = async (data) => {
    // Message id
    const messageId = new Uint32Array(
      new Uint8Array(data.subarray(1, 5)).buffer
    )[0]

    if (!reconstructingMessages.get(messageId)) {
      // quietly ignore message which could have timeout
      return
    }

    // Concat chunks
    reconstructingMessages.get(messageId).buffer = Buffer.concat([
      reconstructingMessages.get(messageId).buffer,
      data.slice(5),
    ])

    // Keep track of last chunk date
    reconstructingMessages.get(messageId).lastReceivedDate = new Date()

    if (
      reconstructingMessages.get(messageId).buffer.byteLength ===
      reconstructingMessages.get(messageId).byteLength
    ) {
      // Message is totally received
      const payload = JSON.parse(reconstructingMessages.get(messageId).buffer)
      reconstructingMessages.delete(messageId)

      let response
      // Trigger request
      try {
        response = await tr.request(payload)
      } catch (e) {
        response = { error: e.message }
      }

      // Return response
      try {
        peer.send(JSON.stringify({ id: messageId, payload: response }))
      } catch (e) {
        console.error(e)
      }
    }
  }

  peer.on('error', (err) => {
    console.error(err)
  })

  peer.on('close', () => {
    peer.destroy()
    peers.delete(id)
  })

  peer.on('signal', (signal) => {
    ws.send(
      JSON.stringify({
        type: 'signal',
        fromId: nodeId,
        toId: id,
        signal,
      })
    )
  })

  /**
   * First received byte is either :
   * 0 for initial message -> 4 bytes for message id, then 4 bytes for total buffer byteLength
   * 1 for chunks to append -> 4 bytes for message id, then the buffer to append
   */
  peer.on('data', async (data) => {
    if (data[0] === 0) {
      handleInitialData(data)
    }

    if (data[0] === 1) {
      handleChunkData(data)
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
