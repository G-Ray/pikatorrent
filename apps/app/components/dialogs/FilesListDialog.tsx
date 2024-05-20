import React, { useState } from 'react'
import { ExternalLink, FolderOpen, List, Share2 } from '@tamagui/lucide-icons'
import * as IntentLauncher from 'expo-intent-launcher'
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'
import {
  Button,
  ListItem,
  Paragraph,
  Progress,
  ScrollView,
  XStack,
  YGroup,
  YStack,
} from 'tamagui'
import { Platform } from 'react-native'
import isElectron from 'is-electron'

import { Dialog } from '../reusable/Dialog'
import { useI18n } from '../../hooks/use18n'
import { TorrentFieldFormatter } from '../screens/torrents/TorrentFieldFormatter'

const buildFilePath = (torrent, file) => {
  return `${torrent.downloadDir}/${file.name}`
}

const handleOpenFile = async (torrent, file) => {
  if (Platform.OS === 'android') {
    try {
      const contentUri = await FileSystem.getContentUriAsync(
        'file://' + buildFilePath(torrent, file)
      )

      await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
        data: contentUri,
        flags: 1,
      })
    } catch (e) {
      console.error(e)
    }
  }

  if (isElectron()) {
    await window.electronAPI.openFile(torrent.downloadDir, file.name)
  }
}

export const FilesListDialog = ({ torrent, toast }) => {
  const i18n = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button icon={List} onPress={() => setIsOpen(true)}>
        {i18n.t('torrentDialog.files')}
      </Button>
      {isOpen && (
        <Dialog
          title={i18n.t('filesListDialog.title')}
          snapPoints={[90]}
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <ScrollView>
            <YGroup>
              {torrent.files.map((file) => (
                <FileRow
                  key={file.name}
                  torrent={torrent}
                  file={file}
                  toast={toast}
                />
              ))}
            </YGroup>
          </ScrollView>
        </Dialog>
      )}
    </>
  )
}

const FileRow = ({ torrent, file, toast }) => {
  const i18n = useI18n()

  return (
    <ListItem
      key={file.name}
      hoverTheme
      transparent
      bordered
      borderLeftWidth={0}
      borderRightWidth={0}
    >
      <YStack gap="$1" f={1}>
        <Paragraph f={1} flexWrap="wrap">
          {file.name}
        </Paragraph>
        <XStack columnGap="$2">
          <TorrentFieldFormatter
            name="percentDone"
            value={Math.floor(file.bytesCompleted / file.length)}
          />
          <Paragraph>•</Paragraph>
          <TorrentFieldFormatter name="totalSize" value={file.length} />
        </XStack>
        {file.bytesCompleted / file.length === 1 && (
          <XStack gap="$4">
            <Button
              f={1}
              size="$3"
              icon={ExternalLink}
              onPress={async () => {
                try {
                  await handleOpenFile(torrent, file)
                } catch (e) {
                  console.error(e)
                  toast.show(i18n.t('toasts.noAppCanOpenFile'), {
                    native: true,
                  })
                }
              }}
            >
              {i18n.t('filesListDialog.open')}
            </Button>
            {Platform.OS !== 'web' && (
              <Button
                f={1}
                size="$3"
                icon={Share2}
                onPress={async () => {
                  try {
                    await Sharing.shareAsync(
                      'file://' + buildFilePath(torrent, file)
                    )
                  } catch (e) {
                    console.error(e)
                    toast.show(i18n.t('toasts.cannotShareFile'), {
                      native: true,
                    })
                  }
                }}
              >
                {i18n.t('filesListDialog.share')}
              </Button>
            )}
            {isElectron() && (
              <Button
                f={1}
                size="$3"
                icon={FolderOpen}
                onPress={async () => {
                  window.electronAPI.openFolder(torrent.downloadDir, file.name)
                }}
              >
                {i18n.t('filesListDialog.openFolder')}
              </Button>
            )}
          </XStack>
        )}
      </YStack>
    </ListItem>
  )
}
