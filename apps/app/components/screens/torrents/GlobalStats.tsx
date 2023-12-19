import React, { useContext } from 'react'
import { XStack, useMedia } from 'tamagui'
import { TorrentFieldFormatter } from './TorrentFieldFormatter'
import { TorrentsContext } from '../../../contexts/TorrentsContext'

export const GlobalStats = () => {
  const { sessionStats } = useContext(TorrentsContext)
  const media = useMedia()

  return (
    <XStack gap={media.gtXs ? '$4' : '$4'}>
      <TorrentFieldFormatter
        fontSize={'$3'}
        // fontWeight="bold"
        name="rateDownload"
        value={sessionStats.downloadSpeed || 0}
      />
      <TorrentFieldFormatter
        fontSize={'$3'}
        // fontWeight="bold"
        name="rateUpload"
        value={sessionStats.uploadSpeed || 0}
      />
    </XStack>
  )
}
