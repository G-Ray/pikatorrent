import React from 'react'
import { Button, Paragraph, ScrollView, Stack, TextArea } from 'tamagui'
import { Platform } from 'react-native'

import { Dialog } from '../reusable/Dialog'
import { Info } from '@tamagui/lucide-icons'
import { useI18n } from '../../hooks/use18n'

export const SessionsInfoDialog = ({ session }) => {
  const i18n = useI18n()

  return (
    <Dialog
      title={i18n.t('sessionInfoDialog.title')}
      trigger={<Button icon={Info}>{i18n.t('sessionInfoDialog.title')}</Button>}
      snapPoints={[80]}
    >
      <ScrollView>
        {Platform.OS === 'web' ? (
          <Stack minWidth={'40vw'} minHeight={'50vh'}>
            <TextArea
              w="100%"
              h="100%"
              value={JSON.stringify(session, null, 2)}
            />
          </Stack>
        ) : (
          <Paragraph>{JSON.stringify(session, null, 2)}</Paragraph>
        )}
      </ScrollView>
    </Dialog>
  )
}
