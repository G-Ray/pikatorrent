import { useContext, useEffect, useState } from 'react'
import { TextArea } from 'tamagui'
import { NodeContext } from '../contexts/node'

export default function Settings() {
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
        console.log('catched error')
      }
    }

    fetchSession()
  }, [sendRPCMessage])

  return <TextArea minHeight="100%" value={JSON.stringify(session, null, 2)} />
}
