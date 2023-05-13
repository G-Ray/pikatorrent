import { Zap, Settings, HelpCircle } from '@tamagui/lucide-icons'

import i18n from '../../i18n'

export const buttons = [
  { icon: Zap, title: 'Torrents', href: '/' },
  { icon: Settings, title: i18n.t('settings'), href: '/settings' },
]

export const footerButtons = [
  { icon: HelpCircle, title: i18n.t('about'), href: '/about' },
]
