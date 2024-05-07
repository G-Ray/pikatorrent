import { useContext, useEffect } from 'react'
import { usePeer } from './usePeer'
import { Buffer } from 'buffer'
import { SettingsContext } from '../contexts/SettingsContext'

const RESPONSE_TIMEOUT = 10_000

let msgId = 0
const responsesPromises = new Map()

interface UseRemoteNodeOptions {
  clientId: string
  nodeId: string
}

// Hook to interact with a pikatorrent node
export const useRemoteNode = ({ clientId, nodeId }: UseRemoteNodeOptions) => {
  const { settings } = useContext(SettingsContext)
  const { peerRef, isConnected, isUnsupportedBrowser } = usePeer({
    clientId,
    nodeId,
  })

  const node = settings.nodes?.find((n) => n.id === nodeId)

  useEffect(() => {
    const peer = peerRef.current
    if (!peer || !isConnected) return

    const handleData = (data: Buffer) => {
      const message = JSON.parse(data.toString())
      const responsePromise = responsesPromises.get(message.id)
      if (responsePromise) {
        responsePromise.resolve(message.payload)
        responsesPromises.delete(message.id)
      }
    }

    peer.addListener('data', handleData)

    return () => {
      // Cleanup
      peer.removeListener('data', handleData)
    }
  }, [peerRef, isConnected])

  const sendRPCMessage = (json: any) => {
    if (!isConnected || !peerRef || !peerRef.current?.connected) {
      throw new Error('Node not connected')
    }

    const message = { id: msgId++, payload: json }

    let resolve, reject
    const promise = new Promise((res, rej) => {
      resolve = res
      reject = rej
    })

    responsesPromises.set(message.id, { resolve, reject })

    let bufferMessage = Buffer.from(JSON.stringify(message.payload))

    const chunkSize = 16 * 1024 // 16 KiB

    const initialMessage = Buffer.concat([
      new Uint8Array([0]), // type 0 for initial message
      Buffer.from(new Uint32Array([message.id]).buffer), // Message id
      Buffer.from(new Uint32Array([bufferMessage.byteLength]).buffer), // total byteLength of the buffer to send
    ])

    peerRef.current?.send(initialMessage)

    // Send chunks
    while (bufferMessage.byteLength) {
      const chunk = bufferMessage.subarray(0, chunkSize)

      bufferMessage = bufferMessage.subarray(
        chunkSize,
        bufferMessage.byteLength
      )

      const buf = Buffer.concat([
        new Uint8Array([1]), // 1 for chunk data
        Buffer.from(new Uint32Array([message.id]).buffer), // Message id
        chunk,
      ])

      peerRef.current?.send(buf)
    }

    // Reject the promise after a timeout
    setTimeout(() => {
      const responsePromise = responsesPromises.get(message.id)
      if (responsePromise) {
        responsePromise.reject(new Error('Timeout'))
        responsesPromises.delete(message.id)
      }
    }, RESPONSE_TIMEOUT)

    return promise
  }

  return {
    name: node ? node.name : '',
    isConnected,
    sendRPCMessage,
    isUnsupportedBrowser,
  }
}
