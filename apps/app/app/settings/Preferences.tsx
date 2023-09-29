import React from 'react'
import { H2, Paragraph, XStack, YStack, useMedia } from 'tamagui'

import { SearchEngines } from './AppSettings/SearchEngines'
import { ThemeSelector } from '../../components/ThemeSelector'
import { LanguageSelector } from './LanguageSelector'
import i18n from '../../i18n'

export const Preferences = () => {
  return (
    <YStack ai="flex-start" space="$8">
      <H2>{i18n.t('settings.app.title')}</H2>

      <XStack jc="space-between" w="100%">
        <Paragraph>{i18n.t('settings.app.theme')}</Paragraph>
        <XStack minWidth={180}>
          <ThemeSelector />
        </XStack>
      </XStack>
      <XStack jc="space-between" w="100%">
        <Paragraph>{i18n.t('settings.app.language')}</Paragraph>
        <XStack w={180}>
          <LanguageSelector />
        </XStack>
      </XStack>

      <SearchEngines />
    </YStack>
  )
}
