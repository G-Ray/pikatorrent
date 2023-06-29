import React, { useContext, useState } from 'react'
import { Label, XStack, YStack, Button, TextArea, Paragraph } from 'tamagui'
import { SettingsContext } from '../../../contexts/SettingsContext'

import defaultSettings from '../../../defaultSettings.json'
import { Undo } from '@tamagui/lucide-icons'
import { SettingLayout } from '../Nodes'

export const SearchEngines = () => {
  const { settings, updateSettings } = useContext(SettingsContext)
  const [searchEnginesUrls, setSearchEnginesUrls] = useState(
    settings.searchEnginesUrls || defaultSettings.searchEnginesUrls
  )
  const hasChanged =
    JSON.stringify(searchEnginesUrls) !==
    JSON.stringify(settings.searchEnginesUrls)

  // Check every url is valid
  const isValid = searchEnginesUrls.every((url: string) => {
    try {
      new URL(url)
      return true
    } catch (e) {
      return false
    }
  })

  const handleSave = () => {
    updateSettings({
      ...settings,
      searchEnginesUrls,
      selectedSearchEngineUrl: searchEnginesUrls[0],
    })
  }

  const handleReset = () => {
    setSearchEnginesUrls(defaultSettings.searchEnginesUrls)
  }

  return (
    <YStack w="100%" gap="$4">
      <SettingLayout>
        <Paragraph minWidth={260}>Search engines urls (one per line)</Paragraph>
        <TextArea
          theme="yellow"
          w="100%"
          height={200}
          onChangeText={(text) => setSearchEnginesUrls(text.split('\n'))}
          value={searchEnginesUrls.join('\n')}
        />
        {!isValid && <Paragraph color="$red9">Invalid urls</Paragraph>}
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
          Reset
        </Button>
        <Button
          theme="yellow"
          onPress={handleSave}
          disabled={!isValid || !hasChanged}
          o={!isValid || !hasChanged ? 0.5 : 1}
        >
          Save
        </Button>
      </XStack>
    </YStack>
  )
}
