import React, { useContext, useEffect, useRef, useState } from 'react'
import { H2, Paragraph, YStack } from 'tamagui'

import { SearchEngines } from './AppSettings/SearchEngines'
import { TorrentCardInfo } from './AppSettings/TorrentCardInfo'
import { SettingLayout } from './Nodes'
import { ThemeSelector } from '../../components/ThemeSelector'

export const Preferences = () => {
  return (
    <YStack ai="flex-start" space="$8">
      <H2>App settings</H2>

      <SettingLayout>
        <Paragraph>Dark mode</Paragraph>
        <ThemeSelector />
      </SettingLayout>

      <SearchEngines />
      <TorrentCardInfo />
    </YStack>
  )
}
