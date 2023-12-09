import React, { useCallback, useContext, useEffect, useState } from 'react'
import {
  Separator,
  Stack,
  TamaguiProvider,
  Theme,
  useMedia,
  useThemeName,
  XStack,
  YStack,
} from 'tamagui'
import { useFonts } from 'expo-font'
import { Tabs, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import { View, useColorScheme } from 'react-native'
import * as Linking from 'expo-linking'
import * as SplashScreen from 'expo-splash-screen'

import config from '../tamagui.config'
import { Header, BottomTabs, Sidebar } from '../components'
import { Platform } from 'react-native'

import { ToastController } from '../components/ToastController'
import { TorrentsProvider } from '../contexts/TorrentsContext'
import { NodeProvider } from '../contexts/NodeContext'
import { PeerRequest } from '../components/PeerRequest'
import { SettingsContext, SettingsProvider } from '../contexts/SettingsContext'
import { TermsOfUseDialog } from '../dialogs/TermsOfUseDialog'
import isElectron from 'is-electron'
import { migrate } from '../lib/migrations'
import { Portal } from 'tamagui'

const screenOptions = {
  title: 'PikaTorrent',
  headerShown: false,
  // lazy: false FIXME: Status bar becomes transparent
}

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [loadedFonts] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  const [isMigrationExecuted, setIsMigrationExecuted] = useState()

  useEffect(() => {
    const executeMigrations = async () => {
      await migrate()
      setIsMigrationExecuted(true)
    }

    executeMigrations()
  }, [])

  const loaded = loadedFonts && isMigrationExecuted

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <TamaguiProvider config={config}>
        <NativeURLHandlers />
        <SettingsProvider>
          <ThemedLayout />
        </SettingsProvider>
      </TamaguiProvider>
    </View>
  )
}

const NativeURLHandlers = () => {
  const url = Linking.useURL()
  const router = useRouter()

  useEffect(() => {
    // In Electron, subscribe for redirects from main process
    if (!isElectron()) {
      return
    }

    window.electronAPI.onRedirect((_, route: string) => {
      router.push(route)
    })
  }, [router])

  useEffect(() => {
    if (!url || typeof url !== 'string') return
    const parsedUrl = new URL(url)
    // Redirect incoming magnet links to /add?magnet=
    // as expo-router does not support hash for now
    if (parsedUrl.protocol === 'magnet:') {
      router.replace('/add?magnet=' + encodeURIComponent(url))
    }

    // Handle pikatorrent deep link for magnet
    if (parsedUrl.protocol === 'pikatorrent:') {
      const afterHash = parsedUrl.hash.split('#')[1]
      if (/^magnet/.test(afterHash)) {
        router.replace('/add?magnet=' + encodeURIComponent(afterHash))
      }
    }

    // TODO for Android, handle content:
    // if (typeof url === 'string' && /^content:/.test(url)) {
    //   return <Redirect href={'/add?content=' + encodeURIComponent(url)} />
    // }
  }, [url, router])

  return null
}

const ToastContainer = ({ children }) => {
  const theme = useThemeName()
  return Platform.OS === 'web' ? (
    <Portal>
      <Theme name={theme}>{children}</Theme>
    </Portal>
  ) : (
    <>{children}</>
  )
}

const ThemedLayout = () => {
  const { settings } = useContext(SettingsContext)
  const colorSheme = useColorScheme()
  const theme = settings.theme === 'system' ? colorSheme : settings.theme
  const media = useMedia()

  // Update colorScheme (for scrollbar)
  useEffect(() => {
    if (Platform.OS !== 'web') {
      return
    }

    const rootElem = document.getElementById('root')
    if (rootElem) {
      rootElem.style.colorScheme = theme
    }
  }, [theme])

  return (
    <Theme name={theme}>
      <StatusBar
        translucent={false}
        style={theme === 'light' ? 'dark' : 'light'}
        backgroundColor={theme === 'dark' ? '#000' : '#fff'}
      />
      <PeerRequest />
      <TermsOfUseDialog />
      <NodeProvider>
        <ToastProvider>
          <ToastContainer>
            <ToastViewport
              flexDirection="column"
              top={'$4'}
              left={0}
              right={0}
            />
          </ToastContainer>
          <ToastController />

          <Stack
            f={1}
            {...(Platform.OS === 'web' ? { h: '100vh' } : {})}
            backgroundColor={theme === 'dark' ? 'black' : 'white'}
          >
            <TorrentsProvider>
              <Header />
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
      <YStack f={1}>
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
    <YStack f={1}>
      <Tabs
        screenOptions={screenOptions}
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        tabBar={BottomTabs}
      ></Tabs>
    </YStack>
  )
}
