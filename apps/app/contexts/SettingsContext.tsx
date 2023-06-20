import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Crypto from 'expo-crypto'

import defaultSettings from '../defaultSettings.json'

export const SettingsContext = createContext({})

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings)

  const updateSettings = async (updatedSettings) => {
    await AsyncStorage.setItem(
      'settings',
      JSON.stringify({ ...settings, ...updatedSettings })
    )
    setSettings({ ...settings, ...updatedSettings })
  }

  useEffect(() => {
    const fetchSettings = async () => {
      const settingsString = await AsyncStorage.getItem('settings')
      const parsedSettings = JSON.parse(settingsString || '{}')
      // Merge default settings
      const settings = Object.assign(
        {},
        defaultSettings,
        { clientId: Crypto.randomUUID() }, // generate default clientId for first run
        parsedSettings
      )

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
