import React from 'react'
import { H3, useMedia, useThemeName, XStack, YStack } from 'tamagui'
import { ConnectionStatus } from './ConnectionStatus'
import { Logo } from './Logo'
import { GlobalStats } from './GlobalStats'

export const Header = () => {
  const media = useMedia()

  return (
    <YStack>
      <XStack
        px={media.gtXs ? '$8' : '$2'}
        jc="space-between"
        ai="center"
        bc="$backgroundStrong"
      >
        <XStack ai="center" gap="$8">
          <XStack ai="center" gap={media.gtXs ? '$8' : '$2'}>
            <XStack>{media.gtXs ? <DesktopTitle /> : <MobileTitle />}</XStack>
          </XStack>
        </XStack>
        <XStack jc="flex-end" gap="$4" mr="$2">
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
    <XStack ai="center" mt="$4">
      <Logo width={48} height={48} theme={theme} />
      <H3 color="$yellow9" selectable={false}>
        Pika
      </H3>
      <H3 selectable={false}>Torrent</H3>
    </XStack>
  )
}

const MobileTitle = () => {
  const theme = useThemeName()

  return (
    <XStack ai="center">
      <Logo width={32} height={32} theme={theme} />
      <H3 color="$yellow9" selectable={false}>
        Pika
      </H3>
      <H3 selectable={false}>Torrent</H3>
    </XStack>
  )
}
