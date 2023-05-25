import React, { useContext } from 'react'
import { H2, Label, Separator, Switch, XStack, YStack, Button } from 'tamagui'
import { SettingsContext } from '../../contexts/settings'
import { Platform } from 'react-native'

import { APP_URL } from '../../config'
import { SearchEngines } from './AppSettings/SearchEngines'
import { TorrentCardInfo } from './AppSettings/TorrentCardInfo'

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
      <TorrentCardInfo />
    </YStack>
  )
}
