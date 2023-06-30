import { useEffect, useState } from 'react'

export const useLocalNode = () => {
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    const fetchInitialSettings = async () => {
      const res = await window.electronAPI.getNodeSettings()
      setSettings(res)
    }

    fetchInitialSettings()

    // subscribe to settings update from electron main
    window.electronAPI.handleUpdateNodeSettings((_, updatedSettings) => {
      setSettings(updatedSettings)
    })
  }, [])

  const sendRPCMessage = async (json: any) => {
    const res = await window.electronAPI.transmissionRequest(json)
    return res
  }

  const updateSettings = async (update) => {
    const res = await window.electronAPI.updateNodeSettings(update)
    return res
  }

  return {
    sendRPCMessage,
    isConnected: true,
    isLocal: true,
    settings,
    updateSettings,
  }
}
