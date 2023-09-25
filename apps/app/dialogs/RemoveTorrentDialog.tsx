import React, { useState } from 'react'
import { Trash } from '@tamagui/lucide-icons'
import { Button, Paragraph, YStack, useThemeName } from 'tamagui'
import { Dialog } from '../components/reusable/Dialog'
import i18n from '../i18n'

export const RemoveTorrentDialog = ({ id, name, torrentsFunctions }) => {
  const theme = useThemeName()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        icon={Trash}
        theme="red"
        bc={theme.startsWith('light') ? 'white' : 'black'}
        hoverTheme
        borderColor={'$red7'}
        color="$red9"
        onPress={() => setIsOpen(true)}
      >
        {i18n.t('torrentDialog.remove')}
      </Button>
      {isOpen && (
        <Dialog
          title={i18n.t('removeTorrentDialog.title')}
          snapPointsMode="fit"
          onOpenChange={setIsOpen}
          open
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
      )}
    </>
  )
}
