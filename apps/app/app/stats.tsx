import React, { useContext, useState } from 'react'

import { H2, Paragraph, XStack, YStack, useMedia } from 'tamagui'
import { ScrollView } from 'react-native'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../constants/layout'
import { TorrentsContext } from '../contexts/TorrentsContext'
import prettyBytes from 'pretty-bytes'
import prettyMilliseconds from 'pretty-ms'
import { SpeedCharts } from '../components/SpeedCharts'

export default function Stats() {
  const media = useMedia()
  const { sessionStats } = useContext(TorrentsContext)
  const [isScrollEnabled, setIsScrollEnabled] = useState(true)

  if (!sessionStats || Object.keys(sessionStats).length === 0) return null

  return (
    <ScrollView scrollEnabled={isScrollEnabled}>
      <YStack
        w="100%"
        alignSelf="center"
        flexShrink={1}
        gap="$8"
        pb="$4"
        px={media.gtXs ? '$8' : '$2'}
        {...(media.gtXs && { w: DESKTOP_MAX_CONTENT_WIDTH })}
      >
        <SpeedCharts />
        <YStack>
          <H2>Torrents count</H2>
          <XStack jc="space-between" w="100%">
            <Paragraph>All torrents</Paragraph>
            <Paragraph>{sessionStats.torrentCount}</Paragraph>
          </XStack>
          <XStack jc="space-between" w="100%">
            <Paragraph>Active torrents</Paragraph>
            <Paragraph>{sessionStats.activeTorrentCount}</Paragraph>
          </XStack>
          <XStack jc="space-between" w="100%">
            <Paragraph>Paused torrents</Paragraph>
            <Paragraph>{sessionStats.pausedTorrentCount}</Paragraph>
          </XStack>
        </YStack>

        <YStack>
          <H2>Since app start</H2>
          <XStack jc="space-between" w="100%">
            <Paragraph>Downloaded</Paragraph>
            <Paragraph>
              {prettyBytes(sessionStats['current-stats'].downloadedBytes || 0)}
            </Paragraph>
          </XStack>

          <XStack jc="space-between" w="100%">
            <Paragraph>Uploaded</Paragraph>
            <Paragraph>
              {prettyBytes(sessionStats['current-stats'].uploadedBytes || 0)}
            </Paragraph>
          </XStack>

          <XStack jc="space-between" w="100%">
            <Paragraph>Files added</Paragraph>
            <Paragraph>{sessionStats['current-stats'].filesAdded}</Paragraph>
          </XStack>
          <XStack jc="space-between" w="100%">
            <Paragraph>Time active</Paragraph>
            <Paragraph>
              {prettyMilliseconds(
                sessionStats['current-stats'].secondsActive * 1000,
                { secondsDecimalDigits: 0 }
              )}
            </Paragraph>
          </XStack>
        </YStack>

        <YStack>
          <H2>Since the beggining</H2>
          <XStack jc="space-between" w="100%">
            <Paragraph>Downloaded</Paragraph>
            <Paragraph>
              {prettyBytes(
                sessionStats['cumulative-stats'].downloadedBytes || 0
              )}
            </Paragraph>
          </XStack>

          <XStack jc="space-between" w="100%">
            <Paragraph>Uploaded</Paragraph>
            <Paragraph>
              {prettyBytes(sessionStats['cumulative-stats'].uploadedBytes || 0)}
            </Paragraph>
          </XStack>

          <XStack jc="space-between" w="100%">
            <Paragraph>Files added</Paragraph>
            <Paragraph>{sessionStats['cumulative-stats'].filesAdded}</Paragraph>
          </XStack>
          <XStack jc="space-between" w="100%">
            <Paragraph>Time active</Paragraph>
            <Paragraph>
              {prettyMilliseconds(
                sessionStats['cumulative-stats'].secondsActive * 1000,
                { secondsDecimalDigits: 0 }
              )}
            </Paragraph>
          </XStack>
        </YStack>
      </YStack>
    </ScrollView>
  )
}
