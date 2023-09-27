import React from 'react'
import { H1, H3, useMedia, useThemeName, XStack, YStack } from 'tamagui'
import { ConnectionStatus } from './ConnectionStatus'
import { Logo } from './Logo'
import { GlobalStats } from './GlobalStats'

export const Header = () => {
  const media = useMedia()

  return (
    <YStack mb={media.gtXs ? '$4' : '$0'}>
      <XStack
        pt={'$4'}
        px={media.gtXs ? '$8' : '$0'}
        jc="space-between"
        ai="center"
        bc="$background"
        gap="$2"
        mr="$2"
      >
        <XStack ai="center" gap="$8">
          <XStack ai="center" gap={media.gtXs ? '$8' : '$2'}>
            <XStack>{media.gtXs ? <DesktopTitle /> : <MobileTitle />}</XStack>
          </XStack>
        </XStack>
        <XStack jc="flex-end" gap="$4">
          <ConnectionStatus />
          <GlobalStats />
        </XStack>
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
