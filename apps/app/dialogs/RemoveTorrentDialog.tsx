import React from 'react'
import { Trash } from '@tamagui/lucide-icons'
import { Button, Paragraph, XStack } from 'tamagui'
import { Dialog } from './Dialog'
import { useTorrents } from '../hooks/useTorrents'

export const RemoveTorrentDialog = ({ id }) => {
  const { remove } = useTorrents()

  return (
    <Dialog
      title="Remove a torrent"
      trigger={
        <Button icon={Trash} theme="red" br={50}>
          Remove
        </Button>
      }
    >
      <XStack space="$4" ai="center">
        <Dialog.Close displayWhenAdapted asChild>
          <Button onPress={() => remove(id, false)} theme="yellow">
            Remove torrent only
          </Button>
        </Dialog.Close>
        <Paragraph>or</Paragraph>
        <Dialog.Close displayWhenAdapted asChild>
          <Button onPress={() => remove(id, true)} theme="red">
            Remove torrent and data
          </Button>
        </Dialog.Close>
      </XStack>
    </Dialog>
  )
}
