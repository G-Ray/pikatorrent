import Head from 'next/head'
import {
  Button,
  Card,
  H2,
  ListItem,
  Paragraph,
  Separator,
  Switch,
  Theme,
  XStack,
  YGroup,
  YStack,
} from 'tamagui'
import {
  Download,
  ExternalLink,
  MonitorSmartphone,
  Moon,
  Sun,
  Link as LinkIcon,
  Magnet,
  Zap,
  Tags,
  Filter,
  Search,
  Share2,
} from '@tamagui/lucide-icons'
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
              <Paragraph fontWeight={'600'}>Get PikaTorrent now :</Paragraph>
              <XStack space>
                <YStack>
                  <Paragraph textAlign="center">Windows</Paragraph>
                  <Link href="https://apps.microsoft.com/store/detail/9N9GJQ9BDJW3?launch=true&mode=mini">
                    <img
                      height={48}
                      alt="Download on Windows Store"
                      src={
                        isDarkThemeSwitchChecked
                          ? 'https://get.microsoft.com/images/en-US%20light.svg'
                          : 'https://get.microsoft.com/images/en-US%20dark.svg'
                      }
                    />
                  </Link>
                </YStack>
                <YStack>
                  <Paragraph textAlign="center">Linux</Paragraph>
                  <Link href="https://flathub.org/apps/com.pikatorrent.PikaTorrent">
                    <img
                      height={48}
                      alt="Download on Flathub"
                      src={
                        isDarkThemeSwitchChecked
                          ? 'https://dl.flathub.org/assets/badges/flathub-badge-i-en.png'
                          : 'https://dl.flathub.org/assets/badges/flathub-badge-en.png'
                      }
                    />
                  </Link>
                </YStack>
              </XStack>
              <YStack>
                <Paragraph textAlign="center">Android</Paragraph>
                <Link href="https://play.google.com/store/apps/details?id=com.gray.pikatorrent&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                  <img
                    height={72}
                    alt="Get it on Google Play"
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  />
                </Link>
              </YStack>

              <YStack ai="center">
                <Paragraph mb="$4">
                  <Link
                    href={'https://github.com/G-Ray/pikatorrent/releases'}
                    target="_blank"
                  >
                    Alternative downloads (.zip, .exe, etc...)
                  </Link>
                </Paragraph>

                <Link href="https://discord.gg/6HxCV4aGdy" target="_blank">
                  <img
                    height={24}
                    src="https://img.shields.io/badge/Join_us_on_discord-gray?logo=discord"
                  />
                </Link>
              </YStack>
            </YStack>
          </YStack>

          <Screenshots theme={currentTheme} />

          <YStack ai="center" space>
            <XStack ai="center" jc="center" w="100%">
              <iframe
                src="https://ghbtns.com/github-btn.html?user=G-Ray&repo=pikatorrent&type=star&count=true&size=large"
                frameborder="0"
                scrolling="0"
                width="170"
                height="30"
                title="GitHub"
              ></iframe>
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
          <YStack mt="$12" gap="$4">
            <H2 fontWeight="bold" mb="$4" textAlign="center">
              Features
            </H2>
            <XStack gap="$2">
              <MonitorSmartphone color="$green9" />
              <Paragraph>
                Available on Windows, Linux, Android, Node.js & the Web!
              </Paragraph>
            </XStack>
            <Separator />
            <XStack gap="$2">
              <Moon />
              <Paragraph>A modern, simple UI, with dark mode support</Paragraph>
            </XStack>
            <Separator />
            <XStack gap="$2">
              <Share2 color="$blue9" />
              <Paragraph>
                Share your torrents with your contacts, or the world, with a
                direct link
              </Paragraph>
            </XStack>
            <Separator />
            <XStack gap="$2">
              <Zap color="$yellow9" />
              <Paragraph>
                Blazing fast download speeds, with low cpu & memory usage
              </Paragraph>
            </XStack>
            <Separator />
            <XStack gap="$2">
              <Tags color="$orange9" />
              <Paragraph>Categorize your torrents with labels</Paragraph>
            </XStack>
            <Separator />
            <XStack gap="$2">
              <Filter color="$purple9" />
              <Paragraph>
                Quickly filter your torrents with a fuzzy search & labels
              </Paragraph>
            </XStack>
            <Separator />
            <XStack gap="$2">
              <Search color="$blue9" />
              <Paragraph>
                Edit your favorite search engines to quickly find torrents
                online
              </Paragraph>
            </XStack>
            <Separator />
            <XStack gap="$2">
              <LinkIcon color="$pink9" />
              <Paragraph>
                Link the Android app with the desktop app to control your
                torrents remotely. No need to setup a server or register an
                account!
              </Paragraph>
            </XStack>
          </YStack>
          <YStack mt="$14" gap="$4" ai="center">
            <H2 fontWeight="bold" mb="$4">
              Free torrents
            </H2>
            <Paragraph>Direct links examples to free movies</Paragraph>
            <YGroup alignSelf="center" bordered width={240} size="$4">
              <YGroup.Item>
                <ListItem>
                  <Link
                    href={
                      'https://app.pikatorrent.com/add#magnet:?xt=urn:btih:c9e15763f722f23e98a29decdfae341b98d53056&dn=Cosmos+Laundromat&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fcosmos-laundromat.torrent'
                    }
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                  >
                    <Button icon={Download}>Cosmos Laundromat</Button>
                  </Link>
                </ListItem>
              </YGroup.Item>
              <YGroup.Item>
                <ListItem>
                  <Link
                    href={
                      'https://app.pikatorrent.com/add#magnet:?xt=urn:btih:209c8226b299b308beaf2b9cd3fb49212dbd13ec&dn=Tears+of+Steel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Ftears-of-steel.torrent'
                    }
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                  >
                    <Button icon={Download}>Tears of Steel</Button>
                  </Link>
                </ListItem>
              </YGroup.Item>
              <YGroup.Item>
                <ListItem>
                  <Link
                    href={
                      'https://app.pikatorrent.com/add#magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
                    }
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                  >
                    <Button icon={Download}>Sintel</Button>
                  </Link>
                </ListItem>
              </YGroup.Item>
              <YGroup.Item>
                <ListItem>
                  <Link
                    href={
                      'https://app.pikatorrent.com/add#magnet:?xt=urn:btih:dd8255ecdc7ca55fb0bbf81323d87062db1f6d1c&dn=Big+Buck+Bunny&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fbig-buck-bunny.torrent'
                    }
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                  >
                    <Button icon={Download}>Big Buck Bunny</Button>
                  </Link>
                </ListItem>
              </YGroup.Item>
            </YGroup>
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
            <Link href={'https://discord.gg/6HxCV4aGdy'} target="_blank">
              Discord
            </Link>
          </Paragraph>
        </XStack>
      </footer>
    </>
  )
}
