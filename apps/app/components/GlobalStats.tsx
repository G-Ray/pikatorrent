import React, { useContext } from 'react'
import { Card, XStack, useMedia } from 'tamagui'
import { TorrentFieldFormatter } from './TorrentFieldFormatter'
import { TorrentsContext } from '../contexts/TorrentsContext'

export const GlobalStats = () => {
  const { sessionStats } = useContext(TorrentsContext)
  const media = useMedia()

  return (
    <XStack jc="center" br={50}>
      <Card
        ai="center"
        jc="center"
        bc="white"
        br={50}
        px={media.gtXs ? '$4' : '$2'}
        bordered
      >
        <XStack gap={media.gtXs ? '$4' : '$1'}>
          <TorrentFieldFormatter
            fontSize={'$3'}
            name="rateDownload"
            value={sessionStats.downloadSpeed || 0}
          />
          <TorrentFieldFormatter
            fontSize={'$3'}
            name="rateUpload"
            value={sessionStats.uploadSpeed || 0}
          />
        </XStack>
      </Card>
    </XStack>
  )
}
