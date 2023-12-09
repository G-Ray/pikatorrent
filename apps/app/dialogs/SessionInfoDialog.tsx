import React from 'react'
import {
  Button,
  Paragraph,
  ScrollView,
  Stack,
  TextArea,
  useThemeName,
} from 'tamagui'
import { Platform } from 'react-native'

import { Dialog } from '../components/reusable/Dialog'
import i18n from '../i18n'
import { Info } from '@tamagui/lucide-icons'

export const SessionsInfoDialog = ({ session }) => {
  const theme = useThemeName()

  return (
    <Dialog
      title={i18n.t('sessionInfoDialog.title')}
      trigger={
        <Button
          icon={Info}
          bc={theme.startsWith('light') ? 'white' : 'black'}
          theme="yellow"
          hoverTheme
          borderColor={'$yellow7'}
        >
          {i18n.t('sessionInfoDialog.title')}
        </Button>
      }
      snapPoints={[90]}
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
