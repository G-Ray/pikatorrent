import React, { useContext } from 'react'
import { XStack, useMedia } from 'tamagui'
import { TorrentFieldFormatter } from './TorrentFieldFormatter'
import { TorrentsContext } from '../contexts/TorrentsContext'

export const GlobalStats = () => {
  const { sessionStats } = useContext(TorrentsContext)
  const media = useMedia()

  return (
    <XStack jc="center" py={media.gtXs ? '$4' : '$2'}>
      <XStack gap="$2">
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
    </XStack>
  )
}
