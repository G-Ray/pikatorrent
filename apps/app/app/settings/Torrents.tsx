import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { Button, Form, H2, Input, Label, XStack, YStack } from 'tamagui'

import { NodeContext } from '../../contexts/node'
import { useSession } from '../../hooks/useSession'

export const Torrents = () => {
  const { sendRPCMessage } = useContext(NodeContext)
  const initialSession = useSession()
  const [session, setSession] = useState({})

  useEffect(() => {
    setSession(initialSession)
  }, [initialSession])

  const hasChanged = JSON.stringify(session) !== JSON.stringify(initialSession)

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

  if (!session) return null // TODO: Loading

  return (
    <Form space ai="flex-start" onSubmit={() => handleSubmit()}>
      <H2>Torrents settings</H2>
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
    </Form>
  )
}
