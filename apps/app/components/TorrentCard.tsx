import React from 'react'
import {
  ArrowBigUp,
  FolderOpen,
  Menu,
  PauseCircle,
  PlayCircle,
} from '@tamagui/lucide-icons'
import {
  Button,
  Card,
  H4,
  H6,
  Paragraph,
  Progress,
  ScrollView,
  Theme,
  XStack,
  YStack,
  useMedia,
  useThemeName,
} from 'tamagui'
import { RemoveTorrentDialog } from '../dialogs/RemoveTorrentDialog'
import { FilesListDialog } from '../dialogs/FilesListDialog'
import { TorrentFieldFormatter } from './TorrentFieldFormatter'
import { useTorrents } from '../hooks/useTorrents'
import { TORRENT_STATUSES } from '../constants/torrents'
import isElectron from 'is-electron'
import { Dialog } from '../dialogs/Dialog'
import { TorrentsProvider } from '../contexts/TorrentsContext'
import { NodeProvider } from '../contexts/NodeContext'
import { SettingsProvider } from '../contexts/SettingsContext'
import { Label } from './Label'
import { EditLabelsDialog } from '../dialogs/EditLabelsDialog'

export const TorrentCard = ({ torrent }) => {
  const media = useMedia()
  const theme = useThemeName()

  const { start, pause } = useTorrents()

  const handleOpenFolder = () => {
    if (isElectron()) {
      const path = torrent.downloadDir + '/' + torrent.name
      window.electronAPI.openFolder(path)
    }
  }

  return (
    <Card
      key={torrent.id}
      size="$4"
      p="$2"
      pt="$1"
      elevation={media.gtXs ? '$4' : '$0.5'}
      mb={media.gtXs ? '$4' : '$2'}
      bc={theme === 'light' ? 'white' : 'black'}
    >
      <XStack ai="center">
        <XStack mr="$2">
          {TORRENT_STATUSES[torrent.status] === TORRENT_STATUSES[0] ? (
            <Button
              onPress={() => start(torrent.id)}
              bc={theme === 'light' ? 'white' : 'black'}
              icon={PlayCircle}
              circular
              scaleIcon={2}
            />
          ) : (
            <Button
              onPress={() => pause(torrent.id)}
              bc={theme === 'light' ? 'white' : 'black'}
              icon={PauseCircle}
              circular
              scaleIcon={2}
            />
          )}
        </XStack>
        <YStack f={1} alignSelf="flex-start">
          <XStack>
            <XStack alignSelf="center" f={1}>
              <H6 numberOfLines={1}>{torrent.name}</H6>
            </XStack>
            <TorrentActions
              theme={theme}
              torrent={torrent}
              handleOpenFolder={handleOpenFolder}
            />
          </XStack>
          <Progress
            mb="$2"
            value={Math.round(torrent.percentDone * 100)}
            theme="yellow"
            bordered
            size="$2"
          >
            <Progress.Indicator animation="lazy" bc={'$yellow9'} />
          </Progress>
          <XStack jc="space-between">
            <TorrentInfo torrent={torrent} />
            <ScrollView
              ml="$2"
              horizontal
              contentContainerStyle={{
                flexGrow: 1,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}
            >
              <XStack gap={media.gtXs ? '$2' : '$1'}>
                {torrent.labels.map((label, index) => (
                  <Label key={index} name={label} color={'$gray12'}></Label>
                ))}
              </XStack>
            </ScrollView>
          </XStack>
        </YStack>
      </XStack>
    </Card>
  )
}

const TorrentActions = ({ theme = 'light', torrent, handleOpenFolder }) => {
  return (
    <Theme name={theme}>
      <XStack ml="auto">
        <Dialog
          trigger={
            <Button
              circular
              icon={Menu}
              bc={theme === 'light' ? 'white' : 'black'}
            ></Button>
          }
          snapPoints={[32]}
        >
          <YStack gap="$4" pt="$8">
            {isElectron() && torrent.percentDone === 1 && (
              <Button icon={FolderOpen} onPress={handleOpenFolder}>
                Open Folder
              </Button>
            )}
            <FilesListDialog torrent={torrent} />
            {/* NOTE: we need to redeclare providers for the nested dialog */}
            <SettingsProvider>
              <NodeProvider>
                <TorrentsProvider>
                  <EditLabelsDialog torrent={torrent} />
                  <RemoveTorrentDialog id={torrent.id} name={torrent.name} />
                </TorrentsProvider>
              </NodeProvider>
            </SettingsProvider>
          </YStack>
        </Dialog>
      </XStack>
    </Theme>
  )
}

const TorrentInfo = ({ torrent }) => {
  return (
    <YStack>
      <XStack columnGap="$2">
        <TorrentFieldFormatter name="percentDone" value={torrent.percentDone} />
        <Paragraph>•</Paragraph>
        <TorrentFieldFormatter name="totalSize" value={torrent.totalSize} />
      </XStack>
      <XStack columnGap="$2">
        <TorrentFieldFormatter name="status" value={torrent.status} />
        <Paragraph>•</Paragraph>
        <XStack gap="$2">
          <TorrentFieldFormatter
            name="rateDownload"
            value={torrent.rateDownload}
          />
          <TorrentFieldFormatter name="rateUpload" value={torrent.rateUpload} />
        </XStack>
      </XStack>
    </YStack>
  )
}

export const TorrentCardPlaceHolder = () => {
  return (
    <Card
      w="100%"
      size="$4"
      bordered
      br="$6"
      height={160}
      borderStyle="dashed"
      borderWidth="$1"
    >
      <Card.Header w="100%">
        <YStack ai="center" jc="center">
          <ArrowBigUp size={'$4'} />
          <H4 numberOfLines={1} fontWeight="bold">
            Add your first torrent
          </H4>
          <Paragraph>Your torrents will be displayed here</Paragraph>
        </YStack>
      </Card.Header>
    </Card>
  )
}
