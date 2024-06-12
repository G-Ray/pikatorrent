import React, { useMemo } from 'react'
import { XStack, useMedia } from 'tamagui'
import Fuse from 'fuse.js'

import { useTorrents } from '../../../hooks/useTorrents'
import { TorrentCard } from './TorrentCard/TorrentCard'
import { TorrentCardPlaceHolder } from './TorrentCard/TorrentCardPlaceHolder'
import { FlatList } from 'react-native'
import { SortOptions } from '../../dialogs/SortingOptionsDialog'

type TorrentsListProp = {
  sortOptions: SortOptions
  filter: string
  filters: string[] // only labels for now
}

export const TorrentsList = ({
  sortOptions,
  filter,
  filters,
}: TorrentsListProp) => {
  const { torrents } = useTorrents()

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
      <XStack w="100%">
        <TorrentCardPlaceHolder />
      </XStack>
    )
  }

  return (
    <FlatList
      contentContainerStyle={{
        width: '100%',
        gap: 8,
      }}
      data={displayedTorrents || []}
      renderItem={({ item }) => <TorrentCard key={item.id} torrent={item} />}
    />
  )
}
