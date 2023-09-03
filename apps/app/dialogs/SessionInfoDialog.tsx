import React from 'react'
import { Button, TextArea } from 'tamagui'
import { Dialog } from './Dialog'
import i18n from '../i18n'

export const SessionsInfoDialog = ({ session }) => {
  return (
    <Dialog
      title="Session info"
      trigger={<Button>{i18n.t('sessionInfoDialog.title')}</Button>}
      snapPoints={[90]}
    >
      <TextArea
        w={500}
        h={500}
        value={JSON.stringify(session, null, 2)}
        disabled
      />
    </Dialog>
  )
}
