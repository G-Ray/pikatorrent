import { Delete } from '@tamagui/lucide-icons'
import React from 'react'
import { Button, Paragraph, XStack } from 'tamagui'
import { Dialog } from './Dialog'

// TODO: i18n
export function ConfirmNodeDeleteAlertDialog({ onConfirm }) {
  return (
    <Dialog
      trigger={
        <Button icon={Delete} theme="red" size="$2">
          Delete
        </Button>
      }
      title="Confirm node removal"
    >
      <Paragraph>Are you sure you want to delete this node ?</Paragraph>
      <XStack space="$3" justifyContent="flex-end">
        <Dialog.Close asChild>
          <Button>Cancel</Button>
        </Dialog.Close>
        <Dialog.Close asChild onPress={onConfirm}>
          <Button theme="red">Delete</Button>
        </Dialog.Close>
      </XStack>
    </Dialog>
  )
}
