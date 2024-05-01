import React from 'react'
import { Button, Paragraph, XStack } from 'tamagui'
import { Dialog } from '../reusable/Dialog'

import { useI18n } from '../../hooks/use18n'

export const AcceptOrRejectPeerDialog = ({ name, onResponse }) => {
  const i18n = useI18n()

  return (
    <Dialog
      open
      title={i18n.t('acceptOrRejectPeerDialog.title')}
      dismissOnOverlayPress={false}
      dismissOnSnapToBottom={false}
    >
      <Paragraph>{i18n.t('acceptOrRejectPeerDialog.description')}</Paragraph>
      <Paragraph fontWeight={'bold'} margin="auto">
        {name}
      </Paragraph>
      <Paragraph>
        {i18n.t('acceptOrRejectPeerDialog.warningIfNotRecognize')}
      </Paragraph>

      <XStack marginLeft="auto" gap="$4">
        <Button theme="red" onPress={() => onResponse(false)}>
          {i18n.t('acceptOrRejectPeerDialog.reject')}
        </Button>
        <Button theme="green" onPress={() => onResponse(true)}>
          {i18n.t('acceptOrRejectPeerDialog.accept')}
        </Button>
      </XStack>
    </Dialog>
  )
}
