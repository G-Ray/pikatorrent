import React from 'react'
import { H1, H2, useMedia, useTheme, useThemeName, XStack } from 'tamagui'
import { AddTorrentDialog } from '../dialogs/AddTorrentDialog'
import { ConnectionStatus } from './ConnectionStatus'
import { Logo } from './Logo'

export const Header = () => {
  const media = useMedia()

  return (
    <XStack
      py="$4"
      px={media.gtMd ? '$8' : '$4'}
      jc="space-between"
      ai="center"
      bc="$background"
    >
      <XStack ai="center" gap="$8">
        <XStack ai="center" gap="$8">
          <XStack>{media.gtMd ? <DesktopTitle /> : <MobileTitle />}</XStack>
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
      <H2 color="$yellow9" fontWeight="$6">
        Pika
      </H2>
      <H2 fontWeight="$6">Torrent</H2>
    </XStack>
  )
}
