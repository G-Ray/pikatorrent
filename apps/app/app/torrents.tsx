import React from 'react'
import { FlatList } from 'react-native'
import { TorrentCard, TorrentCardPlaceHolder } from '../components/TorrentCard'
import { TorrentsProvider } from '../contexts/TorrentsContext'
import { useTorrents } from '../hooks/useTorrents'

export default function Torrents() {
  return (
    <TorrentsProvider>
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
