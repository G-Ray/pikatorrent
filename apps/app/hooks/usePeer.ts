import { useEffect, useRef, useState } from 'react'
import { Platform } from 'react-native'
import { SignalData, SimplePeer } from 'simple-peer'

import Peer from 'simple-peer/simplepeer.min.js'
import { useWebSocket } from './useWebSocket'
import { getDeviceName } from '../lib/device'

interface UsePeerOptions {
  nodeId: string
  clientId: string
}

export const usePeer = ({ nodeId, clientId }: UsePeerOptions) => {
  const peerRef = useRef<InstanceType<SimplePeer> | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const { isConnected: isWSConnected, wsRef } = useWebSocket({ clientId })
  const [isUnsupportedBrowser, setIsUnsupportedBrowser] = useState(false)

  useEffect(() => {
    setIsConnected(false)
    const ws = wsRef.current
    let handlecloseTimeout: ReturnType<typeof setTimeout>
    let handleSignalTimeout: ReturnType<typeof setTimeout>

    if (!isWSConnected || !ws) {
      return // wait for ws connection
    }

    const handleWSMessage = (event: MessageEvent) => {
      const json = JSON.parse(event.data)

      if (
        json.signal &&
        json.type === 'signal' &&
        !peerRef.current?.destroyed
      ) {
        peerRef.current?.signal(json.signal)
      }
    }

    const handleClose = () => {
      setIsConnected(false)
      // Retry
      handlecloseTimeout = setTimeout(connect, 1000)
    }

    const handleError = (e: Event) => {
      console.error(e)
    }

    const handleSignal = (signal: SignalData) => {
      ws.send(
        JSON.stringify({
          type: 'signal',
          fromId: clientId,
          fromName: getDeviceName(),
          toId: nodeId,
          signal,
        })
      )

      handleSignalTimeout = setTimeout(() => {
        // Node not online ? Keep trying
        if (!peerRef.current?.connected) {
          peerRef.current?.destroy()
        }
      }, 5000)
    }

    const handleConnect = () => {
      setIsConnected(true)
    }

    const connect = () => {
      // Cleanup any existing instance & listener
      close()

      ws.addEventListener('message', handleWSMessage)

      // Init Peer instance
      try {
        peerRef.current =
          Platform.OS === 'web'
            ? <InstanceType<SimplePeer>>new Peer({ initiator: true })
            : <InstanceType<SimplePeer>>new Peer({
                initiator: true,
                wrtc: require('../lib/webrtc'),
              })

        peerRef.current.addListener('close', handleClose)
        peerRef.current.addListener('error', handleError)
        peerRef.current.addListener('signal', handleSignal)
        peerRef.current.addListener('connect', handleConnect)
      } catch (e) {
        if (e.code === 'ERR_WEBRTC_SUPPORT') {
          setIsUnsupportedBrowser(true)
        } else {
          throw e
        }
      }
    }

    const close = () => {
      clearTimeout(handlecloseTimeout)
      clearTimeout(handleSignalTimeout)

      if (ws) {
        ws.removeEventListener('message', handleWSMessage)
      }

      if (peerRef.current) {
        peerRef.current.removeListener('close', handleClose)
        peerRef.current.removeListener('error', handleError)
        peerRef.current.removeListener('signal', handleSignal)
        peerRef.current.removeListener('connect', handleConnect)
        peerRef.current.destroy()
      }
    }

    connect()

    return () => {
      close()
    }
  }, [clientId, nodeId, wsRef, isWSConnected])

  return { peerRef: peerRef, isConnected, isUnsupportedBrowser }
}
