import { Delete } from '@tamagui/lucide-icons'
import React from 'react'
import { Button, Paragraph, XStack } from 'tamagui'

import { Dialog } from '../components/reusable/Dialog'
import { useI18n } from '../hooks/use18n'

export function ConfirmNodeDeleteAlertDialog({ onConfirm }) {
  const i18n = useI18n()

  return (
    <Dialog
      trigger={
        <Button icon={Delete} theme="red" size="$2">
          Delete
        </Button>
      }
      title={i18n.t('confirmNodeDeleteAlertDialog.title')}
    >
      <Paragraph>
        {i18n.t('confirmNodeDeleteAlertDialog.confirmMessage')}
      </Paragraph>
      <XStack space="$3" justifyContent="flex-end">
        <Dialog.Close asChild>
          <Button>{i18n.t('confirmNodeDeleteAlertDialog.cancel')}</Button>
        </Dialog.Close>
        <Dialog.Close asChild onPress={onConfirm}>
          <Button theme="red">
            {i18n.t('confirmNodeDeleteAlertDialog.delete')}
          </Button>
        </Dialog.Close>
      </XStack>
    </Dialog>
  )
}
