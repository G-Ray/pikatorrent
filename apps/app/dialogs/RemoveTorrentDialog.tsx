import React from 'react'
import { Trash } from '@tamagui/lucide-icons'
import { Button, Paragraph, YStack } from 'tamagui'
import { Dialog } from './Dialog'
import i18n from '../i18n'

export const RemoveTorrentDialog = ({ id, name, torrentsFunctions }) => {
  return (
    <Dialog
      title={i18n.t('removeTorrentDialog.title')}
      trigger={
        <Button icon={Trash} theme="red">
          {i18n.t('torrentDialog.remove')}
        </Button>
      }
      snapPoints={[32, 90]}
    >
      <Paragraph>
        {i18n.t('removeTorrentDialog.warningMessage')} {name} ?
      </Paragraph>
      <YStack space="$4" ai="center" minWidth={300}>
        <Dialog.Close displayWhenAdapted asChild>
          <Button
            onPress={() => torrentsFunctions.remove(id, true)}
            theme="red"
          >
            {i18n.t('removeTorrentDialog.remove')}
          </Button>
        </Dialog.Close>
      </YStack>
    </Dialog>
  )
}
