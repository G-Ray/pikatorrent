import React, { useContext, useMemo, useState } from 'react'
import { FlatList } from 'react-native'
import Fuse from 'fuse.js'

import {
  TorrentCard,
  TorrentCardPlaceHolder,
} from '../../components/TorrentCard'
import { useTorrents } from '../../hooks/useTorrents'
import {
  Button,
  Card,
  Input,
  Separator,
  XStack,
  YStack,
  useMedia,
  useThemeName,
} from 'tamagui'
import { SearchBar } from '../../components/SearchBar'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../../constants/layout'
import { GlobalStats } from '../../components/GlobalStats'
import { PauseCircle, PlayCircle, PlusCircle } from '@tamagui/lucide-icons'
import { TorrentsContext } from '../../contexts/TorrentsContext'
import { Filters } from '../../components/Filters'
import { Link, Slot } from 'expo-router'
import { Theme } from 'tamagui'

const SearchBarWithAddButton = () => {
  const media = useMedia()
  const theme = useThemeName()

  return (
    <Card
      mx="auto"
      w="100%"
      br={'$4'}
      bordered
      maxWidth={DESKTOP_MAX_CONTENT_WIDTH}
    >
      <XStack>
        <Link asChild href="/add" style={{ textDecorationLine: 'none' }}>
          <Button
            bc={theme === 'light' ? 'white' : 'black'}
            color="$blue9"
            icon={() => (
              <XStack alignSelf="center">
                <PlusCircle size={18} color="$blue9" />
              </XStack>
            )}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
          >
            {media.gtXs ? 'Add' : ''}
          </Button>
        </Link>
        <Separator vertical />
        <SearchBar />
      </XStack>
    </Card>
  )
}

export default function Torrents() {
  const [filter, setFilter] = useState('')
  const [filters, setFilters] = useState([])
  const media = useMedia()
  const theme = useThemeName()

  return (
    <YStack f={1}>
      <YStack px={media.gtXs ? '$8' : '$2'}>
        {media.gtXs && <SearchBarWithAddButton />}

        <Card
          mx="auto"
          w="100%"
          my={media.gtXs ? '$4' : '$2'}
          br={'$4'}
          bordered
          maxWidth={DESKTOP_MAX_CONTENT_WIDTH}
        >
          <XStack jc="space-between">
            <StartOrPauseAllTorrents />
            <Separator vertical />
            <Theme reset>
              <Filters onChangeFilters={setFilters} />
            </Theme>
            <Separator vertical />
            <Input
              minWidth={120}
              f={1}
              placeholder="Filter list..."
              value={filter}
              onChangeText={setFilter}
              bc={theme === 'light' ? 'white' : 'black'}
              color={theme === 'light' ? 'black' : 'black'}
              borderWidth={0}
              borderRadius={0}
            />
            <Separator vertical />
            <GlobalStats />
          </XStack>
        </Card>
      </YStack>
      <TorrentsList filter={filter} filters={filters} />
      <Slot />
      {!media.gtXs && (
        <XStack py="$2" mx="$2" mt="auto">
          <SearchBarWithAddButton />
        </XStack>
      )}
    </YStack>
  )
}

const StartOrPauseAllTorrents = () => {
  const { startAll, pauseAll } = useTorrents()
  const { sessionStats } = useContext(TorrentsContext)
  const media = useMedia()
  const theme = useThemeName()

  const isAllTorrentsActive = sessionStats.pausedTorrentCount === 0

  if (sessionStats.torrentCount === 0) {
    return null
  }

  return (
    <Button
      icon={isAllTorrentsActive ? PauseCircle : PlayCircle}
      onPress={isAllTorrentsActive ? pauseAll : startAll}
      borderTopRightRadius={0}
      borderBottomRightRadius={0}
      bc={/^light/.test(theme) ? 'white' : 'black'}
      // {...(!isAllTorrentsActive && { color: '$blue9' })}
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
