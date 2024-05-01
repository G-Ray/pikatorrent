import { PauseCircle, PlayCircle } from '@tamagui/lucide-icons'
import React from 'react-native-svg'
import { Button, useMedia } from 'tamagui'
import { useTorrents } from '../../../hooks/useTorrents'
import { useI18n } from '../../../hooks/use18n'
import { useContext } from 'react'
import { TorrentsContext } from '../../../contexts/TorrentsContext'

export const StartPauseAllTorrentsButton = () => {
  const i18n = useI18n()
  const { startAll, pauseAll } = useTorrents()
  const { sessionStats } = useContext(TorrentsContext)
  const media = useMedia()

  const isAllTorrentsActive = sessionStats.pausedTorrentCount === 0

  return (
    <Button
      icon={isAllTorrentsActive ? PauseCircle : PlayCircle}
      onPress={isAllTorrentsActive ? pauseAll : startAll}
      themeReset
      bc="$backgroundTransparent"
      scaleIcon={1.5}
    >
      {media.gtXs
        ? isAllTorrentsActive
          ? i18n.t('torrents.pauseAll')
          : i18n.t('torrents.startAll')
        : ''}
    </Button>
  )
}
