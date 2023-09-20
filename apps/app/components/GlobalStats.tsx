import React, { useContext } from 'react'
import { Card, XStack, useMedia, useThemeName } from 'tamagui'
import { TorrentFieldFormatter } from './TorrentFieldFormatter'
import { TorrentsContext } from '../contexts/TorrentsContext'

export const GlobalStats = () => {
  const { sessionStats } = useContext(TorrentsContext)
  const media = useMedia()
  const theme = useThemeName()

  return (
    <Card
      br={50}
      bordered
      bc={/^light/.test(theme) ? 'white' : 'black'}
      py="$2"
      px="$3"
      mr="$2"
    >
      <XStack gap={media.gtXs ? '$4' : '$4'}>
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
      {/* </XStack> */}
    </Card>
  )
}
