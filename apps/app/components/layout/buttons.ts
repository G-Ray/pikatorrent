import {
  Zap,
  Settings,
  HelpCircle,
  Library,
  Search,
} from '@tamagui/lucide-icons'

export const getButtons = ({ i18n }) => {
  return {
    buttons: [
      {
        icon: Zap,
        title: 'Torrents',
        href: '/',
        segment: '(torrents)',
      },
      {
        icon: Search,
        title: i18n.t('menu.search'),
        href: '/search',
        segment: 'search',
      },
      {
        icon: Settings,
        title: i18n.t('menu.settings'),
        href: '/settings',
        segment: 'settings',
      },
    ],
    footerButtons: [
      {
        icon: HelpCircle,
        title: i18n.t('menu.about'),
        href: '/about',
        segment: 'about',
      },
    ],
  }
}
