import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { NodeContext } from '../contexts/node'
import { FlatList } from 'react-native'
import { TorrentCard, TorrentCardPlaceHolder } from '../components/TorrentCard'

const REFRESH_INTERVAL = 5_000

export default function Torrents() {
  const [torrents, setTorrents] = useState([])
  const { sendRPCMessage } = useContext(NodeContext)

  useEffect(() => {
    const fetchTorrents = async () => {
      try {
        const response = await sendRPCMessage({
          method: 'torrent-get',
          arguments: {
            fields: [
              'id',
              'name',
              'totalSize',
              'status',
              'percentDone',
              'percentComplete',
              'rateDownload',
              'rateUpload',
              'peers',
            ],
          },
        })

        setTorrents(response.payload.arguments.torrents)
      } catch (e) {
        console.log('Error fetching torrent', e)
      }
    }

    const interval = setInterval(async () => {
      fetchTorrents()
    }, REFRESH_INTERVAL)

    fetchTorrents()

    return () => clearInterval(interval)
  }, [sendRPCMessage])

  const handleResume = (id: string) => {
    sendRPCMessage({ method: 'torrent-start', arguments: { ids: id } }) // NOTE: What difference with torrent-start-now ?
  }

  const handlePause = (id: string) => {
    sendRPCMessage({ method: 'torrent-stop', arguments: { ids: [id] } })
  }

  if (torrents.length === 0) {
    return <TorrentCardPlaceHolder />
  }

  return (
    <FlatList
      data={torrents.map((torrent) => ({
        torrent,
        handleResume,
        handlePause,
      }))}
      renderItem={({ item }) => (
        <TorrentCard
          key={item.torrent.id}
          torrent={item.torrent}
          handleResume={item.handleResume}
          handlePause={item.handlePause}
        />
      )}
    />
  )
}
