import React from 'react'
import { FlatList } from 'react-native'
import { TorrentCard, TorrentCardPlaceHolder } from '../components/TorrentCard'
import { TorrentsProvider } from '../contexts/TorrentsContext'
import { useTorrents } from '../hooks/useTorrents'
import { XStack } from 'tamagui'
import { AddTorrentDialog } from '../dialogs/AddTorrentDialog'
import { SearchBar } from '../components/SearchBar'

export default function Torrents() {
  return (
    <TorrentsProvider>
      <XStack px="$4" pt="$2" pb="$4" jc="center">
        <AddTorrentDialog />
        <SearchBar />
      </XStack>
      <TorrentsList />
    </TorrentsProvider>
  )
}

const TorrentsList = () => {
  const { torrents } = useTorrents()

  if (torrents.length === 0) {
    return <TorrentCardPlaceHolder />
  }

  return (
    <FlatList
      data={(torrents || []).map((torrent) => ({
        torrent,
      }))}
      renderItem={({ item }) => (
        <TorrentCard key={item.torrent.id} torrent={item.torrent} />
      )}
    />
  )
}
