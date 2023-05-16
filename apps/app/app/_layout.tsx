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
import { ScrollView } from 'react-native'

const screenOptions = { title: 'PikaTorrent' }

export default function Layout() {
  const media = useMedia()
  const [settings, setSettings] = useState({})
  const node = useNode({ nodeId: settings.selectedNodeId })

  const fetchSettings = async () => {
    const settingsString = await AsyncStorage.getItem('settings')
    const settings = settingsString != null ? JSON.parse(settingsString) : {}
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
      {(!settings.nodes || settings.nodes.length === 0) &&
        !isWebAndNodeDialogOpen && <WelcomeDialog />}
      <SettingsContext.Provider value={{ settings, updateSettings }}>
        <NodeContext.Provider value={node}>
          <Theme name={theme}>
            <Stack
              f={1}
              {...(Platform.OS === 'web' ? { h: '100vh' } : {})}
              bc="$background"
            >
              <StatusBar hidden />
              <Header />
              {media.gtMd ? <Desktop /> : <Mobile />}
            </Stack>
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
      <ScrollView>
        <YStack p="$8">
          <Slot screenOptions={screenOptions} />
        </YStack>
      </ScrollView>
    </XStack>
  )
}

const Mobile = () => {
  return (
    <>
      <ScrollView>
        <YStack p="$3">
          <Slot screenOptions={screenOptions} />
        </YStack>
      </ScrollView>
      <YStack>
        <BottomTabs />
      </YStack>
    </>
  )
}
