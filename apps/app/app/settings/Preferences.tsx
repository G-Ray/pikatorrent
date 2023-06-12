import React, { useContext } from 'react'
import { H2, Label, Separator, Switch, Theme, XStack, YStack } from 'tamagui'
import { SettingsContext } from '../../contexts/settings'

import { SearchEngines } from './AppSettings/SearchEngines'
import { TorrentCardInfo } from './AppSettings/TorrentCardInfo'

export const Preferences = () => {
  const { settings, updateSettings } = useContext(SettingsContext)

  const handleCheckedChange = (isChecked: boolean) => {
    updateSettings({
      ...settings,
      theme: isChecked ? 'dark' : 'light',
    })
  }

  return (
    <YStack ai="flex-start" space="$8">
      <H2>App settings</H2>

      <XStack ai="center" space="$4">
        <Label htmlFor="dark-mode-switch">Dark mode</Label>
        <Separator minHeight={20} vertical />
        <Switch
          id="dark-mode-switch"
          checked={settings.theme === 'dark'}
          onCheckedChange={handleCheckedChange}
        >
          <Switch.Thumb animation="quick" />
        </Switch>
      </XStack>

      <SearchEngines />
      <TorrentCardInfo />
    </YStack>
  )
}
