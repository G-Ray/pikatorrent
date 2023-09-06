import AsyncStorage from '@react-native-async-storage/async-storage'
import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'

export const translations = {
  en: require('./locales/en.json'),
  fr: require('./locales/fr.json'),
  ru: require('./locales/ru.json'),
}

export const translationsLanguages = {
  en: 'English',
  fr: 'Français',
  ru: 'Русский',
}

const i18n = new I18n(translations)

i18n.enableFallback = true

// Set the locale once at the beginning of your app.
AsyncStorage.getItem('language').then((language) => {
  i18n.locale = language || getLocales()[0].languageCode
})

export default i18n
