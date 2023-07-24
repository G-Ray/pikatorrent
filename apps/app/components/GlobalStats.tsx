import React, { useContext } from 'react'
import { XStack } from 'tamagui'
import { TorrentFieldFormatter } from './TorrentFieldFormatter'
import { TorrentsContext } from '../contexts/TorrentsContext'

export const GlobalStats = () => {
  const { sessionStats } = useContext(TorrentsContext)

  return (
    <XStack jc="center">
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
