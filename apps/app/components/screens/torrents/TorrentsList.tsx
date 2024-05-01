import React, { useMemo } from 'react'
import { XStack, useMedia } from 'tamagui'
import Fuse from 'fuse.js'

import { useTorrents } from '../../../hooks/useTorrents'
import { TorrentCard, TorrentCardPlaceHolder } from './TorrentCard'
import { FlatList } from 'react-native'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../../../constants/layout'
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
