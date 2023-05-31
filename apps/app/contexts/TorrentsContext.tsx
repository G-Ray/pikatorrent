import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { SettingsContext } from './settings'
import { NodeContext } from './node'
import { useToastController } from '@tamagui/toast'

export const TorrentsContext = createContext(null)

const REFRESH_INTERVAL = 5_000

export const TorrentsProvider = ({ children }) => {
  const [torrents, setTorrents] = useState([])
  const { settings } = useContext(SettingsContext)
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
            'percentDone',
            ...settings.torrentCardFields,
          ],
        },
      })

      setTorrents((prevTorrents) => {
        const torrentsDone = response.payload.arguments.torrents.filter((t) =>
          prevTorrents.find(
            (pt) => pt.id === t.id && pt.percentDone < 1 && t.percentDone === 1
          )
        )
        torrentsDone.forEach((torrent) =>
          toast.show('Torrent downloaded', { native: true })
        )
        return response.payload.arguments.torrents
      })
    } catch (e) {
      console.log('Error fetching torrent', e)
    }
  }, [sendRPCMessage, settings.torrentCardFields, toast])

  useEffect(() => {
    const interval = setInterval(async () => {
      fetchTorrents()
    }, REFRESH_INTERVAL)

    fetchTorrents()

    return () => clearInterval(interval)
  }, [fetchTorrents])

  return (
    <TorrentsContext.Provider value={{ torrents, refresh: fetchTorrents }}>
      {children}
    </TorrentsContext.Provider>
  )
}
