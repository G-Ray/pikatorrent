import React from 'react'
import { Trash } from '@tamagui/lucide-icons'
import { Button, Paragraph, XStack, YStack } from 'tamagui'
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
      snapPoints={[36]}
    >
      <YStack space="$4" ai="center" minWidth={300}>
        <Dialog.Close displayWhenAdapted asChild>
          <Button onPress={() => remove(id, false)} theme="yellow">
            Remove torrent only
          </Button>
        </Dialog.Close>
        <Paragraph mx="auto" fontWeight={'bold'}>
          Or
        </Paragraph>
        <Dialog.Close displayWhenAdapted asChild>
          <Button onPress={() => remove(id, true)} theme="red">
            Remove torrent and data
          </Button>
        </Dialog.Close>
      </YStack>
    </Dialog>
  )
}
