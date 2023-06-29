import React from 'react'
import { Label, Paragraph, XStack, YStack } from 'tamagui'
import { SessionsInfoDialog } from '../dialogs/SessionInfoDialog'
import { useSession } from '../hooks/useSession'

import { version } from '../package.json'
import { Platform } from 'react-native'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../constants/layout'

export default function About() {
  const { session } = useSession()

  return (
    <YStack maxWidth={DESKTOP_MAX_CONTENT_WIDTH}>
      <XStack space w="100%" {...(Platform.OS === 'web' && { ai: 'center' })}>
        <Label htmlFor="pikaTorrentVersion">PikaTorrent version</Label>
        <Paragraph id="pikaTorrentVersion">{version}</Paragraph>
      </XStack>
      <XStack space w="100%" {...(Platform.OS === 'web' && { ai: 'center' })}>
        <Label htmlFor="transmissionVersion">Transmission version</Label>
        <Paragraph id="transmissionVersion">{session['version']}</Paragraph>
      </XStack>
      <XStack ml="auto">
        <SessionsInfoDialog session={session} />
      </XStack>
    </YStack>
  )
}
