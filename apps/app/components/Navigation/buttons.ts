import { Zap, Settings, HelpCircle } from '@tamagui/lucide-icons'

import i18n from '../../i18n'

export const buttons = [
  {
    icon: Zap,
    title: 'Torrents',
    href: '/',
    segment: '(torrents)',
  },
  {
    icon: Settings,
    title: i18n.t('menu.settings'),
    href: '/settings',
    segment: 'settings',
  },
]

export const footerButtons = [
  {
    icon: HelpCircle,
    title: i18n.t('menu.about'),
    href: '/about',
    segment: 'about',
  },
]
