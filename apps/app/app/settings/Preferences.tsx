import React, { useContext } from 'react'
import { H2, Label, Separator, Switch, XStack, YStack, Button } from 'tamagui'
import { SettingsContext } from '../../contexts/settings'
import { Platform } from 'react-native'

const { APP_URL } = process.env

if (!APP_URL) {
  throw new Error('Missing APP_URL env var')
}

const registerMagnetHandler = () => {
  if (Platform.OS === 'web') {
    // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/registerProtocolHandler

    try {
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
      <H2>Preferences</H2>
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
        <Button theme="blue" onPress={() => registerMagnetHandler()}>
          Register magnet protocol
        </Button>
      )}
    </YStack>
  )
}
