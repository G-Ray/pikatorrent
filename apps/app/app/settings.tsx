import { useContext, useEffect, useState } from 'react'
import { Button, Form, Input, Label, Paragraph, XStack } from 'tamagui'
import { NodeContext } from '../contexts/node'
import { SessionsInfoDialog } from '../dialogs/SessionInfoDialog'

export default function Settings() {
  const { sendRPCMessage } = useContext(NodeContext)
  const [initialSession, setInitialSession] = useState({})
  const [session, setSession] = useState({})

  const hasChanged = JSON.stringify(session) !== JSON.stringify(initialSession)

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await sendRPCMessage({
          method: 'session-get',
        })

        setInitialSession(response.payload.arguments)
        setSession(response.payload.arguments)
      } catch (e) {
        console.log('error fetching session info', e)
      }
    }

    fetchSession()
  }, [sendRPCMessage])

  const handleSubmit = async () => {
    try {
      const response = await sendRPCMessage({
        method: 'session-set',
        arguments: {
          'download-dir': session['download-dir'],
        },
      })

      setSession(response.payload.arguments)
    } catch (e) {
      console.log('error updating session info', e)
    }
  }

  return (
    <Form height="100%" space ai="flex-start" onSubmit={() => handleSubmit()}>
      <XStack space w="100%">
        <Label htmlFor="downloadDir">Download directory</Label>
        <Input
          flex={1}
          id="downloadDir"
          size="$4"
          borderWidth={2}
          value={session['download-dir']}
          onChange={(e) => {
            setSession((s) => ({ ...s, ['download-dir']: e.target.value }))
          }}
        />
      </XStack>

      <Form.Trigger asChild disabled={!hasChanged}>
        <Button theme="blue" o={!hasChanged ? 0.5 : 1}>
          Save
        </Button>
      </Form.Trigger>

      <XStack space w="100%" ai="center">
        <Label htmlFor="transmissionVersion">Transmission version</Label>
        <Paragraph id="transmissionVersion">{session['version']}</Paragraph>
        <SessionsInfoDialog session={session} />
      </XStack>
    </Form>
  )

  // return <TextArea minHeight="100%" value={JSON.stringify(session, null, 2)} />
}