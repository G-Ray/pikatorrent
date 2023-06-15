import React, { useEffect, useState } from 'react'
import {
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

import config from '../tamagui.config'
import { Header, BottomTabs, Sidebar } from '../components'
import { NodeContext } from '../contexts/node'
import { useLocalNode } from '../hooks/useLocalNode'
import { SettingsContext } from '../contexts/settings'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UnsupportedBrowserDialog } from '../dialogs/UnsupportedBrowserDialog'
import { Platform } from 'react-native'

import defaultSettings from '../defaultSettings.json'
import { ToastController } from '../components/ToastController'
import { TorrentsProvider } from '../contexts/TorrentsContext'

const screenOptions = { title: 'PikaTorrent' }

export default function Layout() {
  const media = useMedia()
  const [settings, setSettings] = useState({})
  const node = useLocalNode({ nodeId: settings.selectedNodeId })

  const fetchSettings = async () => {
    const settingsString = await AsyncStorage.getItem('settings')
    // Merge default settings
    const settings = Object.assign(
      {},
      defaultSettings,
      JSON.parse(settingsString || '{}')
    )

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

  const isWebAndNodeDialogOpen =
    Boolean(Platform.OS === 'web') &&
    new URLSearchParams(document.location.search).get('nodeId')

  return (
    <TamaguiProvider config={config}>
      {node.isUnsupportedBrowser && <UnsupportedBrowserDialog />}
      <SettingsContext.Provider value={{ settings, updateSettings }}>
        <NodeContext.Provider value={node}>
          <Theme name={theme}>
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
                <StatusBar hidden />
                <Header />
                <TorrentsProvider>
                  {media.gtMd ? <Desktop /> : <Mobile />}
                </TorrentsProvider>
              </Stack>
            </ToastProvider>
          </Theme>
        </NodeContext.Provider>
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
