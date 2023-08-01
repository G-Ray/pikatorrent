import Peer from 'simple-peer'
import WS from 'ws'
import Transmission from 'transmission-native'
import * as readline from 'node:readline'
import * as crypto from 'node:crypto'
import * as path from 'node:path'
import * as fs from 'node:fs'
import * as QRCode from 'qrcode'
import { default as config } from './config.js'
import envPaths from 'env-paths'
import wrtc from 'wrtc'

const { SIGNALING_URL, APP_URL } = config

const WEBSOCKET_RETRY_DELAY = 5000

if (!SIGNALING_URL) throw new Error('Missing SIGNALING_URL env var')
if (!APP_URL) throw new Error('Missing APP_URL env var')

const getOSName = () => {
  switch (process.platform) {
    case 'darwin':
      return 'macOS'
    case 'linux':
      return 'Linux'
    case 'win32':
      return 'Windows'
    default:
      return process.platform
  }
}

type Peer = {
  id: string
  name: string
}

type Settings = {
  nodeId: string
  acceptedPeers: Peer[]
  rejectedPeers: Peer[]
}

const configPath = envPaths('pikatorrent', { suffix: null }).config
if (!fs.existsSync(configPath)) {
  fs.mkdirSync(configPath, { recursive: true })
}

const transmissionConfigPath = path.join(configPath, 'transmission')
const settingsFilePath = path.join(configPath, 'settings.json')
const tr = new Transmission(transmissionConfigPath, 'transmission')

let ws
let wrtcInstance
let isPromptingForNewPeer = false
let onUpdateSettings
const peers = new Map<string, InstanceType<Peer.SimplePeer>>() // clientId -> SimplePeer

const defaultSettings = {
  nodeId: null,
  acceptedPeers: [],
  rejectedPeers: [],
}
let settings: Settings = { ...defaultSettings }

const loadSettings = () => {
  // load settings.json
  if (fs.existsSync(settingsFilePath)) {
    const settingsFileData = fs.readFileSync(settingsFilePath)
    if (settingsFileData) {
      settings = {
        ...settings,
        ...JSON.parse(settingsFileData.toString()),
      }
    }
  }
}

loadSettings()

const nodeId =
  settings && settings.nodeId ? settings.nodeId : crypto.randomUUID()

const updateSettings = (update) => {
  settings = { ...settings, ...update }
  if (onUpdateSettings) {
    onUpdateSettings(settings)
  }
  saveSettings()
}

const saveSettings = () => {
  fs.writeFileSync(settingsFilePath, JSON.stringify(settings))
}

if (!settings) {
  // Save nodeId to settings.json
  updateSettings({ nodeId })
}

const printNodeInfo = async () => {
  const linkUrl = encodeURI(
    `${APP_URL}/settings?nodeId=${nodeId}&name=PikaTorrent cli on ${getOSName()}`
  )

  const qrcode = await QRCode.toString(linkUrl)

  console.log(
    `> Control this node by clicking on the url, or scan the QR code from the mobile app:`
  )
  console.log(qrcode)
  console.log(linkUrl)
  console.log('\nDo not share your unique link or QR code with anyone.')
}

// TODO: Encrypt signaling data ?
const initWebSocket = ({ onAcceptOrRejectPeer }) => {
  ws = new WS(SIGNALING_URL)

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
        initPeer(json.fromId, json.signal)
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
          initPeer(json.fromId, json.signal)
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
      () => initWebSocket({ onAcceptOrRejectPeer }),
      WEBSOCKET_RETRY_DELAY
    )
  })

  ws.on('error', (e) => {
    if (e.code === 'ECONNREFUSED') {
      console.error('Connection refused to ' + SIGNALING_URL)
    } else {
      console.error(e)
    }
  })

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

  const peer = new Peer({ initiator: false, wrtc: wrtcInstance })
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
        saveSettingsIfNeeded(payload)
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

const onAcceptOrRejectPeerCli = async (peerId: string, peerName: string) => {
  return new Promise<boolean>((resolve, reject) => {
    const readlineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    readlineInterface.question(
      `Accept connection from ${peerName} (${peerId}) ? Y/N\n`,
      (response) => {
        readlineInterface.close()

        if (['y', 'Y'].includes(response)) {
          resolve(true)
        } else if (['n', 'N'].includes(response)) {
          resolve(false)
        } else {
          // Do not save until we have a correct response
          resolve(false)
        }
      }
    )
  })
}

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
  wrtcInstance = options.wrtc || wrtc

  if (options.onUpdateSettings) {
    onUpdateSettings = options.onUpdateSettings
  }

  printNodeInfo()

  if (options.connectWebsocket) {
    initWebSocket({
      onAcceptOrRejectPeer:
        options.onAcceptOrRejectPeer || onAcceptOrRejectPeerCli,
    })
  }

  return nodeId
}

const saveAcceptedPeer = (peerId, name) => {
  updateSettings({
    acceptedPeers: [...settings.acceptedPeers, { id: peerId, name }],
  })
}

const saveRejectedPeer = (peerId, name) => {
  updateSettings({
    rejectedPeers: [...settings.rejectedPeers, { id: peerId, name }],
  })
}

const saveSettingsIfNeeded = (request) => {
  if (request.method === 'session-set') {
    // session have been updated, so save settings
    tr.saveSettings()
  }
}

const transmission = {
  request: (...args) => {
    tr.request(...args)
    saveSettingsIfNeeded(args[0])
  },
  saveSettings: () => tr.saveSettings(),
  close: () => tr.close(),
}

// Handle exit gracefully : TODO: expose close/destroy function
process.on('SIGINT', () => {
  tr.close()
  process.exit()
})

export { startNode, transmission, settings, updateSettings }
