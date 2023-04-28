import React, { useEffect } from 'react'
import { PlusCircle, X } from '@tamagui/lucide-icons'
import { useContext, useState } from 'react'
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Sheet,
  Unspaced,
  YStack,
} from 'tamagui'
import { NodeContext } from '../contexts/node'
import { Platform } from 'react-native'

export const AddTorrentDialog = () => {
  const [magnet, setMagnet] = useState('')
  const { sendRPCMessage } = useContext(NodeContext)

  const defaultOpen = Boolean(
    Platform.OS === 'web' &&
      new URLSearchParams(document.location.search).get('magnet')
  )

  useEffect(() => {
    // Open modal with magnet from url searchParams
    if (Platform.OS !== 'web') return

    const searchParams = new URLSearchParams(document.location.search)
    if (searchParams.get('magnet')) {
      setMagnet(searchParams.get('magnet'))
    }
  }, [])

  const handleAddTorrent = async () => {
    try {
      await sendRPCMessage({
        method: 'torrent-add',
        arguments: { filename: magnet },
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Dialog modal defaultOpen={defaultOpen}>
      <Dialog.Trigger asChild>
        <Button icon={PlusCircle} theme="blue">
          Add
        </Button>
      </Dialog.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" space>
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          o={0.5}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          space
        >
          <Dialog.Title>Add a torrent</Dialog.Title>
          <Dialog.Description>
            Add a new torrent by pasting a magnet link, or selecting a .torrent
            file .
          </Dialog.Description>
          <Fieldset horizontal gap="$4">
            <Label w={160} justifyContent="flex-end" htmlFor="name">
              Torrent or magnet link
            </Label>
            <Input
              f={1}
              id="name"
              placeholder="magnet://"
              value={magnet}
              onChange={(e) => setMagnet(e.target.value)}
            />
          </Fieldset>

          <YStack ai="flex-end" mt="$2">
            <Dialog.Close displayWhenAdapted asChild>
              <Button
                theme="blue"
                aria-label="Close"
                disabled={magnet.length === 0}
                onClick={handleAddTorrent}
              >
                Add
              </Button>
            </Dialog.Close>
          </YStack>

          <Unspaced>
            <Dialog.Close asChild>
              <Button
                pos="absolute"
                t="$3"
                r="$3"
                size="$2"
                circular
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
