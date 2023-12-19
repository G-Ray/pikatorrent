import React from 'react'

import { Button, H5, Paragraph, XStack, YStack, useMedia } from 'tamagui'
import { ScrollView } from 'react-native'
import prettyBytes from 'pretty-bytes'
import prettyMilliseconds from 'pretty-ms'
import { SpeedCharts } from './SpeedCharts'
import { Dialog } from '../../reusable/Dialog'
import { useSessionStats } from '../../../hooks/useSessionStats'
import { Activity } from '@tamagui/lucide-icons'
import { useI18n } from '../../../hooks/use18n'
import { default as config } from '../../../config'

const refreshInterval = 1000

export const StatsDialog = () => {
  const i18n = useI18n()
  const media = useMedia()
  const { sessionStats } = useSessionStats({ interval: refreshInterval })

  return (
    <Dialog
      title={i18n.t('statsDialog.title')}
      trigger={
        <Button
          icon={Activity}
          variant="outlined"
          theme="yellow"
          hoverTheme
          borderColor={'$yellow7'}
        >
          {i18n.t('statsDialog.title')}
        </Button>
      }
      snapPoints={[90]}
    >
      {sessionStats && Object.keys(sessionStats).length > 0 && (
        <ScrollView>
          <YStack
            w="100%"
            alignSelf="center"
            flexShrink={1}
            pr={media.gtXs ? '$2' : 0}
            gap="$8"
          >
            {config.FEATURES_FLAGS.includes('speedCharts') && (
              <SpeedCharts
                sessionStats={sessionStats}
                refreshInterval={refreshInterval}
              />
            )}
            <YStack>
              <H5>{i18n.t('statsDialog.torrentsCount')}</H5>
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
              <H5>{i18n.t('statsDialog.sinceAppStart')}</H5>
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
                  {prettyBytes(
                    sessionStats['current-stats'].uploadedBytes || 0
                  )}
                </Paragraph>
              </XStack>

              <XStack jc="space-between" w="100%">
                <Paragraph>{i18n.t('statsDialog.filesAdded')}</Paragraph>
                <Paragraph>
                  {sessionStats['current-stats'].filesAdded}
                </Paragraph>
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
              <H5>{i18n.t('statsDialog.sinceBeginning')}</H5>
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
      )}
    </Dialog>
  )
}
