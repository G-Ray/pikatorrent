import React, { createContext, useContext } from 'react'
import { useLocalNode } from '../hooks/useLocalNode'
import { useRemoteNode } from '../hooks/useRemoteNode'
import { Settings, SettingsContext } from './SettingsContext'
import { Platform } from 'react-native'
import isElectron from 'is-electron'

interface LocalNodeContext {
  sendRPCMessage: (json: any) => Promise<any>
  isConnected: boolean
  isLocal: boolean
  settings: null
  updateSettings: (update: Partial<Settings>) => Promise<any>
}

interface RemoteNodeContext {
  name: string
  isConnected: boolean
  sendRPCMessage: (json: any) => Promise<unknown>
  isUnsupportedBrowser: boolean
}

const defaultNode: LocalNodeContext = {
  sendRPCMessage: () => Promise.reject(new Error('node not connected yet')),
  isConnected: false,
  isLocal: true,
  settings: null,
  updateSettings: () => Promise.reject(new Error('node not connected yet')),
}

export const NodeContext = createContext<LocalNodeContext | RemoteNodeContext>(
  defaultNode
)

export const LocalNodeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const node = useLocalNode()

  return <NodeContext.Provider value={node}>{children}</NodeContext.Provider>
}

interface RemoteNodeProviderProps {
  nodeId: string | undefined
  children: React.ReactNode
}

export const RemoteNodeProvider = ({
  nodeId,
  children,
}: RemoteNodeProviderProps) => {
  const { settings } = useContext(SettingsContext)

  const node = useRemoteNode({ clientId: settings.clientId, nodeId })

  return <NodeContext.Provider value={node}>{children}</NodeContext.Provider>
}

export const NodeProvider = ({ children }: { children: React.ReactNode }) => {
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
