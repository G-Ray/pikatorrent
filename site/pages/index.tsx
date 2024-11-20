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
import { Hero } from '@/components/Hero'
import Link from 'next/link'

export default function Home() {
  const { resolvedTheme: currentTheme } = useThemeSetting()

  return (
    <YStack ai="center" space px="$8" pb="$16">
      <YStack gap="$8" ai="center">
        <Hero theme={currentTheme} />

        <DownloadLinks isDarkThemeSwitchChecked={currentTheme === 'dark'} />
      </YStack>

      <Screenshots theme={currentTheme} />

      <YStack ai="center" space>
        <XStack ai="center" jc="center" w="100%"></XStack>
        <CLIInstall />
      </YStack>

      <Features />

      <DirectLinksExample />
    </YStack>
  )
}

const CLIInstall = () => {
  return (
    <YStack gap="$2">
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
  )
}

type DownloadLinksProps = {
  isDarkThemeSwitchChecked: boolean
}

const DownloadLinks = ({ isDarkThemeSwitchChecked }: DownloadLinksProps) => {
  return (
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
        <Link
          href={'https://github.com/G-Ray/pikatorrent/releases'}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <Button size="$2" icon={ExternalLink} bc="$backgroundTransparent">
            Alternative downloads (.zip, .exe, etc...)
          </Button>
        </Link>
      </YStack>
    </YStack>
  )
}

const Features = () => {
  return (
    <YStack mt="$16" gap="$4">
      <H2 fontWeight="bold" mb="$4" textAlign="center">
        Features
      </H2>
      <XStack gap="$2">
        <MonitorSmartphone color="$green9" style={{ flexShrink: 0 }} />
        <Paragraph>
          Available on Windows, Linux, Android, Node.js & the Web!
        </Paragraph>
      </XStack>
      <Separator />
      <XStack gap="$2">
        <Moon style={{ flexShrink: 0 }} />
        <Paragraph>A modern, simple UI, with dark mode support</Paragraph>
      </XStack>
      <Separator />
      <XStack gap="$2">
        <Share2 color="$blue9" style={{ flexShrink: 0 }} />
        <Paragraph>
          Share your torrents with your contacts, or the world, with a direct
          link
        </Paragraph>
      </XStack>
      <Separator />
      <XStack gap="$2">
        <Zap color="$yellow9" style={{ flexShrink: 0 }} />
        <Paragraph>
          Blazing fast download speeds, with low cpu & memory usage
        </Paragraph>
      </XStack>
      <Separator />
      <XStack gap="$2">
        <Tags color="$orange9" style={{ flexShrink: 0 }} />
        <Paragraph>Categorize your torrents with labels</Paragraph>
      </XStack>
      <Separator />
      <XStack gap="$2">
        <Filter color="$purple9" style={{ flexShrink: 0 }} />
        <Paragraph>
          Quickly filter your torrents with a fuzzy search & labels
        </Paragraph>
      </XStack>
      <Separator />
      <XStack gap="$2">
        <Search color="$blue9" style={{ flexShrink: 0 }} />
        <Paragraph>
          Edit your favorite search engines to quickly find torrents online
        </Paragraph>
      </XStack>
      <Separator />
      <XStack gap="$2">
        <LinkIcon color="$pink9" style={{ flexShrink: 0 }} />
        <Paragraph>
          Link the Android app with the desktop app to control your torrents
          remotely. No need to setup a server or register an account!
        </Paragraph>
      </XStack>
    </YStack>
  )
}

const DirectLinksExample = () => {
  return (
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
  )
}
