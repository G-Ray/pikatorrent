import React, { useRef } from 'react'
import { useContext, useEffect, useState } from 'react'
import {
  Adapt,
  Button,
  Form,
  H2,
  Input,
  Paragraph,
  Select,
  Sheet,
  XStack,
  YStack,
  useMedia,
} from 'tamagui'

import { NodeContext } from '../../contexts/NodeContext'
import { useSession } from '../../hooks/useSession'
import { Check, ChevronDown, ChevronUp, Folder } from '@tamagui/lucide-icons'
import { SettingLayout } from './Nodes'
import isElectron from 'is-electron'

export const Torrents = () => {
  const { sendRPCMessage, isConnected } = useContext(NodeContext)
  const { session: initialSession, fetchSession } = useSession()
  const [session, setSession] = useState({})
  const media = useMedia()

  useEffect(() => {
    setSession(initialSession)
  }, [initialSession])

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

  if (!session || !isConnected) return null

  return (
    <Form space ai="flex-start" onSubmit={() => handleSubmit()} w="100%">
      <H2>Torrents settings</H2>
      <SettingLayout>
        <Paragraph>Download directory</Paragraph>
        <XStack>
          <DownloadDirectoryInput session={session} setSession={setSession} />
        </XStack>
      </SettingLayout>

      <SettingLayout>
        <Paragraph>Encryption</Paragraph>
        <XStack w={media.gtXs ? 180 : '100%'}>
          <Select
            id="node"
            value={session.encryption}
            onValueChange={(mode) => {
              setSession((s) => ({ ...s, encryption: mode }))
            }}
          >
            <Select.Trigger iconAfter={ChevronDown} f={1}>
              <Select.Value placeholder="Select an option" />
            </Select.Trigger>

            <Adapt when="sm" platform="touch">
              <Sheet modal dismissOnSnapToBottom snapPoints={[20]}>
                <Sheet.Frame>
                  <Adapt.Contents />
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
      </SettingLayout>

      <Form.Trigger asChild disabled={!hasChanged} alignSelf="flex-end">
        <Button theme="yellow" o={!hasChanged ? 0.5 : 1}>
          Save
        </Button>
      </Form.Trigger>
    </Form>
  )
}

const DownloadDirectoryInput = ({ session, setSession }) => {
  const node = useContext(NodeContext)

  if (!isElectron() || !node.isLocal) {
    return (
      <Input
        editable={false}
        o={0.5}
        flex={1}
        id="downloadDir"
        size="$4"
        borderWidth={2}
        value={session['download-dir']}
      />
    )
  }

  return (
    <XStack>
      <Input
        mr="$2"
        flex={1}
        id="downloadDir"
        size="$4"
        borderWidth={2}
        value={session['download-dir']}
        onChangeText={(text) => {
          setSession((s) => ({ ...s, ['download-dir']: text }))
        }}
      />
      <Button
        circular
        icon={Folder}
        onPress={async () => {
          const selectedFolders = await window.electronAPI.selectFolder(
            session['download-dir']
          )
          if (selectedFolders && selectedFolders.length > 0) {
            const path = selectedFolders[0]
            setSession((s) => ({ ...s, ['download-dir']: path }))
          }
        }}
      ></Button>
    </XStack>
  )
}
