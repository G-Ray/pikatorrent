import React, { useContext, useState } from 'react'
import { Label, XStack, YStack, Button, TextArea, Paragraph } from 'tamagui'
import { SettingsContext } from '../../../contexts/settings'

import defaultSettings from '../../../defaultSettings.json'
import { Undo } from '@tamagui/lucide-icons'

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
    <YStack w="100%">
      <XStack space="$4" w="100%">
        <Label paddingRight="$0" minWidth={160}>
          Search engines urls (one per line)
        </Label>
        <YStack f={1} w="100%">
          <TextArea
            theme="yellow"
            w="100%"
            height={200}
            onChangeText={(text) => setSearchEnginesUrls(text.split('\n'))}
            value={searchEnginesUrls.join('\n')}
          />
          {!isValid && <Paragraph color="$red9">Invalid urls</Paragraph>}
        </YStack>
      </XStack>
      <XStack gap="$2">
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
