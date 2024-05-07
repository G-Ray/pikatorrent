import { useContext, useEffect } from 'react'
import i18n from '../i18n'
import { SettingsContext } from '../contexts/SettingsContext'
import { getLocales } from 'expo-localization'

export const useI18n = () => {
  const { settings } = useContext(SettingsContext)

  useEffect(() => {
    // Set the locale once at the beginning of your app.
    i18n.locale = settings.language ?? getLocales()[0].languageCode ?? 'en'
  }, [settings.language])

  return i18n
}
