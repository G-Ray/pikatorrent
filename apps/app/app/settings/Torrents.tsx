import React from 'react'
import { useContext, useEffect, useState } from 'react'
import {
  Adapt,
  Button,
  Form,
  H2,
  Input,
  Label,
  Select,
  Sheet,
  XStack,
  YStack,
} from 'tamagui'

import { NodeContext } from '../../contexts/node'
import { useSession } from '../../hooks/useSession'
import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'

export const Torrents = () => {
  const { sendRPCMessage } = useContext(NodeContext)
  const { session: initialSession, fetchSession } = useSession()
  const [session, setSession] = useState({})

  useEffect(() => {
    setSession(initialSession)
  }, [initialSession])

  console.log('initialSession', initialSession, session)
  const hasChanged = JSON.stringify(session) !== JSON.stringify(initialSession)

  const handleSubmit = async () => {
    try {
      await sendRPCMessage({
        method: 'session-set',
        arguments: {
          'download-dir': session['download-dir'],
          encryption: session.encryption,
        },
      })

      fetchSession()
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

      <XStack space w="100%">
        <Label htmlFor="encryption">Encryption</Label>
        <Select
          id="node"
          value={session.encryption}
          onValueChange={(mode) => {
            console.log('mode', mode)
            setSession((s) => ({ ...s, encryption: mode }))
          }}
        >
          <Select.Trigger iconAfter={ChevronDown} f={1}>
            <Select.Value placeholder="Select a node" />
          </Select.Trigger>

          <Adapt when="sm" platform="touch">
            <Sheet modal dismissOnSnapToBottom>
              <Sheet.Frame>
                <Sheet.ScrollView>
                  <Adapt.Contents />
                </Sheet.ScrollView>
              </Sheet.Frame>
              <Sheet.Overlay />
            </Sheet>
          </Adapt>

          <Select.Content zIndex={200000}>
            <Select.ScrollUpButton
              ai="center"
              jc="center"
              pos="relative"
              w="100%"
              h="$3"
            >
              <YStack zi={10}>
                <ChevronUp size={20} />
              </YStack>
            </Select.ScrollUpButton>

            <Select.Viewport outlineStyle="none">
              <Select.Group space="$0">
                {['required', 'preferred', 'tolerated'].map((mode, i) => {
                  return (
                    <Select.Item
                      index={i}
                      key={mode}
                      value={mode}
                      outlineStyle="none"
                    >
                      <Select.ItemText>{mode}</Select.ItemText>
                      <Select.ItemIndicator ml="auto">
                        <Check size={16} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  )
                })}
              </Select.Group>
            </Select.Viewport>

            <Select.ScrollDownButton
              ai="center"
              jc="center"
              pos="relative"
              w="100%"
              h="$3"
            >
              <YStack zi={10}>
                <ChevronDown size={20} />
              </YStack>
            </Select.ScrollDownButton>
          </Select.Content>
        </Select>
      </XStack>

      <Form.Trigger asChild disabled={!hasChanged}>
        <Button theme="blue" o={!hasChanged ? 0.5 : 1}>
          Save
        </Button>
      </Form.Trigger>
    </Form>
  )
}
