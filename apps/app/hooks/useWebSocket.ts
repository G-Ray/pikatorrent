import { useEffect, useRef, useState } from 'react'

import { SIGNALING_URL } from '../config'

interface UseWebSocketOptions {
  clientId: string
}

export const useWebSocket = ({ clientId }: UseWebSocketOptions) => {
  const wsRef = useRef<WebSocket | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    setIsConnected(false)

    let handleCloseTimeout: ReturnType<typeof setTimeout>

    const handleError = (e: Event) => {
      console.error(e)
    }

    const handleClose = () => {
      setIsConnected(false)
      // Retry
      handleCloseTimeout = setTimeout(connect, 1000)
    }

    const handleOpen = () => {
      setIsConnected(true)
      wsRef.current?.send(JSON.stringify({ type: 'subscribe', id: clientId }))
    }

    const connect = () => {
      // Cleanup any existing instance & listener
      close()

      wsRef.current = new WebSocket(SIGNALING_URL)

      wsRef.current.addEventListener('error', handleError)
      wsRef.current.addEventListener('close', handleClose)
      wsRef.current.addEventListener('open', handleOpen)
    }

    const close = () => {
      clearTimeout(handleCloseTimeout)

      if (wsRef.current) {
        // remove handlers and close ws
        wsRef.current.removeEventListener('error', handleError)
        wsRef.current.removeEventListener('close', handleClose)
        wsRef.current.removeEventListener('open', handleOpen)
        wsRef.current.close()
      }
    }

    connect()

    return () => {
      close()
    }
  }, [clientId])

  return { isConnected, wsRef }
}
