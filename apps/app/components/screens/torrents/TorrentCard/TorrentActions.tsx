import React from 'react'
import { FolderOpen } from '@tamagui/lucide-icons'
import { Button, YStack, useMedia } from 'tamagui'
import isElectron from 'is-electron'
import { Platform } from 'react-native'
import { useToastController } from '@tamagui/toast'
import { useI18n } from '../../../../hooks/use18n'
import { EditLabelsDialog } from '../../../dialogs/EditLabelsDialog'
import { RemoveTorrentDialog } from '../../../dialogs/RemoveTorrentDialog'
import { FilesListDialog } from '../../../dialogs/FilesListDialog'
import { Dialog } from '../../../reusable/Dialog'
import { useTorrents } from '../../../../hooks/useTorrents'
import { PRIVATE_DOWNLOAD_DIR } from '../../../../lib/transmission'
import { ShareButtons } from './ShareButtons'
import { DetailsDialog } from '../../../dialogs/DetailsDialog'

export const TorrentActions = ({
  torrent,
  handleOpenFolder,
  open,
  onOpenChange,
}) => {
  /* Bug: we can't access contexts inside nested dialogs, see https://github.com/tamagui/tamagui/issues/1481 */
  const torrentsFunctions = useTorrents()
  const toast = useToastController()
  const i18n = useI18n()

  if (!open) {
    return null
  }

  const isRemovableWithoutData =
    Platform.OS === 'web' ||
    !torrent.downloadDir.startsWith(PRIVATE_DOWNLOAD_DIR)

  return (
    <Dialog snapPointsMode="fit" open={open} onOpenChange={onOpenChange}>
      <YStack gap="$4" py="$4" pt={'$8'}>
        <ShareButtons torrent={torrent} toast={toast} />
        {isElectron() && torrent.percentDone === 1 && (
          <Button icon={FolderOpen} onPress={handleOpenFolder}>
            {i18n.t('torrentDialog.openFolder')}
          </Button>
        )}
        {(isElectron() || Platform.OS !== 'web') && (
          <FilesListDialog torrent={torrent} toast={toast} />
        )}
        <EditLabelsDialog
          torrent={torrent}
          torrentsFunctions={torrentsFunctions}
        />
        <DetailsDialog torrent={torrent} />
        <RemoveTorrentDialog
          id={torrent.id}
          name={torrent.name}
          torrentsFunctions={torrentsFunctions}
          isRemovableWithoutData={isRemovableWithoutData}
        />
      </YStack>
    </Dialog>
  )
}
