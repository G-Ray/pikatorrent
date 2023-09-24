import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { AppProps } from 'next/app'
// import Head from 'next/head'
import Script from 'next/script'
import React, { useMemo } from 'react'
import { Separator, Stack, TamaguiProvider, Theme } from 'tamagui'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'

import config from '../tamagui.config'
import { Footer } from '@/components/Footer'
import Head from 'next/head'
import { Header } from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme({ fallback: 'light' })

  // memo to avoid re-render on dark/light change
  const contents = useMemo(() => {
    return <Component {...pageProps} />
  }, [pageProps, Component])

  // because we do our custom getCSS() above, we disableInjectCSS here
  return (
    <>
      <Script
        id="tamagui-animations-mount"
        dangerouslySetInnerHTML={{
          // avoid flash of animated things on enter
          __html: `document.documentElement.classList.add('t_unmounted')`,
        }}
      />
      {/* @ts-ignore*/}
      <NextThemeProvider onChangeTheme={setTheme}>
        <TamaguiProvider
          config={config}
          disableInjectCSS
          disableRootThemeClass
          defaultTheme={theme}
        >
          <Theme name={theme}>
            <Stack bc="$background" minHeight="100vh" minWidth="100%">
              <Head>
                <title>PikaTorrent</title>
                <meta
                  name="description"
                  content="A modern, simple, connected, and electric BitTorrent app ⚡"
                />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <Header />
              <Separator />
              <main style={{ flex: 1, flexGrow: 1 }}>{contents}</main>
              <Footer />
            </Stack>
          </Theme>
        </TamaguiProvider>
      </NextThemeProvider>
    </>
  )
}
