import { useCallback, useContext, useEffect, useState } from 'react'
import { NodeContext } from '../contexts/NodeContext'

export const useSessionStats = ({ interval = 5000 }) => {
  const { sendRPCMessage } = useContext(NodeContext)
  const [sessionStats, setSessionStats] = useState({})

  const fetchSessionStats = useCallback(async () => {
    try {
      const response = await sendRPCMessage({
        method: 'session-stats',
      })

      setSessionStats(response.arguments)
    } catch (e) {
      console.log('error fetching session info', e)
    }
  }, [sendRPCMessage])

  useEffect(() => {
    const intervalFunction = setInterval(() => {
      fetchSessionStats()
    }, interval)

    return () => {
      clearInterval(intervalFunction)
    }
  }, [interval, fetchSessionStats])

  return {
    sessionStats,
  }
}
