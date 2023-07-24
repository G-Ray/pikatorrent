import React from 'react'

import { Nodes } from './settings/Nodes'
// import { Torrents } from './settings/Torrents'
import { Preferences } from './settings/Preferences'
import { XStack, YStack, useMedia } from 'tamagui'
import { ScrollView } from 'react-native'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../constants/layout'
import { Torrents } from './settings/Torrents'

export default function Settings() {
  const media = useMedia()

  return (
    <ScrollView>
      <XStack f={1} jc="center" w="100%" pb="$8">
        <YStack
          flexShrink={1}
          gap="$16"
          {...(media.gtXs && { w: DESKTOP_MAX_CONTENT_WIDTH })}
        >
          <Nodes />
          <Preferences />
          <Torrents />
        </YStack>
      </XStack>
    </ScrollView>
  )
}
