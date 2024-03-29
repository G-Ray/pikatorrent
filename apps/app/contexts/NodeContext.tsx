import React, { createContext, useContext } from 'react'
import { useLocalNode } from '../hooks/useLocalNode'
import { useRemoteNode } from '../hooks/useRemoteNode'
import { SettingsContext } from './SettingsContext'
import { Platform } from 'react-native'
import isElectron from 'is-electron'

export const NodeContext = createContext({})

export const LocalNodeProvider = ({ children }) => {
  const node = useLocalNode()

  return <NodeContext.Provider value={node}>{children}</NodeContext.Provider>
}

export const RemoteNodeProvider = ({ nodeId, children }) => {
  const { settings } = useContext(SettingsContext)

  const node = useRemoteNode({ clientId: settings.clientId, nodeId })

  return <NodeContext.Provider value={node}>{children}</NodeContext.Provider>
}

export const NodeProvider = ({ children }) => {
  const { settings } = useContext(SettingsContext)

  if (
    (settings &&
      settings.selectedNodeId &&
      settings.selectedNodeId !== 'local') ||
    (Platform.OS === 'web' && !isElectron())
  ) {
    return (
      <RemoteNodeProvider nodeId={settings.selectedNodeId}>
        {children}
      </RemoteNodeProvider>
    )
  }

  return <LocalNodeProvider>{children}</LocalNodeProvider>
}
