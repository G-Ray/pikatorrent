import React, { useEffect, useState } from 'react'
import {
  Paragraph,
  Separator,
  Stack,
  TamaguiProvider,
  Theme,
  useMedia,
  XStack,
  YStack,
} from 'tamagui'
import { useFonts } from 'expo-font'
import { Slot, SplashScreen } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import * as Crypto from 'expo-crypto'

import config from '../tamagui.config'
import { Header, BottomTabs, Sidebar } from '../components'
import { SettingsContext } from '../contexts/settings'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Platform } from 'react-native'

import defaultSettings from '../defaultSettings.json'
import { ToastController } from '../components/ToastController'
import { TorrentsProvider } from '../contexts/TorrentsContext'
import { NodeProvider } from '../contexts/NodeContext'
import { PeerRequest } from '../components/PeerRequest'

const screenOptions = { title: 'PikaTorrent' }

export default function Layout() {
  const media = useMedia()
  const [settings, setSettings] = useState({})

  const fetchSettings = async () => {
    const settingsString = await AsyncStorage.getItem('settings')
    const parsedSettings = JSON.parse(settingsString || '{}')
    // Merge default settings
    const settings = Object.assign({}, defaultSettings, parsedSettings)

    if (!parsedSettings.clientId) {
      updateSettings({ clientId: Crypto.randomUUID() })
    }
    setSettings(settings)
  }

  const updateSettings = async (updatedSettings) => {
    await AsyncStorage.setItem(
      'settings',
      JSON.stringify({ ...settings, ...updatedSettings })
    )
    fetchSettings()
  }

  useEffect(() => {
    fetchSettings()
  }, [])

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return <SplashScreen />
  }

  const theme = settings.theme || 'light'

  return (
    <TamaguiProvider config={config}>
      <SettingsContext.Provider value={{ settings, updateSettings }}>
        <Theme name={theme}>
          <PeerRequest />
          <NodeProvider>
            <ToastProvider>
              <ToastViewport
                flexDirection="column"
                top={'$4'}
                left={0}
                right={0}
              />
              <ToastController />

              <Stack
                f={1}
                {...(Platform.OS === 'web' ? { h: '100vh' } : {})}
                bc="$background"
              >
                <StatusBar
                  translucent={false}
                  style={theme === 'dark' ? 'light' : 'dark'}
                  backgroundColor={theme === 'dark' ? '#151515' : '#f9f9f9'}
                />
                <Header />
                <TorrentsProvider>
                  {media.gtMd ? <Desktop /> : <Mobile />}
                </TorrentsProvider>
              </Stack>
            </ToastProvider>
          </NodeProvider>
        </Theme>
      </SettingsContext.Provider>
    </TamaguiProvider>
  )
}

const Desktop = () => {
  return (
    <XStack f={1}>
      <Sidebar />
      <Separator vertical />
      <YStack p="$8" f={1}>
        <Slot screenOptions={screenOptions} />
      </YStack>
    </XStack>
  )
}

const Mobile = () => {
  return (
    <>
      <YStack p="$3" f={1}>
        <Slot screenOptions={screenOptions} />
      </YStack>
      <YStack>
        <BottomTabs />
      </YStack>
    </>
  )
}
