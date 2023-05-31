import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { SettingsContext } from './settings'
import { NodeContext } from './node'

export const TorrentsContext = createContext(null)

const REFRESH_INTERVAL = 5_000

export const TorrentsProvider = ({ children }) => {
  const [torrents, setTorrents] = useState([])
  const { settings } = useContext(SettingsContext)
  const { sendRPCMessage } = useContext(NodeContext)

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

      setTorrents(response.payload.arguments.torrents)
      // setTorrents(response.payload.arguments.torrents)
    } catch (e) {
      console.log('Error fetching torrent', e)
    }
  }, [sendRPCMessage, settings.torrentCardFields])

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
