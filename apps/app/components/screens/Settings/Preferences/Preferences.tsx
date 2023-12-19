import React from 'react'
import { H2, Paragraph, XStack, YStack, useMedia } from 'tamagui'

import { SearchEngines } from './SearchEngines'
import { ThemeSelector } from './ThemeSelector'
import { LanguageSelector } from './LanguageSelector'
import { useI18n } from '../../../../hooks/use18n'

export const Preferences = () => {
  const i18n = useI18n()

  return (
    <YStack ai="flex-start" space="$4">
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
