import React from 'react'
import { YStack } from 'tamagui'

import { Nodes } from './settings/Nodes'
import { Torrents } from './settings/Torrents'

export default function Settings() {
  return (
    <YStack>
      <Nodes />
      <Torrents />
    </YStack>
  )
}
