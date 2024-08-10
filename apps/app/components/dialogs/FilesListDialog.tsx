import React, { useContext, useState } from 'react'
import {
  Check,
  ExternalLink,
  FolderOpen,
  List,
  Share2,
} from '@tamagui/lucide-icons'
import * as IntentLauncher from 'expo-intent-launcher'
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'
import {
  Button,
  Card,
  Checkbox,
  ListItem,
  Paragraph,
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
import { useTorrents } from '../../hooks/useTorrents'
import { NodeContext } from '../../contexts/NodeContext'

const buildFilePath = (torrent, file) => {
  return `${torrent.downloadDir}/${file.name}`
}

const handleOpenFile = async (torrent, file) => {
  if (Platform.OS === 'android') {
    try {
      const contentUri = await FileSystem.getContentUriAsync(
        'file://' + buildFilePath(torrent, file),
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

  return (
    <>
      <Dialog
        title={i18n.t('filesListDialog.title')}
        snapPoints={[90]}
        trigger={<Button icon={List}>{i18n.t('torrentDialog.files')}</Button>}
      >
        <ScrollView>
          <YGroup>
            {torrent.files.map((file, index) => (
              <FileRow
                key={file.name}
                index={index}
                torrent={torrent}
                file={file}
                toast={toast}
              />
            ))}
          </YGroup>
        </ScrollView>
      </Dialog>
    </>
  )
}

const FileRow = ({ torrent, file, index, toast }) => {
  const i18n = useI18n()
  const { wanted } = torrent.fileStats[index]
  const { refresh } = useTorrents()
  const { sendRPCMessage } = useContext(NodeContext)

  const handleWantedChange = async (isChecked: boolean) => {
    console.log('handleWantedChange', isChecked, index)
    await sendRPCMessage({
      method: 'torrent-set',
      arguments: {
        ids: torrent.id,
        ...(isChecked
          ? { ['files-wanted']: [index] }
          : { ['files-unwanted']: [index] }),
      },
    })
    refresh()
  }

  return (
    <ListItem
      key={file.name}
      hoverTheme
      transparent
      mx={0}
      px={0}
      borderBottomWidth={1}
    >
      <Card f={1} p="$2" transparent>
        <XStack f={1} jc="center" ai="center" gap="$4">
          <Checkbox
            size="$5"
            id={`${file.name}-checkbox`}
            checked={wanted}
            onCheckedChange={handleWantedChange}
          >
            <Checkbox.Indicator>
              <Check />
            </Checkbox.Indicator>
          </Checkbox>
          <YStack f={1}>
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
            <XStack gap="$4" ai="center">
              {file.bytesCompleted / file.length === 1 && (
                <>
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
                            'file://' + buildFilePath(torrent, file),
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
                        window.electronAPI.openFolder(
                          torrent.downloadDir,
                          file.name,
                        )
                      }}
                    >
                      {i18n.t('filesListDialog.openFolder')}
                    </Button>
                  )}
                </>
              )}
            </XStack>
          </YStack>
        </XStack>
      </Card>
    </ListItem>
  )
}
