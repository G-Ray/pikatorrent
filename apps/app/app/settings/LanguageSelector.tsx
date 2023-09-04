import React from 'react'
import { useContext } from 'react'
import { SettingsContext } from '../../contexts/SettingsContext'

import i18n, { translationsLanguages } from '../../i18n'
import { getLocales } from 'expo-localization'
import { Select } from '../../components/reusable/Select'

// On Android/iOS, the language should be set in the OS settings
export const LanguageSelector = () => {
  const { settings, updateSettings, isLoaded } = useContext(SettingsContext)

  const handleCheckedChange = async (language: string) => {
    updateSettings({ language })
    i18n.locale = language
  }

  if (!isLoaded) return null

  return (
    <Select
      id="language"
      label={i18n.t('settings.app.language')}
      value={settings.language || getLocales()[0].languageCode}
      onValueChange={(value) => handleCheckedChange(value.toLowerCase())}
      options={languages}
      optionsTexts={languages.map((item) => translationsLanguages[item])}
      placeholder={i18n.t('settings.app.language')}
    />
  )
}

const languages = Object.keys(translationsLanguages)
