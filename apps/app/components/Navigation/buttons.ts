import { Zap, Settings, HelpCircle, Activity } from '@tamagui/lucide-icons'

import i18n from '../../i18n'

export const buttons = [
  {
    icon: Zap,
    title: 'Torrents',
    href: '/',
    segment: '(torrents)',
  },
  {
    icon: Activity,
    title: 'Statistics', //i18n.t('menu.stats'),
    href: '/stats',
    segment: 'stats',
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
