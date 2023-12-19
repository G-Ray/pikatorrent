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
  useThemeName,
} from 'tamagui'
import { Platform } from 'react-native'
import isElectron from 'is-electron'

import { Dialog } from '../components/reusable/Dialog'
import { TorrentFieldFormatter } from '../components/TorrentFieldFormatter'
import { useI18n } from '../hooks/use18n'

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
  const theme = useThemeName()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        icon={List}
        variant="outlined"
        theme="yellow"
        hoverTheme
        borderColor={'$yellow7'}
        onPress={() => setIsOpen(true)}
      >
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
            <YGroup bordered size="$2">
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
  const theme = useThemeName()

  return (
    <ListItem key={file.name} hoverTheme>
      <YStack gap="$1" f={1}>
        <Paragraph f={1} flexWrap="wrap">
          {file.name}
        </Paragraph>
        {/* <Paragraph color="$gray11">{prettyBytes(file.length)}</Paragraph> */}
        <XStack columnGap="$2">
          <TorrentFieldFormatter
            name="percentDone"
            value={file.bytesCompleted / file.length}
          />
          <Paragraph>•</Paragraph>
          <TorrentFieldFormatter name="totalSize" value={file.length} />
        </XStack>
        <XStack mb="$2">
          <Progress
            value={Math.floor((file.bytesCompleted / file.length) * 100)}
            theme="yellow"
            borderColor={'$yellow7'}
            bordered
            size="$2"
            w="100%"
          >
            <Progress.Indicator animation="lazy" bc={'$yellow9'} w={'100%'} />
          </Progress>
        </XStack>
        {file.bytesCompleted / file.length === 1 && (
          <XStack gap="$4">
            <Button
              variant="outlined"
              theme="yellow"
              hoverTheme
              borderColor={'$yellow7'}
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
                variant="outlined"
                theme="yellow"
                hoverTheme
                borderColor={'$yellow7'}
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
                variant="outlined"
                theme="yellow"
                hoverTheme
                borderColor={'$yellow7'}
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
