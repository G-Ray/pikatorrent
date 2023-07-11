import React from 'react'
import { Label, Paragraph, XStack, YStack, useMedia } from 'tamagui'
import { SessionsInfoDialog } from '../dialogs/SessionInfoDialog'
import { useSession } from '../hooks/useSession'

import { version } from '../package.json'
import { Platform } from 'react-native'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../constants/layout'
import { SettingLayout } from '../components/SettingLayout'

export default function About() {
  const { session } = useSession()
  const media = useMedia()

  return (
    <XStack f={1} jc="center" w="100%">
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
      </YStack>
    </XStack>
  )
}
