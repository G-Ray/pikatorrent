import React from 'react'
import { FlatList } from 'react-native'
import { TorrentCard, TorrentCardPlaceHolder } from '../components/TorrentCard'
import { useTorrents } from '../hooks/useTorrents'
import { XStack, YStack, useMedia } from 'tamagui'
import { AddTorrentDialog } from '../dialogs/AddTorrentDialog'
import { SearchBar } from '../components/SearchBar'

export default function Torrents() {
  const media = useMedia()

  return (
    <YStack f={1}>
      <XStack pb={media.gtXs ? '$8' : '$4'} jc="center">
        <AddTorrentDialog />
        <SearchBar />
      </XStack>
      <TorrentsList />
    </YStack>
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
