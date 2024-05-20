import React, { useContext, useEffect, useState } from 'react'
import { XStack, YStack, Button, TextArea, Paragraph, useMedia } from 'tamagui'
import { SettingsContext } from '../../../../contexts/SettingsContext'

import defaultSettings from '../../../../defaultSettings.json'
import { Undo } from '@tamagui/lucide-icons'
import { SettingLayout } from '../SettingLayout'
import { useI18n } from '../../../../hooks/use18n'

export const SearchEngines = () => {
  const i18n = useI18n()
  const media = useMedia()
  const { settings, updateSettings } = useContext(SettingsContext)
  const [searchEnginesUrls, setSearchEnginesUrls] = useState(
    settings.searchEnginesUrls
  )

  useEffect(() => {
    setSearchEnginesUrls(settings.searchEnginesUrls)
  }, [settings.searchEnginesUrls])

  const hasChanged =
    JSON.stringify(searchEnginesUrls) !==
    JSON.stringify(settings.searchEnginesUrls)

  // Check every url is valid
  const isValid = searchEnginesUrls.every((url: string) => {
    try {
      if (!url.includes('%s')) return false
      new URL(url)
      return true
    } catch (e) {
      return false
    }
  })

  const handleSave = () => {
    updateSettings({
      searchEnginesUrls,
      selectedSearchEngineUrl: searchEnginesUrls[0],
    })
  }

  const handleReset = () => {
    setSearchEnginesUrls(defaultSettings.searchEnginesUrls)
  }

  return (
    <YStack w="100%" gap="$4">
      <SettingLayout vertical={!media.gtXs}>
        <YStack>
          <Paragraph minWidth={260}>
            {i18n.t('settings.app.searchEngines')}
          </Paragraph>
          <Paragraph fontSize={'$2'} color="$gray10">
            {i18n.t('settings.app.searchEnginesInstructions')}
          </Paragraph>
        </YStack>
        <YStack f={1}>
          <TextArea
            theme="yellow"
            w="100%"
            height={200}
            onChangeText={(text) => setSearchEnginesUrls(text.split('\n'))}
            value={searchEnginesUrls.join('\n')}
          />
          {!isValid && (
            <Paragraph color="$red9">
              {i18n.t('settings.app.invalidUrls')}
            </Paragraph>
          )}
        </YStack>
      </SettingLayout>
      <XStack gap="$2" alignSelf="flex-end">
        <Button
          icon={Undo}
          onPress={handleReset}
          disabled={
            JSON.stringify(searchEnginesUrls) ===
            JSON.stringify(defaultSettings.searchEnginesUrls)
          }
          o={
            JSON.stringify(searchEnginesUrls) ===
            JSON.stringify(defaultSettings.searchEnginesUrls)
              ? 0.5
              : 1
          }
        >
          {i18n.t('settings.app.reset')}
        </Button>
        <Button
          theme="yellow"
          borderColor={'$yellow7'}
          onPress={handleSave}
          disabled={!isValid || !hasChanged}
          o={!isValid || !hasChanged ? 0.5 : 1}
        >
          {i18n.t('settings.app.save')}
        </Button>
      </XStack>
    </YStack>
  )
}
