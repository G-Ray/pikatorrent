import React from 'react'
import { H2, Paragraph, XStack, YStack, useMedia } from 'tamagui'
import isElectron from 'is-electron'

import { SearchEngines } from './AppSettings/SearchEngines'
import { SettingLayout } from '../../components/SettingLayout'
import { ThemeSelector } from '../../components/ThemeSelector'
import { LanguageSelector } from './LanguageSelector'
import i18n from '../../i18n'

export const Preferences = () => {
  const media = useMedia()

  return (
    <YStack ai="flex-start" space="$8">
      <H2>{i18n.t('settings.app.title')}</H2>

      <SettingLayout>
        <Paragraph>{i18n.t('settings.app.theme')}</Paragraph>
        <XStack w={media.gtXs ? 180 : '100%'}>
          <ThemeSelector />
        </XStack>
      </SettingLayout>
      {isElectron() && (
        <SettingLayout>
          <Paragraph>{i18n.t('settings.app.language')}</Paragraph>
          <XStack w={media.gtXs ? 180 : '100%'}>
            <LanguageSelector />
          </XStack>
        </SettingLayout>
      )}

      <SearchEngines />
    </YStack>
  )
}
