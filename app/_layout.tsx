import React from "react";
import {
  Separator,
  TamaguiProvider,
  Theme,
  useMedia,
  XStack,
  YStack,
} from "tamagui";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";

import config from "../tamagui.config";
import { Header, BottomTabs, Sidebar } from "../components";

export default function Layout() {
  const media = useMedia();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return <SplashScreen />;
  }

  return media.gtMd ? <Desktop /> : <Mobile />;
}

const Desktop = () => {
  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <YStack f={1}>
          <Header />
          <XStack f={1}>
            <Sidebar />
            <Separator vertical />
            <YStack p="$8" ai="center" jc="center" flexGrow={1}>
              <Slot />
            </YStack>
          </XStack>
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
};

const Mobile = () => {
  return (
    <TamaguiProvider config={config}>
      <StatusBar style="light" hidden />
      <Theme name="light">
        <YStack f={1}>
          <Header />
          <YStack p="$8" ai="center" jc="center" flexGrow={1}>
            <Slot />
          </YStack>
          <BottomTabs />
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
};
