import React from 'react'
import { H2, Paragraph, XStack, YStack, useMedia } from 'tamagui'

import { SearchEngines } from './AppSettings/SearchEngines'
import { TorrentCardInfo } from './AppSettings/TorrentCardInfo'
import { SettingLayout } from './Nodes'
import { ThemeSelector } from '../../components/ThemeSelector'

export const Preferences = () => {
  const media = useMedia()

  return (
    <YStack ai="flex-start" space="$8">
      <H2>App settings</H2>

      <SettingLayout>
        <Paragraph>Dark mode</Paragraph>
        <XStack w={media.gtXs ? 180 : '100%'}>
          <ThemeSelector />
        </XStack>
      </SettingLayout>

      <SearchEngines />
      <TorrentCardInfo />
    </YStack>
  )
}
