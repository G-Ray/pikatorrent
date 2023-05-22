import Head from 'next/head'
import {
  Button,
  Card,
  Label,
  Paragraph,
  Separator,
  Switch,
  Theme,
  XStack,
  YStack,
} from 'tamagui'
import Link from 'next/link'
import { ExternalLink, Zap } from '@tamagui/lucide-icons'
import { useThemeSetting } from '@tamagui/next-theme'
import { useEffect, useState } from 'react'

import { Screenshots } from '../components/Screenshots'
import { Header } from '@/components/Header'

export default function Home() {
  const [isDarkThemeSwitchChecked, setIsDarkThemeSwitchChecked] =
    useState(false)
  const { set: setTheme, resolvedTheme: currentTheme } = useThemeSetting()

  useEffect(() => {
    setIsDarkThemeSwitchChecked(currentTheme === 'dark')
  }, [currentTheme])

  return (
    <>
      <Head>
        <title>PikaTorrent</title>
        <meta name="description" content="PikaTorrent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <YStack ai="center" space p="$8" pb="$16">
          <YStack gap="$8" ai="center">
            <Header theme={currentTheme} />

            <Link
              href="https://app.pikatorrent.com"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button
                theme="yellow"
                icon={Zap}
                size="$5"
                br={50}
                iconAfter={ExternalLink}
              >
                Open app
              </Button>
            </Link>

            <XStack ai="center" space="$4">
              <Label justifyContent="flex-end" htmlFor="dark-theme-switch">
                Dark mode
              </Label>
              <Separator minHeight={20} vertical />
              <Switch
                id="dark-theme-switch"
                checked={isDarkThemeSwitchChecked}
                onCheckedChange={() =>
                  setTheme(currentTheme === 'light' ? 'dark' : 'light')
                }
              >
                <Switch.Thumb animation="quick" />
              </Switch>
            </XStack>
          </YStack>

          <Screenshots theme={currentTheme} />

          <YStack ai="center" space>
            <Paragraph>
              Do you use Linux or Windows ? <br />
              Do you feel at ease with the terminal and nodejs ? <br /> Try the
              alpha version now with:
            </Paragraph>
            <Theme inverse>
              <Card bordered px="$4" py="$2" elevate size="$4">
                <pre>
                  npm install -g pikatorrent <br />
                  pikatorrent node
                </pre>
              </Card>
            </Theme>
            <Paragraph>Then follow the instructions.</Paragraph>
          </YStack>
        </YStack>
      </main>
    </>
  )
}
