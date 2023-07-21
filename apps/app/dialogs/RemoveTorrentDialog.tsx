import React from 'react'
import { Trash } from '@tamagui/lucide-icons'
import { Button, Paragraph, YStack } from 'tamagui'
import { Dialog } from './Dialog'
import { useTorrents } from '../hooks/useTorrents'

export const RemoveTorrentDialog = ({ id }) => {
  const { remove } = useTorrents()

  return (
    <Dialog
      trigger={
        <Button icon={Trash} theme="red">
          Remove
        </Button>
      }
      snapPoints={[24]}
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
