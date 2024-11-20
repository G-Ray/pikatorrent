import { Github, MessagesSquare, Moon, Sun } from '@tamagui/lucide-icons'
import { useThemeSetting } from '@tamagui/next-theme'
import {
  Button,
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  Separator,
  Switch,
  XStack,
  YStack,
  useMedia,
  useTheme,
  useThemeName,
} from 'tamagui'
import { Logo } from './Logo'
import Link from 'next/link'

const LogoWithText = () => {
  const theme = useThemeName()
  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <XStack ai="center">
        <Logo width={48} height={48} theme={theme} />
        <H2 color="$yellow9" fontWeight="600">
          Pika
        </H2>
        <H2 fontWeight="600">Torrent</H2>
      </XStack>
    </Link>
  )
}

export const Header = () => {
  const media = useMedia()

  if (media.xs) {
    return (
      <YStack my="$4" mx="$2">
        <XStack ai="center" jc={'space-between'}>
          <XStack ai="center">
            <LogoWithText />
          </XStack>
          <DarkModeToggle />
        </XStack>
        <Links />
      </YStack>
    )
  }

  return (
    <XStack jc={'space-between'} ai="center" my="$4" mx="$4">
      <XStack ai="center">
        <LogoWithText />
      </XStack>
      <XStack gap="$8">
        <Links />
        <DarkModeToggle />
      </XStack>
    </XStack>
  )
}

const Links = () => {
  return (
    <XStack gap="$2" f={1} flexWrap="wrap">
      <Link href="/docs" style={{ textDecoration: 'none' }}>
        <Button fontWeight={'bold'} bc="$backgroundTransparent">
          Docs
        </Button>
      </Link>
      <Link href="/faq" style={{ textDecoration: 'none' }}>
        <Button fontWeight={'bold'} bc="$backgroundTransparent">
          FAQ
        </Button>
      </Link>
      <Separator vertical />
      <Link
        href="https://discord.gg/6HxCV4aGdy"
        style={{ textDecoration: 'none' }}
        target="_blank"
      >
        <Button
          fontWeight={'bold'}
          icon={MessagesSquare}
          bc="$backgroundTransparent"
        >
          Discord
        </Button>
      </Link>
      <Link
        href="https://github.com/G-Ray/pikatorrent"
        style={{ textDecoration: 'none' }}
        target="_blank"
      >
        <Button fontWeight={'bold'} icon={Github} bc="$backgroundTransparent">
          Github
        </Button>
      </Link>
    </XStack>
  )
}

const DarkModeToggle = () => {
  const themeSettings = useThemeSetting()
  const theme = useThemeName()

  return (
    <XStack ai="center" space="$4">
      {theme === 'light' ? <Moon /> : <Sun />}
      <Separator minHeight={20} vertical />
      <Switch
        id="dark-theme-switch"
        checked={theme === 'dark'}
        onCheckedChange={() =>
          themeSettings.set(theme === 'dark' ? 'light' : 'dark')
        }
      >
        <Switch.Thumb animation="quick" />
      </Switch>
    </XStack>
  )
}
