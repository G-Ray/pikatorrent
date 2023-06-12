import React from 'react'
import { Label, Paragraph, XStack, YStack } from 'tamagui'
import { SessionsInfoDialog } from '../dialogs/SessionInfoDialog'
import { useSession } from '../hooks/useSession'

import { version } from '../package.json'

export default function About() {
  const { session } = useSession()

  return (
    <YStack>
      <XStack space w="100%" ai="center">
        <Label htmlFor="transmissionVersion">PikaTorrent version</Label>
        <Paragraph id="transmissionVersion">{version}</Paragraph>
      </XStack>
      <XStack space w="100%" ai="center">
        <Label htmlFor="transmissionVersion">Transmission version</Label>
        <Paragraph id="transmissionVersion">{session['version']}</Paragraph>
      </XStack>
      <XStack>
        <SessionsInfoDialog session={session} />
      </XStack>
    </YStack>
  )
}
