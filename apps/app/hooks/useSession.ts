import { useCallback, useContext, useEffect, useState } from 'react'
import { NodeContext } from '../contexts/NodeContext'

export const useSession = () => {
  const { sendRPCMessage } = useContext(NodeContext)
  const [session, setSession] = useState({})

  const fetchSession = useCallback(async () => {
    try {
      const response = await sendRPCMessage({
        method: 'session-get',
      })

      setSession(response.arguments)
    } catch (e) {
      console.log('error fetching session info', e)
    }
  }, [sendRPCMessage])

  useEffect(() => {
    fetchSession()
  }, [sendRPCMessage, fetchSession])

  return { session, fetchSession }
}
