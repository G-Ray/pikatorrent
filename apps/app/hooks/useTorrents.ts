import { useContext } from 'react'
import { TorrentsContext } from '../contexts/TorrentsContext'
import { NodeContext } from '../contexts/NodeContext'

export const useTorrents = () => {
  const { torrents, refresh } = useContext(TorrentsContext)
  const { sendRPCMessage } = useContext(NodeContext)

  const start = async (id: string) => {
    await sendRPCMessage({ method: 'torrent-start', arguments: { ids: id } }) // NOTE: What difference with torrent-start-now ?
    refresh()
  }

  const pause = async (id: string) => {
    await sendRPCMessage({ method: 'torrent-stop', arguments: { ids: [id] } })
    refresh()
  }

  const remove = async (id: string, deleteLocalData: boolean) => {
    await sendRPCMessage({
      method: 'torrent-remove',
      arguments: { ids: [id], 'delete-local-data': deleteLocalData },
    })

    refresh()
  }

  return { torrents, refresh, start, pause, remove }
}
