import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { NodeContext } from './NodeContext'
import { useToastController } from '@tamagui/toast'

export const TorrentsContext = createContext(null)

const REFRESH_INTERVAL = 5_000

export const TorrentsProvider = ({ children }) => {
  const [torrents, setTorrents] = useState([])
  const [sessionStats, setSessionStats] = useState({})
  const { sendRPCMessage } = useContext(NodeContext)
  const toast = useToastController()

  const fetchTorrents = useCallback(async () => {
    try {
      const response = await sendRPCMessage({
        method: 'torrent-get',
        arguments: {
          fields: [
            'id',
            'name',
            'files',
            'status',
            'percentDone',
            'downloadDir',
            'rateDownload',
            'rateUpload',
            'totalSize',
            'labels',
            'magnetLink',
          ],
        },
      })

      if (!response) return

      setTorrents((prevTorrents) => {
        const torrentsDone = response.arguments.torrents.filter((t) =>
          prevTorrents.find(
            (pt) => pt.id === t.id && pt.percentDone < 1 && t.percentDone === 1
          )
        )
        torrentsDone.forEach((torrent) =>
          toast.show('Torrent downloaded', { native: true })
        )
        return response.arguments.torrents
      })
    } catch (e) {
      console.log('Error fetching torrent', e)
    }
  }, [sendRPCMessage, toast])

  const fetchSessionStats = useCallback(async () => {
    try {
      const response = await sendRPCMessage({
        method: 'session-stats',
      })

      setSessionStats(response.arguments)
    } catch (e) {
      console.log('error fetching session info', e)
    }
  }, [sendRPCMessage])

  const refresh = useCallback(() => {
    fetchTorrents()
    fetchSessionStats()
  }, [fetchTorrents, fetchSessionStats])

  useEffect(() => {
    const interval = setInterval(async () => {
      refresh()
    }, REFRESH_INTERVAL)

    refresh()

    return () => clearInterval(interval)
  }, [refresh])

  return (
    <TorrentsContext.Provider value={{ torrents, sessionStats, refresh }}>
      {children}
    </TorrentsContext.Provider>
  )
}
