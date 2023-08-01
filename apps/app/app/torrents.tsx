import React, { useContext, useMemo, useState } from 'react'
import { FlatList } from 'react-native'
import Fuse from 'fuse.js'

import { TorrentCard, TorrentCardPlaceHolder } from '../components/TorrentCard'
import { useTorrents } from '../hooks/useTorrents'
import { Button, Input, XStack, YStack, useMedia, useThemeName } from 'tamagui'
import { AddTorrentDialog } from '../dialogs/AddTorrentDialog'
import { SearchBar } from '../components/SearchBar'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../constants/layout'
import { GlobalStats } from '../components/GlobalStats'
import { PauseCircle, PlayCircle } from '@tamagui/lucide-icons'
import { TorrentsContext } from '../contexts/TorrentsContext'
import { Filters } from '../components/Filters'

export default function Torrents() {
  const [filter, setFilter] = useState('')
  const [filters, setFilters] = useState([])
  const media = useMedia()

  return (
    <YStack f={1}>
      <YStack px={media.gtXs ? '$8' : '$2'}>
        <XStack mx="auto" w="100%" maxWidth={DESKTOP_MAX_CONTENT_WIDTH}>
          <AddTorrentDialog />
          <SearchBar />
        </XStack>

        <XStack
          mx="auto"
          w="100%"
          py={media.gtXs ? '$4' : '$2'}
          jc="space-between"
          maxWidth={DESKTOP_MAX_CONTENT_WIDTH}
          gap="$2"
        >
          <StartOrPauseAllTorrents />
          <Filters onChangeFilters={setFilters} />
          <Input
            br={50}
            minWidth={120}
            maxWidth={300}
            f={1}
            placeholder="Filter torrents list..."
            value={filter}
            onChangeText={setFilter}
          />
          <XStack gap="$4">
            <GlobalStats />
          </XStack>
        </XStack>
      </YStack>
      <TorrentsList filter={filter} filters={filters} />
    </YStack>
  )
}

const StartOrPauseAllTorrents = () => {
  const theme = useThemeName()
  const { startAll, pauseAll } = useTorrents()
  const { sessionStats } = useContext(TorrentsContext)
  const media = useMedia()

  const isAllTorrentsActive = sessionStats.pausedTorrentCount === 0

  if (sessionStats.torrentCount === 0) {
    return null
  }

  return (
    <Button
      icon={isAllTorrentsActive ? PauseCircle : PlayCircle}
      elevate
      bc={theme === 'dark' ? 'black' : 'white'}
      br={50}
      px={media.gtXs ? '$4' : '$3'}
      onPress={isAllTorrentsActive ? pauseAll : startAll}
      circular={!media.gtXs}
    >
      {media.gtXs ? (isAllTorrentsActive ? 'Pause All' : 'Start All') : ''}
    </Button>
  )
}

type TorrentsListProp = {
  filter: string
  filters: string[] // only labels for now
}

const TorrentsList = ({ filter, filters }: TorrentsListProp) => {
  const { torrents } = useTorrents()
  const media = useMedia()

  const filteredTorrents =
    filters.length > 0
      ? torrents.filter((t) => filters.every((l) => t.labels.includes(l)))
      : torrents

  const fuse = useMemo(
    () =>
      new Fuse(filteredTorrents, {
        keys: ['name'],
        findAllMatches: true,
        threshold: 0.3,
      }),
    [filteredTorrents]
  )

  const displayedTorrents =
    filter === ''
      ? filteredTorrents
      : fuse.search(filter).map((res) => res.item)

  if (torrents.length === 0) {
    return (
      <XStack
        w="100%"
        mx="auto"
        px={media.gtXs ? 46 : 7}
        maxWidth={DESKTOP_MAX_CONTENT_WIDTH + (media.gtXs ? 46 * 2 : 7 * 2)}
      >
        <TorrentCardPlaceHolder />
      </XStack>
    )
  }

  return (
    <FlatList
      contentContainerStyle={{
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: media.gtXs ? 46 : 7, // $8 $2
        paddingRight: media.gtXs ? 46 : 7, // $8 $2
        paddingTop: 4,
        paddingBottom: 4,
        maxWidth: DESKTOP_MAX_CONTENT_WIDTH + (media.gtXs ? 46 * 2 : 7 * 2),
      }}
      data={displayedTorrents || []}
      renderItem={({ item }) => <TorrentCard key={item.id} torrent={item} />}
    />
  )
}
