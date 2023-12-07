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
  Stack,
  XStack,
  YStack,
  useMedia,
  useThemeName,
} from 'tamagui'
import { SearchBar } from '../../components/SearchBar'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../../constants/layout'
import { PauseCircle, PlayCircle, PlusCircle } from '@tamagui/lucide-icons'
import { TorrentsContext } from '../../contexts/TorrentsContext'
import { Filters } from '../../components/Filters'
import { Link, Slot } from 'expo-router'
import { Theme } from 'tamagui'
import i18n from '../../i18n'
import {
  SortOptions,
  SortingOptionsDialog,
} from '../../components/SortingOptionsDialog'
import { SettingsContext } from '../../contexts/SettingsContext'

const SearchBarWithAddButton = () => {
  const media = useMedia()

  return (
    <Card mx="auto" w="100%" maxWidth={DESKTOP_MAX_CONTENT_WIDTH}>
      <XStack bc="$backgroundTransparent" gap="$2">
        <Link asChild href="/add">
          <Button
            theme="yellow"
            icon={PlusCircle}
            bordered
            borderColor={'$yellow7'}
            {...(!media.gtXs && {
              position: 'absolute',
              bottom: '$10',
              right: '$1',
              size: '$5',
              br: 50,
            })}
          >
            {i18n.t('torrents.add')}
          </Button>
        </Link>
        <SearchBar />
      </XStack>
    </Card>
  )
}

export default function Torrents() {
  const { settings, updateSettings, isLoaded } = useContext(SettingsContext)
  const [filter, setFilter] = useState('')
  const [filters, setFilters] = useState([])
  const media = useMedia()
  const theme = useThemeName()

  const handleChangeSort = (sortOptions: SortOptions) => {
    updateSettings({ sortOptions })
  }

  return (
    <YStack f={1}>
      <YStack>
        {media.gtXs && (
          <Stack>
            <YStack mb="$4">
              <SearchBarWithAddButton />
            </YStack>
            <Separator />
          </Stack>
        )}

        <Card
          mx="auto"
          my="$2"
          w="100%"
          maxWidth={DESKTOP_MAX_CONTENT_WIDTH}
          bc="$backgroundTransparent"
        >
          <XStack jc="space-between" bc="$backgroundTransparent">
            <StartOrPauseAllTorrents />
            <Theme reset>
              <SortingOptionsDialog
                sortOptions={settings.sortOptions}
                onChangeSort={handleChangeSort}
              />
            </Theme>
            <Theme reset>
              <Filters onChangeFilters={setFilters} />
            </Theme>
            <Input
              minWidth={120}
              f={1}
              m={'$1'}
              mr="$2"
              placeholder={i18n.t('torrents.filterListPlaceholder')}
              value={filter}
              onChangeText={setFilter}
              borderTopWidth={0}
              borderRightWidth={0}
              borderLeftWidth={0}
              br={0}
              bc={/^light/.test(theme) ? 'white' : 'black'}
              placeholderTextColor={'$color'}
            />
          </XStack>
        </Card>
      </YStack>
      <TorrentsList
        filter={filter}
        filters={filters}
        sortOptions={settings.sortOptions}
      />
      <Slot />
      {!media.gtXs && <Separator />}
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

  return (
    <Button
      icon={isAllTorrentsActive ? PauseCircle : PlayCircle}
      onPress={isAllTorrentsActive ? pauseAll : startAll}
      bc={/^light/.test(theme) ? 'white' : 'black'}
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

type TorrentsListProp = {
  sortOptions: SortOptions
  filter: string
  filters: string[] // only labels for now
}

const TorrentsList = ({ sortOptions, filter, filters }: TorrentsListProp) => {
  const { torrents } = useTorrents()
  const media = useMedia()

  // toSorted is not defined on native
  torrents.sort((a, b) => {
    if (a[sortOptions.property] < b[sortOptions.property])
      return sortOptions.isReversed ? 1 : -1
    if (a[sortOptions.property] > b[sortOptions.property])
      return sortOptions.isReversed ? -1 : 1
    return 0
  })

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
        paddingTop: 4,
        paddingBottom: 4,
        maxWidth: DESKTOP_MAX_CONTENT_WIDTH + (media.gtXs ? 46 * 2 : 7 * 2),
      }}
      data={displayedTorrents || []}
      renderItem={({ item }) => <TorrentCard key={item.id} torrent={item} />}
    />
  )
}
