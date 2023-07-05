import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Crypto from 'expo-crypto'

import defaultSettings from '../defaultSettings.json'

export const SettingsContext = createContext({})

interface Node {
  id: string
  name: string
}

const SETTINGS_KEYS = [
  'clientId',
  'theme',
  'nodes',
  'selectedNodeId',
  'searchEnginesUrls',
  'torrentCardFields',
  'isTermsOfUseAccepted',
]

interface ISettings {
  clientId?: string
  theme?: 'light' | 'dark' | 'system'
  nodes?: Node[]
  selectedNodeId?: string
  searchEnginesUrls?: string[]
  torrentCardFields?: string[]
  isTermsOfUseAccepted?: boolean
}

const saveSettings = async (updatedSettings: ISettings) => {
  for (const key of Object.keys(updatedSettings).filter((k) =>
    SETTINGS_KEYS.includes(k)
  )) {
    const typedKey = key as keyof ISettings
    const value = updatedSettings[typedKey]

    if (typeof value === 'string') {
      await AsyncStorage.setItem(key, value)
    } else {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    }
  }
}

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [settings, setSettings] = useState<ISettings>(
    defaultSettings as ISettings
  )

  const updateSettings = (updatedSettings: ISettings) => {
    setSettings((settings) => ({ ...settings, ...updatedSettings }))
    saveSettings(updatedSettings)
  }

  useEffect(() => {
    const fetchSettings = async () => {
      const values = await AsyncStorage.multiGet(SETTINGS_KEYS)
      const parsedSettings: ISettings = {}

      values.forEach((kv) => {
        const [key, value] = kv
        if (typeof value !== 'string') return

        let parsedValue
        try {
          parsedValue = JSON.parse(value)
        } catch (e) {
          parsedValue = value
        }

        const typedKey = key as keyof ISettings
        parsedSettings[typedKey] = parsedValue
      })

      // Merge default settings
      const settings = Object.assign({}, defaultSettings, parsedSettings)

      if (!settings.clientId) {
        const clientId = Crypto.randomUUID() // generate default clientId for first run
        updateSettings({ clientId })
      }

      setSettings(settings)
    }

    fetchSettings()
  }, [])

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}
