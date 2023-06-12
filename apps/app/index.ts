import 'expo-router/entry'
import { polyfillWebCrypto } from 'expo-standard-web-crypto'
import 'react-native-url-polyfill/auto'
import './i18n'

polyfillWebCrypto()
