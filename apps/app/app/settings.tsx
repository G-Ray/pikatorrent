import React from 'react'
import { ScrollView } from 'tamagui'

import { Nodes } from './settings/Nodes'
import { Torrents } from './settings/Torrents'
import { Preferences } from './settings/Preferences'

export default function Settings() {
  return (
    <ScrollView maxHeight="100%" gap="$16">
      <Nodes />
      <Preferences />
      <Torrents />
    </ScrollView>
  )
}
