import 'expo-router/entry'
import { polyfillWebCrypto } from 'expo-standard-web-crypto'
import { Platform } from 'react-native'

import './i18n'
import { initApp } from './lib/lifecycle'

if (Platform.OS === 'web') {
  require('@tamagui/core/reset.css')
  require('./index.css')
}

initApp()

polyfillWebCrypto()
