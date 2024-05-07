import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Crypto from 'expo-crypto'

import defaultSettings from '../defaultSettings.json'

interface SettingsContext {
  settings: Settings
  updateSettings?: (s: Settings) => void
  isLoaded: boolean
}

interface Node {
  id: string
  name: string
}

export interface Settings {
  clientId?: string
  theme?: 'light' | 'dark' | 'system'
  nodes?: Node[]
  language?: string
  selectedNodeId?: string
  searchEnginesUrls?: string[]
  isTermsOfUseAccepted?: boolean
}

export const SETTINGS_KEYS = [
  'clientId',
  'theme',
  'nodes',
  'language',
  'selectedNodeId',
  'searchEnginesUrls',
  'isTermsOfUseAccepted',
  'sortOptions',
]

export const SettingsContext = createContext<SettingsContext>({
  settings: {},
  isLoaded: false,
})

const saveSettings = async (updatedSettings: Settings) => {
  for (const key of Object.keys(updatedSettings).filter((k) =>
    SETTINGS_KEYS.includes(k)
  )) {
    const typedKey = key as keyof Settings
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
  const [isLoaded, setIsLoaded] = useState(false)
  const [settings, setSettings] = useState<Settings>(
    defaultSettings as Settings
  )

  const updateSettings = (updatedSettings: Settings) => {
    setSettings((settings) => ({ ...settings, ...updatedSettings }))
    saveSettings(updatedSettings)
  }

  useEffect(() => {
    const fetchSettings = async () => {
      const values = await AsyncStorage.multiGet(SETTINGS_KEYS)
      const parsedSettings: Settings = {}

      values.forEach((kv) => {
        const [key, value] = kv
        const typedKey = key as keyof Settings

        if (typeof value !== 'string') return

        let parsedValue
        try {
          parsedValue = JSON.parse(value)
        } catch (e) {
          if (value === 'undefined') {
            parsedValue = (defaultSettings as Settings)[typedKey]
          } else {
            parsedValue = value
          }
        }

        parsedSettings[typedKey] = parsedValue
      })

      // Merge default settings
      const settings = Object.assign({}, defaultSettings, parsedSettings)

      if (!settings.clientId) {
        const clientId = Crypto.randomUUID() // generate default clientId for first run
        updateSettings({ clientId })
      }

      setSettings(settings)
      setIsLoaded(true)
    }

    fetchSettings()
  }, [])

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, isLoaded }}>
      {children}
    </SettingsContext.Provider>
  )
}
