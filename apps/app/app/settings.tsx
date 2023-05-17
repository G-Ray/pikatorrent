import React from 'react'

import { Nodes } from './settings/Nodes'
import { Torrents } from './settings/Torrents'
import { Preferences } from './settings/Preferences'
import { YStack } from 'tamagui'
import { ScrollView } from 'react-native'

export default function Settings() {
  return (
    <ScrollView>
      <YStack gap="$16">
        <Nodes />
        <Preferences />
        <Torrents />
      </YStack>
    </ScrollView>
  )
}
