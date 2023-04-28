import React, { useEffect, useState } from 'react'
import {
  Separator,
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
import { Footer } from '../components/Footer'
import { SettingsContext } from '../contexts/settings'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

  return (
    <TamaguiProvider config={config}>
      <SettingsContext.Provider value={{ settings, updateSettings }}>
        <NodeContext.Provider value={node}>
          <Theme name={theme}>{media.gtMd ? <Desktop /> : <Mobile />}</Theme>
        </NodeContext.Provider>
      </SettingsContext.Provider>
    </TamaguiProvider>
  )
}

const Desktop = () => {
  return (
    <YStack f={1}>
      <Header />
      <XStack f={1} bc="$background">
        <Sidebar />
        <Separator vertical />
        <YStack p="$8" flexGrow={1}>
          <Slot screenOptions={screenOptions} />
        </YStack>
      </XStack>
      <Footer />
    </YStack>
  )
}

const Mobile = () => {
  return (
    <>
      <StatusBar hidden />
      <YStack f={1}>
        <Header />
        <YStack p="$3" flexGrow={1} bc="$background">
          <Slot screenOptions={screenOptions} />
        </YStack>
        <BottomTabs />
      </YStack>
    </>
  )
}
