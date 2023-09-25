import Peer from 'simple-peer'
import { peers, settings } from '../index.js'
import { saveTransmissionSettingsIfNeeded } from './settings.js'

export const initPeer = ({ ws, tr, id, signal, wrtc }) => {
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

      if (delta > 10000) {
        // destroy reconstructing message after 10 seconds without new chunks
        reconstructingMessages.delete(messageId)
        clearInterval(checkMessageTimeoutInterval)
      }
    }, 10000)

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
        saveTransmissionSettingsIfNeeded(tr, payload)
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
        fromId: settings.nodeId,
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

  peer.signal(signal)
}
