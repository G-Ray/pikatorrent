import React from 'react'
import { H3, H4, useMedia, useThemeName, XStack, YStack } from 'tamagui'
import { ConnectionStatus } from './ConnectionStatus'
import { Logo } from '../reusable/Logo'
import { useSegments } from 'expo-router'
import { GlobalStats } from '../screens/torrents/GlobalStats'

export const Header = () => {
  const media = useMedia()
  const segments = useSegments()

  return (
    <YStack py="$2" px={media.gtXs ? '$8' : '$2'}>
      <XStack jc="space-between" ai="center">
        <XStack ai="center" gap="$8">
          <XStack ai="center" gap={media.gtXs ? '$8' : '$2'}>
            <Title />
          </XStack>
        </XStack>
        <XStack jc="flex-end" gap="$4" mr="$2">
          <ConnectionStatus />
          {segments[0] === '(torrents)' && <GlobalStats />}
        </XStack>
      </XStack>
    </YStack>
  )
}

export const Title = () => {
  const theme = useThemeName()

  return (
    <XStack ai="center">
      <Logo width={24} height={24} theme={theme} />
      <H4 color="$yellow9" selectable={false}>
        Pika
      </H4>
      <H4 selectable={false}>Torrent</H4>
    </XStack>
  )
}
