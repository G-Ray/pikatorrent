import React from 'react'
import { Button, Paragraph, XStack, YStack, useMedia } from 'tamagui'
import { useSession } from '../../../hooks/useSession'

import { version } from '../../../package.json'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../../../constants/layout'
import { ExternalLink, Github, MessageSquare } from '@tamagui/lucide-icons'
import { openExternalLink } from '../../../lib/links'
import { StatsDialog } from '../../dialogs/StatsDialog'
import { useI18n } from '../../../hooks/use18n'
import { SessionsInfoDialog } from '../../dialogs/SessionInfoDialog'

export default function About() {
  const i18n = useI18n()
  const { session } = useSession()
  const media = useMedia()

  return (
    <YStack
      w="100%"
      flexShrink={1}
      gap="$8"
      p="$4"
      px={media.gtXs ? '$8' : '$4'}
      alignSelf="center"
      flex={1}
      {...(media.gtXs && { maxWidth: DESKTOP_MAX_CONTENT_WIDTH })}
    >
      <YStack gap="$4">
        <XStack jc="space-between">
          <Paragraph>{i18n.t('about.pikatorrentVersion')}</Paragraph>
          <Paragraph id="pikaTorrentVersion">{version}</Paragraph>
        </XStack>
        <XStack jc="space-between">
          <Paragraph>{i18n.t('about.transmissionVersion')}</Paragraph>
          <Paragraph id="transmissionVersion">{session['version']}</Paragraph>
        </XStack>
      </YStack>
      <YStack gap="$4">
        <StatsDialog />
        <SessionsInfoDialog session={session} />
      </YStack>
      <YStack gap="$4">
        <XStack mx="auto" mt="$8" gap="$2">
          <Paragraph>{i18n.t('about.reportBugOrFeature')}</Paragraph>
        </XStack>
        <Button
          icon={ExternalLink}
          iconAfter={Github}
          onPress={() =>
            openExternalLink('https://www.github.com/G-Ray/pikatorrent/issues')
          }
        >
          <Paragraph>{i18n.t('about.githubLinkDescription')}</Paragraph>
        </Button>
        <Button
          icon={ExternalLink}
          iconAfter={MessageSquare}
          onPress={() => openExternalLink('https://discord.gg/6HxCV4aGdy')}
        >
          <Paragraph>{i18n.t('about.discordLinkDescription')}</Paragraph>
        </Button>
      </YStack>
    </YStack>
  )
}
