import 'expo-router/entry'
import { polyfillWebCrypto } from 'expo-standard-web-crypto'
import 'react-native-url-polyfill/auto'
import { Platform } from 'react-native'

import './i18n'
import * as transmission from './lib/transmission.native'
import { createPersistentNotification } from './lib/persistentNotification'

if (Platform.OS === 'web') {
  require('@tamagui/core/reset.css')
}

if (Platform.OS !== 'web') {
  transmission.init()
  createPersistentNotification()
}

polyfillWebCrypto()
