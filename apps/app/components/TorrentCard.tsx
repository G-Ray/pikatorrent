import React, { useState } from 'react'
import {
  ArrowBigDown,
  ArrowBigUp,
  FolderOpen,
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
  Stack,
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
import { Dialog } from './reusable/Dialog'
import { Label } from './reusable/Label'
import { EditLabelsDialog } from '../dialogs/EditLabelsDialog'
import { APP_URL } from '../config'
import { Platform, Share } from 'react-native'
import { useToastController } from '@tamagui/toast'
import i18n from '../i18n'
import { PRIVATE_DOWNLOAD_DIR } from '../lib/transmission'

export const TorrentCard = ({ torrent }) => {
  const media = useMedia()
  const theme = useThemeName()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { start, pause } = useTorrents()

  const handleOpenFolder = () => {
    if (isElectron()) {
      window.electronAPI.openFolder(torrent.downloadDir, torrent.name)
    }
  }

  return (
    <>
      <Card
        key={torrent.id}
        size="$4"
        pr="$2"
        py="$2"
        bc={theme === 'light' ? 'white' : 'black'}
      >
        <XStack ai="center">
          <XStack>
            {TORRENT_STATUSES[torrent.status] === TORRENT_STATUSES[0] ? (
              <Button
                onPress={() => start(torrent.id)}
                bc={theme === 'light' ? 'white' : 'black'}
                icon={PlayCircle}
                size="$5"
                circular
                scaleIcon={2}
              />
            ) : (
              <Button
                onPress={() => pause(torrent.id)}
                bc={theme === 'light' ? 'white' : 'black'}
                icon={PauseCircle}
                size="$5"
                circular
                scaleIcon={2}
              />
            )}
          </XStack>
          <Stack
            f={1}
            p="$2"
            br="$2"
            hoverStyle={{ bc: '$gray4', cursor: 'pointer' }}
            pressStyle={{ bc: '$gray4' }}
            onPress={() => {
              setIsMenuOpen(true)
            }}
          >
            <TorrentActions
              theme={theme}
              torrent={torrent}
              handleOpenFolder={handleOpenFolder}
              open={isMenuOpen}
              onOpenChange={setIsMenuOpen}
            />
            <XStack>
              <H6 numberOfLines={1}>{torrent.name}</H6>
            </XStack>
            <Progress
              mb="$2"
              value={Math.floor(torrent.percentDone * 100)}
              theme="yellow"
              borderColor={'$yellow7'}
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
          </Stack>
        </XStack>
      </Card>
      {/* <Separator /> */}
    </>
  )
}

const TorrentActions = ({ torrent, handleOpenFolder, open, onOpenChange }) => {
  /* Bug: we can't access contexts inside nested dialogs, see https://github.com/tamagui/tamagui/issues/1481 */
  const torrentsFunctions = useTorrents()
  const toast = useToastController()
  const media = useMedia()
  const theme = useThemeName()

  if (!open) {
    return null
  }

  const isRemovableWithoutData =
    Platform.OS === 'web' ||
    !torrent.downloadDir.startsWith(PRIVATE_DOWNLOAD_DIR)

  return (
    <Dialog
      // trigger={
      //   <Button
      //     circular
      //     icon={Menu}
      //     bc={theme === 'light' ? 'white' : 'black'}
      //   ></Button>
      // }
      // Fit has a glitch when a nested sheets is rendered
      snapPointsMode="fit"
      // snapPoints={[70]}
      open={open}
      onOpenChange={onOpenChange}
    >
      <YStack gap="$4" py="$4" pt={media.gtXs ? '$8' : '$4'}>
        <ShareButtons torrent={torrent} toast={toast} />
        {isElectron() && torrent.percentDone === 1 && (
          <Button
            icon={FolderOpen}
            onPress={handleOpenFolder}
            bc={theme.startsWith('light') ? 'white' : 'black'}
            theme="yellow"
            hoverTheme
            borderColor={'$yellow7'}
          >
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

const ShareButtons = ({ toast, torrent }) => {
  const theme = useThemeName()

  if (Platform.OS === 'web') {
    return (
      <Button
        bc={theme.startsWith('light') ? 'white' : 'black'}
        theme="yellow"
        hoverTheme
        borderColor={'$yellow7'}
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
      bc={theme.startsWith('light') ? 'white' : 'black'}
      theme="yellow"
      hoverTheme
      borderColor={'$yellow7'}
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
        <Paragraph>•</Paragraph>
        <Paragraph
          fontSize={'$2'}
        >{`${torrent.peersConnected} peers`}</Paragraph>
        {torrent.eta >= 0 && (
          <>
            <Paragraph>•</Paragraph>
            <TorrentFieldFormatter name="eta" value={torrent.eta} />
          </>
        )}
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
      {torrent.errorString.length > 0 && (
        <TorrentFieldFormatter
          name="errorString"
          value={torrent.errorString}
          f={1}
          flexShrink={1}
        />
      )}
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
