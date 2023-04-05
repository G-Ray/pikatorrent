import { useContext, useEffect, useState } from 'react'
import { NodeContext } from '../contexts/node'

export const useSession = () => {
  const { sendRPCMessage } = useContext(NodeContext)
  const [session, setSession] = useState({})

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await sendRPCMessage({
          method: 'session-get',
        })

        setSession(response.payload.arguments)
      } catch (e) {
        console.log('error fetching session info', e)
      }
    }

    fetchSession()
  }, [sendRPCMessage])

  return session
}
