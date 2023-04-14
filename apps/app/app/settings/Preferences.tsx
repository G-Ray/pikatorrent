import React, { useContext } from 'react'
import { H2, Label, Separator, Switch, XStack, YStack } from 'tamagui'
import { SettingsContext } from '../../contexts/settings'

export const Preferences = () => {
  const { settings, updateSettings } = useContext(SettingsContext)

  const isDarkModeEnabled = settings.isDarkModeEnabled || false

  const handleCheckedChange = (isChecked) => {
    updateSettings({
      ...settings,
      isDarkModeEnabled: isChecked,
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
          checked={isDarkModeEnabled}
          onCheckedChange={handleCheckedChange}
        >
          <Switch.Thumb animation="quick" />
        </Switch>
      </XStack>
    </YStack>
  )
}
