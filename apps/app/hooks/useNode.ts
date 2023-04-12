import { useEffect } from 'react'
import { usePeer } from './usePeer'

const { SIGNALING_URL } = process.env

if (!SIGNALING_URL) throw new Error('Missing SIGNALING_URL env var')

const RESPONSE_TIMEOUT = 10_000

let msgId = 0
const responsesPromises = new Map()
const clientId = crypto.randomUUID() // Note: Should we save the clientId ?

// Hook to interact with a pikatorrent node
export const useNode = ({ nodeId }) => {
  const { peerRef, isConnected } = usePeer({ clientId, nodeId })

  useEffect(() => {
    const peer = peerRef.current
    if (!peer || !isConnected) return

    const handleData = (data: Buffer) => {
      const message = JSON.parse(data.toString())
      const responsePromise = responsesPromises.get(message.id)
      if (responsePromise) {
        responsePromise.resolve(message)
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

    // Reject the promise after a timeout
    setTimeout(() => {
      const responsePromise = responsesPromises.get(message.id)
      if (responsePromise) {
        responsePromise.reject(new Error('Timeout'))
        responsesPromises.delete(message.id)
      }
    }, RESPONSE_TIMEOUT)

    peerRef.current?.send(JSON.stringify(message))

    return promise
  }

  return {
    isConnected,
    sendRPCMessage,
  }
}
