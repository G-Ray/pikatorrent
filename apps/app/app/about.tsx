import React from 'react'
import { Button, Label, Paragraph, XStack, YStack, useMedia } from 'tamagui'
import { SessionsInfoDialog } from '../dialogs/SessionInfoDialog'
import { useSession } from '../hooks/useSession'

import { version } from '../package.json'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../constants/layout'
import { SettingLayout } from '../components/SettingLayout'
import { ExternalLink, Github, Heart } from '@tamagui/lucide-icons'
import { openExternalLink } from '../lib/links'
import i18n from '../i18n'

export default function About() {
  const { session } = useSession()
  const media = useMedia()

  return (
    <XStack f={1} jc="center" w="100%" px={media.gtXs ? '$8' : '$2'}>
      <YStack
        flexShrink={1}
        gap="$4"
        {...(media.gtXs && { w: DESKTOP_MAX_CONTENT_WIDTH })}
      >
        <SettingLayout>
          <Label htmlFor="pikaTorrentVersion">
            {i18n.t('about.pikatorrentVersion')}
          </Label>
          <Paragraph id="pikaTorrentVersion">{version}</Paragraph>
        </SettingLayout>
        <SettingLayout>
          <Label htmlFor="transmissionVersion">
            {i18n.t('about.transmissionVersion')}
          </Label>
          <Paragraph id="transmissionVersion">{session['version']}</Paragraph>
        </SettingLayout>
        <XStack ml="auto">
          <SessionsInfoDialog session={session} />
        </XStack>
        <XStack mx="auto" mt="$8" gap="$2">
          <Heart color="$red9" />
          <Paragraph>{i18n.t('about.reportBugOrFeature')}</Paragraph>
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
            <Paragraph>{i18n.t('about.githubLinkDescription')}</Paragraph>
          </Button>
        </XStack>
        <XStack mx="auto" mt="$4">
          <Button
            icon={ExternalLink}
            onPress={() => openExternalLink('https://discord.gg/6HxCV4aGdy')}
          >
            <Paragraph>{i18n.t('about.discordLinkDescription')}</Paragraph>
          </Button>
        </XStack>
      </YStack>
    </XStack>
  )
}
