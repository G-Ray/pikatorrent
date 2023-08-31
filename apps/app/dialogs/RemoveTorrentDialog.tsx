import React from 'react'
import { Trash } from '@tamagui/lucide-icons'
import { Button, Paragraph, YStack } from 'tamagui'
import { Dialog } from './Dialog'

export const RemoveTorrentDialog = ({ id, name, torrentsFunctions }) => {
  return (
    <Dialog
      title="Delete confirmation"
      trigger={
        <Button icon={Trash} theme="red">
          Remove
        </Button>
      }
      snapPoints={[32, 90]}
    >
      <Paragraph>Are your sure to delete {name} ?</Paragraph>
      <YStack space="$4" ai="center" minWidth={300}>
        <Dialog.Close displayWhenAdapted asChild>
          <Button
            onPress={() => torrentsFunctions.remove(id, true)}
            theme="red"
          >
            Delete
          </Button>
        </Dialog.Close>
      </YStack>
    </Dialog>
  )
}
