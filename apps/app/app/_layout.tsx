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

import config from '../tamagui.config'
import { Header, BottomTabs, Sidebar } from '../components'
import { NodeContext } from '../contexts/node'
import { useNode } from '../hooks/useNode'
import { SettingsContext } from '../contexts/settings'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UnsupportedBrowserDialog } from '../dialogs/UnsupportedBrowserDialog'
import { WelcomeDialog } from '../dialogs/WelcomeDialog'
import { Platform } from 'react-native'

import defaultSettings from '../defaultSettings.json'
import { useLocalNode } from '../hooks/useLocalNode'

const screenOptions = { title: 'PikaTorrent' }

export default function Layout() {
  const media = useMedia()
  const [settings, setSettings] = useState({})
  const node = useNode({ nodeId: settings.selectedNodeId })

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
    await AsyncStorage.setItem('settings', JSON.stringify(updatedSettings))
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
          <LocalNodeSetup />
          <Theme name={theme}>
            <Stack
              f={1}
              {...(Platform.OS === 'web' ? { h: '100vh' } : {})}
              bc="$background"
            >
              <StatusBar hidden />
              {(!settings.nodes || (settings.nodes || []).length === 0) &&
                !isWebAndNodeDialogOpen && <WelcomeDialog />}
              <Header />
              {media.gtMd ? <Desktop /> : <Mobile />}
            </Stack>
          </Theme>
        </NodeContext.Provider>
      </SettingsContext.Provider>
    </TamaguiProvider>
  )
}

const LocalNodeSetup = () => {
  useLocalNode()

  return null
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
