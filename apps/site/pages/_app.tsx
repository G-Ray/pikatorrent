import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { AppProps } from 'next/app'
// import Head from 'next/head'
import Script from 'next/script'
import React, { useMemo } from 'react'
import { Stack, TamaguiProvider, Theme } from 'tamagui'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'

import config from '../tamagui.config'

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
            <Stack bc="$background" minHeight="100vh" minWidth="100vw">
              {contents}
            </Stack>
          </Theme>
        </TamaguiProvider>
      </NextThemeProvider>
    </>
  )
}
