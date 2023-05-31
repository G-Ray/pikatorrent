import { useContext, useEffect } from 'react'
import isElectron from 'is-electron'
import { SettingsContext } from '../contexts/settings'

export const useLocalNode = () => {
  const { settings, updateSettings } = useContext(SettingsContext)

  useEffect(() => {
    if (!settings || !isElectron()) return

    const fetchLocalNodeId = async () => {
      const nodeId = await window.electronAPI.getLocalNodeId()

      if (
        nodeId &&
        (settings.nodes || []).find((n) => n.id === nodeId) === undefined
      ) {
        updateSettings({
          ...settings,
          nodes: [{ id: nodeId, name: 'Local' }],
          selectedNodeId: nodeId,
        })
      }
    }

    fetchLocalNodeId()
  }, [settings, updateSettings])
}
