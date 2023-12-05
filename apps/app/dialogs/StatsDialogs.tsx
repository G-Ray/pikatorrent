import React from 'react'

import {
  Button,
  H2,
  Paragraph,
  XStack,
  YStack,
  useMedia,
  useThemeName,
} from 'tamagui'
import { ScrollView } from 'react-native'
import prettyBytes from 'pretty-bytes'
import prettyMilliseconds from 'pretty-ms'
import { SpeedCharts } from '../components/SpeedCharts'
import { Dialog } from '../components/reusable/Dialog'
import i18n from '../i18n'
import { useSessionStats } from '../hooks/useSessionStats'

const refreshInterval = 1000

export const StatsDialog = () => {
  const theme = useThemeName()
  const media = useMedia()
  const { sessionStats } = useSessionStats({ interval: refreshInterval })

  if (!sessionStats || Object.keys(sessionStats).length === 0) return null

  return (
    <Dialog
      title={i18n.t('statsDialog.title')}
      trigger={
        <Button
          bc={theme.startsWith('light') ? 'white' : 'black'}
          theme="yellow"
          hoverTheme
          borderColor={'$yellow7'}
        >
          {i18n.t('statsDialog.title')}
        </Button>
      }
      snapPoints={[90]}
    >
      <ScrollView>
        <YStack
          w="100%"
          alignSelf="center"
          flexShrink={1}
          pr={media.gtXs ? '$2' : 0}
        >
          <SpeedCharts
            sessionStats={sessionStats}
            refreshInterval={refreshInterval}
          />
          <YStack>
            <H2>{i18n.t('statsDialog.torrentsCount')}</H2>
            <XStack jc="space-between" w="100%">
              <Paragraph>{i18n.t('statsDialog.allTorrents')}</Paragraph>
              <Paragraph>{sessionStats.torrentCount}</Paragraph>
            </XStack>
            <XStack jc="space-between" w="100%">
              <Paragraph>{i18n.t('statsDialog.activeTorrents')}</Paragraph>
              <Paragraph>{sessionStats.activeTorrentCount}</Paragraph>
            </XStack>
            <XStack jc="space-between" w="100%">
              <Paragraph>{i18n.t('statsDialog.pauseTorrents')}</Paragraph>
              <Paragraph>{sessionStats.pausedTorrentCount}</Paragraph>
            </XStack>
          </YStack>

          <YStack>
            <H2>{i18n.t('statsDialog.sinceAppStart')}</H2>
            <XStack jc="space-between" w="100%">
              <Paragraph>{i18n.t('statsDialog.downloaded')}</Paragraph>
              <Paragraph>
                {prettyBytes(
                  sessionStats['current-stats'].downloadedBytes || 0
                )}
              </Paragraph>
            </XStack>

            <XStack jc="space-between" w="100%">
              <Paragraph>{i18n.t('statsDialog.uploaded')}</Paragraph>
              <Paragraph>
                {prettyBytes(sessionStats['current-stats'].uploadedBytes || 0)}
              </Paragraph>
            </XStack>

            <XStack jc="space-between" w="100%">
              <Paragraph>{i18n.t('statsDialog.filesAdded')}</Paragraph>
              <Paragraph>{sessionStats['current-stats'].filesAdded}</Paragraph>
            </XStack>
            <XStack jc="space-between" w="100%">
              <Paragraph>{i18n.t('statsDialog.timeActive')}</Paragraph>
              <Paragraph>
                {prettyMilliseconds(
                  sessionStats['current-stats'].secondsActive * 1000,
                  { secondsDecimalDigits: 0 }
                )}
              </Paragraph>
            </XStack>
          </YStack>

          <YStack>
            <H2>{i18n.t('statsDialog.sinceBeginning')}</H2>
            <XStack jc="space-between" w="100%">
              <Paragraph>{i18n.t('statsDialog.downloaded')}</Paragraph>
              <Paragraph>
                {prettyBytes(
                  sessionStats['cumulative-stats'].downloadedBytes || 0
                )}
              </Paragraph>
            </XStack>

            <XStack jc="space-between" w="100%">
              <Paragraph>{i18n.t('statsDialog.uploaded')}</Paragraph>
              <Paragraph>
                {prettyBytes(
                  sessionStats['cumulative-stats'].uploadedBytes || 0
                )}
              </Paragraph>
            </XStack>

            <XStack jc="space-between" w="100%">
              <Paragraph>{i18n.t('statsDialog.filesAdded')}</Paragraph>
              <Paragraph>
                {sessionStats['cumulative-stats'].filesAdded}
              </Paragraph>
            </XStack>
            <XStack jc="space-between" w="100%">
              <Paragraph>{i18n.t('statsDialog.timeActive')}</Paragraph>
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
    </Dialog>
  )
}
