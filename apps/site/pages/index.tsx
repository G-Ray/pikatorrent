import Head from 'next/head'
import {
  Button,
  Card,
  Paragraph,
  Separator,
  Switch,
  Theme,
  XStack,
  YStack,
} from 'tamagui'
import { Download, Moon, Sun } from '@tamagui/lucide-icons'
import { useThemeSetting } from '@tamagui/next-theme'
import { useEffect, useState } from 'react'

import { Screenshots } from '../components/Screenshots'
import { Header } from '@/components/Header'
import Link from 'next/link'

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
        <meta
          name="description"
          content="A modern, simple, connected, and electric BitTorrent app ⚡"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <XStack>
          <XStack ai="center" space="$4" marginLeft="auto" pt={'$4'} pr={'$4'}>
            {isDarkThemeSwitchChecked ? <Moon /> : <Sun />}
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
        </XStack>

        <YStack ai="center" space px="$8" pb="$16">
          <YStack gap="$8" ai="center">
            <Header theme={currentTheme} />

            <YStack ai="center" gap="$4">
              <Paragraph fontWeight={'600'}>
                Try PikaTorrent v0.4.1 now :
              </Paragraph>
              <XStack space>
                <Link
                  href={
                    'https://github.com/G-Ray/pikatorrent/releases/download/v0.4.1/pikatorrent-win32-x64-0.4.1.zip'
                  }
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    theme="yellow"
                    borderColor={'$yellow9'}
                    icon={Download}
                    size="$5"
                    br={50}
                  >
                    Windows
                  </Button>
                </Link>
                <Link
                  href={
                    'https://github.com/G-Ray/pikatorrent/releases/download/v0.4.1/pikatorrent-linux-x64-0.4.1.zip'
                  }
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    theme="yellow"
                    borderColor={'$yellow9'}
                    icon={Download}
                    size="$5"
                    br={50}
                  >
                    Linux
                  </Button>
                </Link>
              </XStack>
              <a href="https://play.google.com/store/apps/details?id=com.gray.pikatorrent&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img
                  width={200}
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </a>

              <Link href="https://discord.gg/6HxCV4aGdy">
                <img
                  height={24}
                  src="https://img.shields.io/badge/Join_us_on_discord-gray?logo=discord"
                />
              </Link>
            </YStack>
          </YStack>

          <Screenshots theme={currentTheme} />

          <YStack ai="center" space>
            <XStack>
              <a
                href="https://www.producthunt.com/posts/pikatorrent?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-pikatorrent"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=403326&theme=light"
                  alt="PikaTorrent - A&#0032;modern&#0044;&#0032;simple&#0044;&#0032;connected&#0044;&#0032;and&#0032;electric&#0032;BitTorrent&#0032;app&#0032;⚡ | Product Hunt"
                  style={{ width: 240 }}
                />
              </a>
            </XStack>
            <Paragraph>Prefer to manage your torrents on a server ?</Paragraph>
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
      <footer>
        <XStack jc="center" py="$4" gap="$8">
          <Paragraph>
            <Link href={'/privacy-policy'} target="_blank">
              Privacy Policy
            </Link>
          </Paragraph>
          <Paragraph>
            <Link href={'https://github.com/G-Ray/pikatorrent'} target="_blank">
              Github
            </Link>
          </Paragraph>

          <Paragraph>
            <Link href={'https://discord.gg/6HxCV4aGdy'}>Discord</Link>
          </Paragraph>
        </XStack>
      </footer>
    </>
  )
}
