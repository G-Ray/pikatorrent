import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'

const i18n = new I18n({
  en: require('./locales/en.json'),
  fr: require('./locales/fr.json'),
})

i18n.enableFallback = true

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode

export default i18n
