import React, { useContext, useState } from 'react'
import {
  H2,
  Label,
  Separator,
  Switch,
  XStack,
  YStack,
  Button,
  TextArea,
  Paragraph,
} from 'tamagui'
import { SettingsContext } from '../../contexts/settings'
import { Platform } from 'react-native'

import { APP_URL } from '../../config'
import defaultSettings from '../../defaultSettings.json'
import { Undo } from '@tamagui/lucide-icons'

const registerMagnetHandler = () => {
  if (Platform.OS === 'web') {
    // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerProtocolHandler

    try {
      if (window.navigator.unregisterProtocolHandler) {
        // chromium browsers allow unregistering
        window.navigator.unregisterProtocolHandler(
          'magnet',
          `${APP_URL}/?magnet=%s`
        )
      }

      window.navigator.registerProtocolHandler(
        'magnet',
        `${APP_URL}/?magnet=%s`,
        'PikaTorrent'
      )
    } catch (e) {
      console.error(e)
    }
  }
}

export const Preferences = () => {
  const { settings, updateSettings } = useContext(SettingsContext)

  const handleCheckedChange = (isChecked: boolean) => {
    updateSettings({
      ...settings,
      theme: isChecked ? 'dark' : 'light',
    })
  }

  return (
    <YStack space ai="flex-start">
      <H2>App settings</H2>
      <XStack width={200} alignItems="center" space="$4">
        <Label
          paddingRight="$0"
          minWidth={90}
          justifyContent="flex-end"
          htmlFor="dark-mode-switch"
        >
          Dark mode
        </Label>
        <Separator minHeight={20} vertical />
        <Switch
          id="dark-mode-switch"
          checked={settings.theme === 'dark'}
          onCheckedChange={handleCheckedChange}
        >
          <Switch.Thumb animation="quick" />
        </Switch>
      </XStack>
      {Platform.OS === 'web' && (
        <XStack ai="center" space="$4">
          <Label htmlFor="register-magnet-button">
            Allow pikatorrent to open magnet links in your browser:
          </Label>
          <Button
            id="register-magnet-button"
            theme="yellow"
            onPress={() => registerMagnetHandler()}
          >
            Register
          </Button>
        </XStack>
      )}

      <SearchEngines />
    </YStack>
  )
}

const SearchEngines = () => {
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
