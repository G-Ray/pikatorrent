import React from 'react'

import { Nodes } from './settings/Nodes'
import { Torrents } from './settings/Torrents'
import { Preferences } from './settings/Preferences'
import { YStack } from 'tamagui'

export default function Settings() {
  return (
    <YStack gap="$16">
      <Nodes />
      <Preferences />
      <Torrents />
    </YStack>
  )
}
