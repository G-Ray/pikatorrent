import React, { useContext, useEffect } from 'react'
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
import { SplashScreen, Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import { useColorScheme } from 'react-native'

import config from '../tamagui.config'
import { Header, BottomTabs, Sidebar } from '../components'
import { Platform } from 'react-native'

import { ToastController } from '../components/ToastController'
import { TorrentsProvider } from '../contexts/TorrentsContext'
import { NodeProvider } from '../contexts/NodeContext'
import { PeerRequest } from '../components/PeerRequest'
import { SettingsContext, SettingsProvider } from '../contexts/SettingsContext'
import { TermsOfUseDialog } from '../dialogs/TermsOfUseDialog'

const screenOptions = {
  title: 'PikaTorrent',
  headerShown: false,
}

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (loaded) {
      // Hide the splash screen after the fonts have loaded and the
      // UI is ready.
      SplashScreen.hideAsync()
    }
  }, [loaded])

  return (
    <TamaguiProvider config={config}>
      <SettingsProvider>
        <ThemedLayout />
      </SettingsProvider>
    </TamaguiProvider>
  )
}

const ThemedLayout = () => {
  const { settings } = useContext(SettingsContext)
  const colorSheme = useColorScheme()
  const theme = settings.theme === 'system' ? colorSheme : settings.theme
  const media = useMedia()

  return (
    <Theme name={theme}>
      <PeerRequest />
      <TermsOfUseDialog />
      <NodeProvider>
        <ToastProvider>
          <ToastViewport flexDirection="column" top={'$4'} left={0} right={0} />
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
  )
}

const Desktop = () => {
  return (
    <XStack f={1}>
      <Sidebar />
      <Separator vertical />
      <YStack px="$8" f={1}>
        <Tabs
          screenOptions={screenOptions}
          sceneContainerStyle={{ backgroundColor: 'transparent' }}
          tabBar={() => null}
        ></Tabs>
      </YStack>
    </XStack>
  )
}

const Mobile = () => {
  return (
    <YStack pt="$2" px="$2" f={1}>
      <Tabs
        screenOptions={screenOptions}
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        tabBar={BottomTabs}
      ></Tabs>
    </YStack>
  )
}
