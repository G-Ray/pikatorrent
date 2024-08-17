import { I18n } from 'i18n-js'
import {
  enUS,
  fr,
  ru,
  de,
  es,
  ptBR,
  Locale as DateFnsLocale,
  hi,
  hy,
  nb,
  pl,
  tr,
  zhCN,
} from 'date-fns/locale'

const translations = {
  de: require('./locales/de.json'),
  en: require('./locales/en.json'),
  es: require('./locales/es.json'),
  fr: require('./locales/fr.json'),
  hi: require('./locales/hi.json'),
  hy: require('./locales/hy.json'),
  nb_NO: require('./locales/nb_NO.json'),
  pl: require('./locales/pl.json'),
  pt_br: require('./locales/pt_br.json'),
  ru: require('./locales/ru.json'),
  tr: require('./locales/tr.json'),
  zh_Hans: require('./locales/zh_Hans.json'),
}

/** We can only load font available in Inter */
export const translationsLanguages = {
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  // hi: 'हिन्दी',
  // hy: 'Հայերեն',
  nb_NO: 'Bokmål',
  pl: 'Polski',
  pt_br: 'Português brasileiro',
  ru: 'Русский',
  tr: 'Türkçe',
  // zh_Hans: '简体字',
}

export const getDateFnsLocale = (locale: string) => {
  const localeToDateFnsLocale: Record<string, DateFnsLocale> = {
    de: de,
    en: enUS,
    es: es,
    fr: fr,
    hi: hi,
    hy: hy,
    nb_NO: nb,
    pl: pl,
    pt_br: ptBR,
    ru: ru,
    tr: tr,
    zh_Hans: zhCN,
  }

  return localeToDateFnsLocale[locale] ?? enUS
}

const i18n = new I18n(translations)

i18n.enableFallback = true

export default i18n
