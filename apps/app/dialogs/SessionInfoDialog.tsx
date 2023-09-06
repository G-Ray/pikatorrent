import React from 'react'
import { Button, Paragraph, ScrollView, TextArea } from 'tamagui'
import { Dialog } from './Dialog'
import i18n from '../i18n'

export const SessionsInfoDialog = ({ session }) => {
  return (
    <Dialog
      title="Session info"
      trigger={<Button>{i18n.t('sessionInfoDialog.title')}</Button>}
      snapPoints={[90]}
    >
      <ScrollView>
        <Paragraph>{JSON.stringify(session, null, 2)}</Paragraph>
      </ScrollView>
    </Dialog>
  )
}
