import React from 'react'
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

export default function Layout() {
  const media = useMedia()
  const node = useNode()

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return <SplashScreen />
  }

  return (
    <TamaguiProvider config={config}>
      <NodeContext.Provider value={node}>
        <Theme name="light">{media.gtMd ? <Desktop /> : <Mobile />}</Theme>
      </NodeContext.Provider>
    </TamaguiProvider>
  )
}

const Desktop = () => {
  return (
    <YStack f={1}>
      <Header />
      <XStack f={1}>
        <Sidebar />
        <Separator vertical />
        <YStack p="$8" flexGrow={1}>
          <Slot />
        </YStack>
      </XStack>
      <Footer />
    </YStack>
  )
}

const Mobile = () => {
  return (
    <>
      <StatusBar style="light" hidden />
      <YStack f={1}>
        <Header />
        <YStack p="$3" flexGrow={1}>
          <Slot />
        </YStack>
        <BottomTabs />
      </YStack>
    </>
  )
}
