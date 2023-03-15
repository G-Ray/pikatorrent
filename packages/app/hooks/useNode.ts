import { useEffect, useState } from 'react'
import { Platform } from 'react-native'

import Peer from 'simple-peer/simplepeer.min.js'

const WEBSOCKET_URL = 'ws://localhost:9001'
const RESPONSE_TIMEOUT = 10_000

let peer: any
let msgId = 0
const responsesPromises = new Map()

// Hook to interact with a pikatorrent node
export const useNode = () => {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const ws = new WebSocket(WEBSOCKET_URL)

    peer =
      Platform.OS === 'web'
        ? new Peer({ initiator: true })
        : new Peer({ initiator: true, wrtc: require('react-native-webrtc') })

    // Listen for messages
    ws.addEventListener('message', (event) => {
      const json = JSON.parse(event.data)

      if (json.type === 'answer') {
        peer.signal(json)
      }
    })

    peer.on('error', (err) => console.log('error', err))

    peer.on('signal', (data) => {
      if (data.type === 'offer' || data.type === 'answer') {
        ws.send(JSON.stringify(data))
      }
    })

    peer.on('connect', () => {
      setIsConnected(true)
    })

    peer.on('data', (data) => {
      console.log('data received', data.toString())
      const message = JSON.parse(data.toString())
      const responsePromise = responsesPromises.get(message.id)
      if (responsePromise) {
        responsePromise.resolve(message)
        responsesPromises.delete(message.id)
      }
    })

    return () => {
      peer.destroy()
      ws.close()
    }
  }, [])

  const sendRPCMessage = async (json: any) => {
    if (!isConnected || !peer) {
      throw new Error('Node not connected')
    }

    const message = { id: msgId++, payload: json }

    let resolve, reject
    const promise = new Promise((res, rej) => {
      resolve = res
      reject = rej
    })

    responsesPromises.set(message.id, { resolve, reject })

    // Reject the promise after a timeout
    setTimeout(() => {
      reject(new Error('Timeout'))
      responsesPromises.delete(message.id)
    }, RESPONSE_TIMEOUT)

    peer.send(JSON.stringify(message))

    return await promise
  }

  return {
    isConnected,
    sendRPCMessage,
  }
}
