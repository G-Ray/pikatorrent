import { useContext, useMemo } from 'react'
import { TorrentsContext } from '../contexts/TorrentsContext'
import { NodeContext } from '../contexts/NodeContext'

export const useTorrents = () => {
  const { torrents, refresh } = useContext(TorrentsContext)
  const { sendRPCMessage } = useContext(NodeContext)

  const start = async (id: string) => {
    await sendRPCMessage({
      method: 'torrent-start-now',
      arguments: { ids: id },
    })
    refresh()
  }

  const startAll = async () => {
    await sendRPCMessage({ method: 'torrent-start-now', arguments: {} })
    refresh()
  }

  const pause = async (id: string) => {
    await sendRPCMessage({ method: 'torrent-stop', arguments: { ids: [id] } })
    refresh()
  }

  const pauseAll = async () => {
    await sendRPCMessage({ method: 'torrent-stop', arguments: {} })
    refresh()
  }

  const remove = async (id: string, deleteLocalData: boolean) => {
    await sendRPCMessage({
      method: 'torrent-remove',
      arguments: { ids: [id], 'delete-local-data': deleteLocalData },
    })

    refresh()
  }

  const setLabels = async (id: string, labels: string[]) => {
    await sendRPCMessage({
      method: 'torrent-set',
      arguments: { ids: id, labels },
    })
    refresh()
  }

  const labels = useMemo(
    () =>
      torrents.reduce((acc: string[], t: any) => {
        return [...acc, ...t.labels.filter((l: string) => !acc.includes(l))]
      }, []),
    [torrents]
  )

  return {
    torrents,
    refresh,
    start,
    startAll,
    pause,
    pauseAll,
    remove,
    setLabels,
    labels,
  }
}
