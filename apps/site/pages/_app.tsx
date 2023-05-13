import '@/styles/globals.css'
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import React, { useMemo, useState } from 'react'
import { TamaguiProvider, Theme, XStack } from 'tamagui'

import config from '../tamagui.config'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme()

  // memo to avoid re-render on dark/light change
  const contents = useMemo(() => {
    return <Component {...pageProps} />
  }, [pageProps])

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
          <Theme name={theme}>{contents}</Theme>
        </TamaguiProvider>
      </NextThemeProvider>
    </>
  )
}
