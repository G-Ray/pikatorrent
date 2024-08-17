import { polyfillWebCrypto } from 'expo-standard-web-crypto'
import { Platform } from 'react-native'

import './i18n'
import { initApp } from './lib/lifecycle'

polyfillWebCrypto()
initApp()

if (Platform.OS === 'web') {
  require('@tamagui/core/reset.css')
}

import 'expo-router/entry'
