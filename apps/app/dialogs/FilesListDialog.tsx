import React from 'react'
import { ExternalLink, List } from '@tamagui/lucide-icons'
import * as IntentLauncher from 'expo-intent-launcher'
import * as FileSystem from 'expo-file-system'

import {
  Button,
  ListItem,
  Paragraph,
  ScrollView,
  XStack,
  YGroup,
  YStack,
} from 'tamagui'
import { Dialog } from './Dialog'
import { Platform } from 'react-native'
import prettyBytes from 'pretty-bytes'
import isElectron from 'is-electron'
import { useToastController } from '@tamagui/toast'
import i18n from '../i18n'

const buildFilePath = (torrent, file) => {
  return `${torrent.downloadDir}/${file.name}`
}

const handleOpenFile = async (torrent, file) => {
  if (Platform.OS === 'android') {
    const contentUri = await FileSystem.getContentUriAsync(
      'file://' + buildFilePath(torrent, file)
    )

    await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
      data: contentUri,
      flags: 1,
    })
  }

  if (isElectron()) {
    await window.electronAPI.openFile(torrent.downloadDir, file.name)
  }
}

export const FilesListDialog = ({ torrent, toast }) => {
  const isTorrentFinished = torrent.percentDone === 1

  return (
    <Dialog
      title={i18n.t('filesListDialog.title')}
      trigger={<Button icon={List}>{i18n.t('torrentDialog.files')}</Button>}
      snapPoints={[50]}
    >
      <ScrollView horizontal>
        <YGroup bordered size="$2" f={1}>
          <ScrollView>
            {torrent.files.map((file) => (
              <FileRow
                key={file.name}
                torrent={torrent}
                isTorrentFinished={isTorrentFinished}
                file={file}
                toast={toast}
              />
            ))}
          </ScrollView>
        </YGroup>
      </ScrollView>
    </Dialog>
  )
}

const FileRow = ({ isTorrentFinished, torrent, file, toast }) => {
  return (
    <ListItem key={file.name} hoverTheme>
      <XStack ai="center" jc="space-between" gap="$4" f={1}>
        <YStack>
          <Paragraph>{file.name}</Paragraph>
          <Paragraph color="$gray11">{prettyBytes(file.length)}</Paragraph>
        </YStack>

        {isTorrentFinished && (
          <XStack>
            <Button
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
          </XStack>
        )}
      </XStack>
    </ListItem>
  )
}
