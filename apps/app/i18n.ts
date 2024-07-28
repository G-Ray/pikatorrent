import { I18n } from 'i18n-js'
import {
  enUS,
  fr,
  ru,
  de,
  es,
  ptBR,
  Locale as DateFnsLocale,
  pt,
} from 'date-fns/locale'

export type Locale = 'en' | 'fr' | 'ru' | 'de' | 'es' | 'pt_br'

export const translations = {
  en: require('./locales/en.json'),
  fr: require('./locales/fr.json'),
  ru: require('./locales/ru.json'),
  de: require('./locales/de.json'),
  es: require('./locales/es.json'),
  pt_br: require('./locales/pt_br.json'),
}

export const translationsLanguages = {
  en: 'English',
  fr: 'Français',
  ru: 'Русский',
  de: 'Deutsch',
  es: 'Español',
  pt_br: 'Português brasileiro',
}

export const getDateFnsLocale = (locale: Locale) => {
  const localeToDateFnsLocale: Record<Locale, DateFnsLocale> = {
    en: enUS,
    fr: fr,
    ru: ru,
    de: de,
    es: es,
    pt_br: ptBR,
  }

  return localeToDateFnsLocale[locale] ?? enUS
}

const i18n = new I18n(translations)

i18n.enableFallback = true

export default i18n
