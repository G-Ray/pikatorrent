import { useEffect, useState } from 'react'
import { Platform } from 'react-native'

import Peer from 'simple-peer/simplepeer.min.js'

// Hook to interact with a pikatorrent node
export const useNode = () => {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:9001')

    let p =
      Platform.OS === 'web'
        ? new Peer({ initiator: true })
        : new Peer({ initiator: true, wrtc: require('react-native-webrtc') })

    // Listen for messages
    ws.addEventListener('message', (event) => {
      const json = JSON.parse(event.data)

      if (json.type === 'answer') {
        p.signal(json)
      }
    })

    p.on('error', (err) => console.log('error', err))

    p.on('signal', (data) => {
      if (data.type === 'offer' || data.type === 'answer') {
        ws.send(JSON.stringify(data))
      }
    })

    p.on('connect', () => {
      setIsConnected(true)
    })

    p.on('data', (data) => {})

    return () => {
      p.destroy()
      ws.close()
    }
  }, [])

  return {
    isConnected,
  }
}
