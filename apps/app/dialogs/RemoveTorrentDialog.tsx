import React, { useState } from 'react'
import { Trash } from '@tamagui/lucide-icons'
import { Button, Paragraph, YStack, useThemeName } from 'tamagui'

import { Dialog } from '../components/reusable/Dialog'
import { useI18n } from '../hooks/use18n'

export const RemoveTorrentDialog = ({
  id,
  name,
  torrentsFunctions,
  isRemovableWithoutData,
}) => {
  const i18n = useI18n()
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
          <YStack space="$4" my="$4">
            {isRemovableWithoutData && (
              <Dialog.Close displayWhenAdapted asChild>
                <Button
                  onPress={() => torrentsFunctions.remove(id, true)}
                  borderColor={'$red7'}
                  bc={theme.startsWith('light') ? 'white' : 'black'}
                >
                  {i18n.t('removeTorrentDialog.remove')}
                </Button>
              </Dialog.Close>
            )}
            {isRemovableWithoutData && (
              <Paragraph textAlign="center" fontWeight={'bold'}>
                OR
              </Paragraph>
            )}
            <Dialog.Close displayWhenAdapted asChild>
              <Button
                onPress={() => torrentsFunctions.remove(id, true)}
                theme="red"
              >
                {i18n.t('removeTorrentDialog.removeWithData')}
              </Button>
            </Dialog.Close>
          </YStack>
        </Dialog>
      )}
    </>
  )
}
