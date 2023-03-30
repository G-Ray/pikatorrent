import { useEffect, useRef, useState } from 'react'
import { Platform } from 'react-native'
import { SimplePeer } from 'simple-peer'

const { SIGNALING_URL } = process.env

if (!SIGNALING_URL) throw new Error('Missing SIGNALING_URL env var')

import Peer from 'simple-peer/simplepeer.min.js'

const RESPONSE_TIMEOUT = 10_000
const RECONNECT_INTERVAL = 5_000

let msgId = 0
const responsesPromises = new Map()

// Hook to interact with a pikatorrent node
export const useNode = () => {
  const [isConnected, setIsConnected] = useState(false)
  const ws = useRef<WebSocket | null>(null)
  const peer = useRef<InstanceType<SimplePeer> | null>(null)

  useEffect(() => {
    let webSocketConnectionInverval: any = null
    let peerConnectionInverval: any = null

    // Init WebSocket
    const initWebSocket = () => {
      console.log('initWebSocket')

      // Init websocket
      ws.current = new WebSocket(SIGNALING_URL)

      ws.current.addEventListener('open', () => {
        clearInterval(webSocketConnectionInverval)
        webSocketConnectionInverval = null
      })

      // Listen for answer
      ws.current.addEventListener('message', (event) => {
        const json = JSON.parse(event.data)

        if (json.type === 'answer' && peer.current) {
          peer.current.signal(json)
        }
      })

      ws.current.addEventListener('close', () => {
        if (!webSocketConnectionInverval) {
          retryWebSocketConnection()
        }
      })
    }

    // Init Peer
    const initPeer = () => {
      console.log('initPeer')

      if (peer.current) {
        // Destroy any previous peer instance
        peer.current.destroy()
      }

      // Init Peer instance
      peer.current =
        Platform.OS === 'web'
          ? <InstanceType<SimplePeer>>new Peer({ initiator: true })
          : <InstanceType<SimplePeer>>new Peer({
              initiator: true,
              wrtc: require('react-native-webrtc'),
            })

      peer.current.on('error', () => {
        setIsConnected(false)
      })

      peer.current.on('signal', (data: any) => {
        if (ws.current && (data.type === 'offer' || data.type === 'answer')) {
          ws.current.send(JSON.stringify(data))
        }
      })

      peer.current.on('connect', () => {
        setIsConnected(true)
        if (peerConnectionInverval) {
          clearInterval(peerConnectionInverval)
          peerConnectionInverval = null
        }
      })

      peer.current.on('close', () => {
        setIsConnected(false)
        // retry connection
        if (!peerConnectionInverval) {
          retryPeerConnection()
        }
      })

      peer.current.on('error', (e) => {
        console.error('peer error', e)
      })

      peer.current.on('data', (data: Buffer) => {
        const message = JSON.parse(data.toString())
        const responsePromise = responsesPromises.get(message.id)
        if (responsePromise) {
          responsePromise.resolve(message)
          responsesPromises.delete(message.id)
        }
      })
    }

    const retryWebSocketConnection = () => {
      webSocketConnectionInverval = setInterval(() => {
        initWebSocket()
      }, RECONNECT_INTERVAL)
    }

    const retryPeerConnection = () => {
      peerConnectionInverval = setInterval(() => {
        initPeer()
      }, RECONNECT_INTERVAL)
    }

    initWebSocket()
    retryWebSocketConnection()

    initPeer()
    retryPeerConnection()

    return () => {
      clearInterval(webSocketConnectionInverval)
      clearInterval(peerConnectionInverval)

      if (ws.current) {
        ws.current.close()
      }

      if (peer.current) {
        peer.current.destroy()
      }
    }
  }, [])

  const sendRPCMessage = (json: any) => {
    if (!isConnected || !peer.current) {
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
      const responsePromise = responsesPromises.get(message.id)
      if (responsePromise) {
        try {
          responsePromise.reject(new Error('Timeout'))
        } catch (e) {}
        responsesPromises.delete(message.id)
      }
    }, RESPONSE_TIMEOUT)

    peer.current.send(JSON.stringify(message))

    return promise
  }

  return {
    isConnected,
    sendRPCMessage,
  }
}
