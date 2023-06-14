import React, { useContext, useEffect, useState } from 'react'
import { H2, Label, Separator, Switch, XStack, YStack } from 'tamagui'
import { SettingsContext } from '../../contexts/settings'

import { SearchEngines } from './AppSettings/SearchEngines'
import { TorrentCardInfo } from './AppSettings/TorrentCardInfo'
import { Platform } from 'react-native'

export const Preferences = () => {
  const { settings, updateSettings } = useContext(SettingsContext)
  const [isChecked, setIsChecked] = useState(settings.theme === 'dark')

  const handleCheckedChange = (isChecked: boolean) => {
    setIsChecked(isChecked)
  }

  useEffect(() => {
    // Let a chance for toggle animation to finish
    const timeout = setTimeout(() => {
      updateSettings({ ...settings, theme: isChecked ? 'dark' : 'light' })
    }, 500)

    return () => clearTimeout(timeout)
  }, [isChecked, settings, updateSettings])

  useEffect(() => {
    setIsChecked(settings.theme === 'dark')
  }, [settings.theme])

  return (
    <YStack ai="flex-start" space="$8">
      <H2>App settings</H2>

      <XStack {...(Platform.OS === 'web' && { ai: 'center' })} space="$4">
        <Label htmlFor="dark-mode-switch">Dark mode</Label>
        <Separator minHeight={20} vertical />
        <Switch
          id="dark-mode-switch"
          checked={isChecked}
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
