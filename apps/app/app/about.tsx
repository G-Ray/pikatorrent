import React from 'react'
import { Button, Label, Paragraph, XStack, YStack, useMedia } from 'tamagui'
import { SessionsInfoDialog } from '../dialogs/SessionInfoDialog'
import { useSession } from '../hooks/useSession'

import { version } from '../package.json'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../constants/layout'
import { SettingLayout } from '../components/SettingLayout'
import { ExternalLink, Github, Heart } from '@tamagui/lucide-icons'
import { openExternalLink } from '../lib/links'

export default function About() {
  const { session } = useSession()
  const media = useMedia()

  return (
    <XStack f={1} jc="center" w="100%" px={media.gtXs ? '$8' : '$2'}>
      <YStack
        flexShrink={1}
        {...(media.gtXs && { w: DESKTOP_MAX_CONTENT_WIDTH })}
      >
        <SettingLayout>
          <Label htmlFor="pikaTorrentVersion">PikaTorrent version</Label>
          <Paragraph id="pikaTorrentVersion">{version}</Paragraph>
        </SettingLayout>
        <SettingLayout>
          <Label htmlFor="transmissionVersion">Transmission version</Label>
          <Paragraph id="transmissionVersion">{session['version']}</Paragraph>
        </SettingLayout>
        <XStack ml="auto">
          <SessionsInfoDialog session={session} />
        </XStack>
        <XStack mx="auto" mt="$8" gap="$2">
          <Heart color="$red9" />
          <Paragraph>Found a bug or want to suggest a feature ?</Paragraph>
          <Heart color="$red9" />
        </XStack>
        <XStack mx="auto" mt="$4">
          <Button
            icon={ExternalLink}
            iconAfter={Github}
            onPress={() =>
              openExternalLink(
                'https://www.github.com/G-Ray/pikatorrent/issues'
              )
            }
          >
            <Paragraph>Open an issue on Github</Paragraph>
          </Button>
        </XStack>
        <XStack mx="auto" mt="$4">
          <Button
            icon={ExternalLink}
            onPress={() => openExternalLink('https://discord.gg/6HxCV4aGdy')}
          >
            <Paragraph>Join us on Discord</Paragraph>
          </Button>
        </XStack>
      </YStack>
    </XStack>
  )
}
