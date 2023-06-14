import React from 'react'

// import { Nodes } from './settings/Nodes'
import { Torrents } from './settings/Torrents'
import { Preferences } from './settings/Preferences'
import { YStack, useMedia } from 'tamagui'
import { ScrollView } from 'react-native'

export default function Settings() {
  const media = useMedia()

  return (
    <ScrollView>
      <YStack gap="$16" mr={media.gtXs ? '$8' : '$0'}>
        {/* <Nodes /> */}
        <Preferences />
        {/* <Torrents /> */}
      </YStack>
    </ScrollView>
  )
}
