import React from 'react'
import { useContext } from 'react'
import { SettingsContext } from '../../../../contexts/SettingsContext'

import { translationsLanguages } from '../../../../i18n'
import { getLocales } from 'expo-localization'
import { Select } from '../../../reusable/Select'
import { useI18n } from '../../../../hooks/use18n'

// TODO: On Android/iOS, the language should be set in the OS settings, but
// How can we define the supported languages with expo ?
export const LanguageSelector = () => {
  const { settings, updateSettings, isLoaded } = useContext(SettingsContext)
  const i18n = useI18n()

  const handleCheckedChange = async (language: string) => {
    i18n.locale = language
    updateSettings({ language })
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
