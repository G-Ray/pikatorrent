import React from 'react'
import { Label, Paragraph, XStack, YStack } from 'tamagui'
import { SessionsInfoDialog } from '../dialogs/SessionInfoDialog'
import { useSession } from '../hooks/useSession'

export default function About() {
  const session = useSession()

  return (
    <YStack>
      <XStack space w="100%" ai="center">
        <Label htmlFor="transmissionVersion">Transmission version</Label>
        <Paragraph id="transmissionVersion">{session['version']}</Paragraph>
        <SessionsInfoDialog session={session} />
      </XStack>
    </YStack>
  )
}
