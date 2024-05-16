import React from 'react'

import { Nodes } from './Nodes/Nodes'
import { Preferences } from './Preferences/Preferences'
import { YStack, useMedia } from 'tamagui'
import { ScrollView } from 'react-native'
import { DESKTOP_MAX_CONTENT_WIDTH } from '../../../constants/layout'
import { Torrents } from './Torrents/Torrents'

export default function Settings() {
  const media = useMedia()

  return (
    <ScrollView>
      <YStack
        w="100%"
        alignSelf="center"
        flexShrink={1}
        gap="$8"
        pt="$4"
        pb="$4"
        px={media.gtXs ? '$8' : '$4'}
        {...(media.gtXs && { maxWidth: DESKTOP_MAX_CONTENT_WIDTH })}
      >
        <Preferences />
        <Torrents />
        <Nodes />
      </YStack>
    </ScrollView>
  )
}
