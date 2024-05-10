import React, { useContext } from 'react'
import { SettingsContext } from '../../../../contexts/SettingsContext'
import isElectron from 'is-electron'
import { Select } from '../../../reusable/Select'

export const ThemeSelector = () => {
  const { settings, updateSettings, isLoaded } = useContext(SettingsContext)

  const handleCheckedChange = async (theme: string) => {
    updateSettings({ theme })

    if (isElectron()) {
      window.theme.set(theme)
    }
  }

  if (!isLoaded) return null

  return (
    <Select
      id="theme"
      value={settings.theme}
      onValueChange={(value) => handleCheckedChange(value)}
      options={options}
      placeholder={'theme'}
      label={'Theme'}
      optionsTexts={['System', 'Light', 'Dark']}
    />
  )
}

const options = ['system', 'light', 'dark']
