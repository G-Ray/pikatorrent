import {
  NextThemeProvider,
  useRootTheme,
  useThemeSetting,
} from "@tamagui/next-theme";
import { AppProps } from "next/app";
import Script from "next/script";
import React, { useMemo, useState } from "react";
import {
  Separator,
  Stack,
  TamaguiProvider,
  Theme,
  ThemeName,
  useIsomorphicLayoutEffect,
  useTheme,
  useThemeName,
} from "tamagui";
import "@tamagui/font-inter/css/400.css";
import "@tamagui/font-inter/css/700.css";
import Head from "next/head";

import config from "../tamagui.config";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NextTamaguiProvider } from "@/tamagui/NextTamaguiProvider";

export default function App({ Component, pageProps }: AppProps) {
  // memo to avoid re-render on dark/light change
  const contents = useMemo(() => {
    return <Component {...pageProps} />;
  }, [pageProps, Component]);

  // because we do our custom getCSS() above, we disableInjectCSS here
  return (
    <>
      {/* @ts-ignore*/}
      <NextTamaguiProvider>
        <AppRoot contents={contents} />
      </NextTamaguiProvider>
    </>
  );
}

const AppRoot = ({ contents }: { contents: React.ReactNode }) => {
  const themeSetting = useThemeSetting();
  const [theme] = useRootTheme();
  const [clientTheme, setClientTheme] = useState<string | undefined>("light");

  useIsomorphicLayoutEffect(() => {
    setClientTheme(themeSetting.forcedTheme || themeSetting.current || theme);
  }, [themeSetting.current, themeSetting.resolvedTheme]);

  return (
    <Theme name={clientTheme == "dark" ? "dark" : "light"}>
      <Stack bc="$background" minHeight="100vh" minWidth="100%">
        <Head>
          <title>PikaTorrent</title>
          <meta
            name="description"
            content="The Torrent app for the 21st century ⚡"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Separator />
        <main style={{ flex: 1, flexGrow: 1 }}>{contents}</main>
        <Footer />
      </Stack>
    </Theme>
  );
};
