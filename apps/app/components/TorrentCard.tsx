import React from 'react'
import {
  ArrowBigDown,
  ArrowBigUp,
  FolderOpen,
  Menu,
  PauseCircle,
  PlayCircle,
  Share2,
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
import { Label } from './Label'
import { EditLabelsDialog } from '../dialogs/EditLabelsDialog'
import { APP_URL } from '../config'
import { Platform, Share } from 'react-native'
import { useToastController } from '@tamagui/toast'
import i18n from '../i18n'

export const TorrentCard = ({ torrent }) => {
  const media = useMedia()
  const theme = useThemeName()

  const { start, pause } = useTorrents()

  const handleOpenFolder = () => {
    if (isElectron()) {
      window.electronAPI.openFolder(torrent.downloadDir, torrent.name)
    }
  }

  return (
    <Card
      key={torrent.id}
      size="$4"
      p="$2"
      pt="$0"
      elevation={media.gtXs ? '$1' : '$0.5'}
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
            value={Math.floor(torrent.percentDone * 100)}
            theme="yellow"
            borderColor={'$yellow9'}
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
  /* Bug: we can't access contexts inside nested dialogs, see https://github.com/tamagui/tamagui/issues/1481 */
  const torrentsFunctions = useTorrents()
  const toast = useToastController()

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
          snapPointsMode="fit"
        >
          <YStack gap="$4" pt="$8" pb="$2">
            <ShareButtons torrent={torrent} toast={toast} />
            {isElectron() && torrent.percentDone === 1 && (
              <Button icon={FolderOpen} onPress={handleOpenFolder}>
                {i18n.t('torrentDialog.openFolder')}
              </Button>
            )}
            <FilesListDialog torrent={torrent} toast={toast} />
            <EditLabelsDialog
              torrent={torrent}
              torrentsFunctions={torrentsFunctions}
            />
            <RemoveTorrentDialog
              id={torrent.id}
              name={torrent.name}
              torrentsFunctions={torrentsFunctions}
            />
          </YStack>
        </Dialog>
      </XStack>
    </Theme>
  )
}

const ShareButtons = ({ toast, torrent }) => {
  if (Platform.OS === 'web') {
    return (
      <Button
        icon={Share2}
        onPress={async () => {
          const shareLink = APP_URL + '/add#' + torrent.magnetLink
          try {
            navigator.clipboard.writeText(shareLink)
            toast.show(i18n.t('toasts.linkCopied'))
          } catch (e) {}
        }}
      >
        {i18n.t('torrentDialog.copyLink')}
      </Button>
    )
  }

  // Native
  return (
    <Button
      icon={Share2}
      onPress={async () => {
        const shareLink = APP_URL + '/add#' + torrent.magnetLink
        Share.share({
          url: shareLink,
          message: shareLink,
          title: torrent.name,
        })
      }}
    >
      {i18n.t('torrentDialog.share')}
    </Button>
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
  const media = useMedia()

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
          {media.gtXs ? (
            <ArrowBigUp size={'$4'} />
          ) : (
            <ArrowBigDown size={'$4'} />
          )}
          <H4 numberOfLines={1} fontWeight="bold">
            {i18n.t('torrents.addYourFirstTorrentTitle')}
          </H4>
          <Paragraph>
            {i18n.t('torrents.addYourFirstTorrentDescription')}
          </Paragraph>
        </YStack>
      </Card.Header>
    </Card>
  )
}
