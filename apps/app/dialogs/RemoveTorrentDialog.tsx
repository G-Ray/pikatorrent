import React from 'react'
import { Trash, X } from '@tamagui/lucide-icons'
import { useContext } from 'react'
import { Adapt, Button, Dialog, Sheet, Unspaced, XStack } from 'tamagui'
import { NodeContext } from '../contexts/node'

export const RemoveTorrentDialog = ({ id }) => {
  const { sendRPCMessage } = useContext(NodeContext)

  const handleRemoveTorrent = async (deleteLocalData: boolean = false) => {
    try {
      await sendRPCMessage({
        method: 'torrent-remove',
        arguments: { ids: [id], 'delete-local-data': deleteLocalData },
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <Button icon={Trash} theme="red">
          Remove
        </Button>
      </Dialog.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom snapPoints={[20]}>
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
          <Dialog.Title>Remove a torrent</Dialog.Title>

          <XStack space="$4">
            <Dialog.Close displayWhenAdapted asChild>
              <Button onClick={() => handleRemoveTorrent(false)} theme="yellow">
                Remove torrent only
              </Button>
            </Dialog.Close>
            <Dialog.Close displayWhenAdapted asChild>
              <Button onClick={() => handleRemoveTorrent(true)} theme="red">
                Remove torrent and data
              </Button>
            </Dialog.Close>
          </XStack>

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
