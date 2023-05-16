import React from 'react'
import {
  H1,
  H2,
  H3,
  H4,
  useMedia,
  useTheme,
  useThemeName,
  XStack,
} from 'tamagui'
import { AddTorrentDialog } from '../dialogs/AddTorrentDialog'
import { ConnectionStatus } from './ConnectionStatus'
import { Logo } from './Logo'

export const Header = () => {
  const media = useMedia()

  return (
    <XStack
      py="$4"
      px={media.gtXs ? '$8' : '$4'}
      jc="space-between"
      ai="center"
      bc="$background"
    >
      <XStack ai="center" gap="$8">
        <XStack ai="center" gap={media.gtXs ? '$8' : '$2'}>
          <XStack>{media.gtXs ? <DesktopTitle /> : <MobileTitle />}</XStack>
          <AddTorrentDialog />
        </XStack>
      </XStack>
      <ConnectionStatus />
    </XStack>
  )
}

const DesktopTitle = () => {
  const theme = useThemeName()

  return (
    <XStack ai="center">
      <Logo width={64} height={64} theme={theme} />
      <H1 color="$yellow9" fontWeight="$6">
        Pika
      </H1>
      <H1 fontWeight="$6">Torrent</H1>
    </XStack>
  )
}

const MobileTitle = () => {
  const theme = useThemeName()

  return (
    <XStack ai="center">
      <Logo width={32} height={32} theme={theme} />
      <H3 color="$yellow9" fontWeight="$6">
        Pika
      </H3>
      <H3 fontWeight="$6">Torrent</H3>
    </XStack>
  )
}
