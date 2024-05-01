import React from 'react'
import { Button, Paragraph, YStack } from 'tamagui'

import { Dialog } from '../reusable/Dialog'
import { useI18n } from '../../hooks/use18n'

export function ConfirmNodeDeleteAlertDialog({ onConfirm, onOpenChange }) {
  const i18n = useI18n()

  return (
    <Dialog
      open
      onOpenChange={onOpenChange}
      snapPointsMode="fit"
      title={i18n.t('confirmNodeDeleteAlertDialog.title')}
    >
      <Paragraph>
        {i18n.t('confirmNodeDeleteAlertDialog.confirmMessage')}
      </Paragraph>
      <YStack space="$4" my="$4">
        <Dialog.Close displayWhenAdapted asChild>
          <Button>{i18n.t('confirmNodeDeleteAlertDialog.cancel')}</Button>
        </Dialog.Close>
        <Dialog.Close displayWhenAdapted asChild onPress={onConfirm}>
          <Button theme="red">
            {i18n.t('confirmNodeDeleteAlertDialog.delete')}
          </Button>
        </Dialog.Close>
      </YStack>
    </Dialog>
  )
}
