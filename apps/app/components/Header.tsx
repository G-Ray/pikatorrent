import React from 'react'
import { H1, H3, useMedia, useThemeName, XStack, YStack } from 'tamagui'
import { AddTorrentDialog } from '../dialogs/AddTorrentDialog'
import { ConnectionStatus } from './ConnectionStatus'
import { Logo } from './Logo'
import { SearchBar } from './SearchBar'

export const Header = () => {
  const media = useMedia()

  return (
    <YStack>
      <XStack
        pt="$4"
        pb="$2"
        px={media.gtXs ? '$8' : '$4'}
        jc="space-between"
        ai="center"
        bc="$background"
        gap="$8"
      >
        <XStack ai="center" gap="$8">
          <XStack ai="center" gap={media.gtXs ? '$8' : '$2'}>
            <XStack>{media.gtXs ? <DesktopTitle /> : <MobileTitle />}</XStack>
          </XStack>
        </XStack>
        <XStack gap="$8" f={1} jc="flex-end">
          <ConnectionStatus />
        </XStack>
      </XStack>
      <XStack px="$4" pt="$2" pb="$4" jc="center">
        <AddTorrentDialog />
        <SearchBar />
      </XStack>
    </YStack>
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
