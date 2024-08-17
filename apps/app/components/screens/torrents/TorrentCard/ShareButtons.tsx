import React from 'react'
import { Share2 } from '@tamagui/lucide-icons'
import { Button } from 'tamagui'
import { Platform, Share } from 'react-native'
import { useI18n } from '../../../../hooks/use18n'

const appUrl = process.env.EXPO_PUBLIC_APP_URL

export const ShareButtons = ({ toast, torrent }) => {
  const i18n = useI18n()

  if (Platform.OS === 'web') {
    return (
      <Button
        icon={Share2}
        onPress={async () => {
          const shareLink = appUrl + '/add#' + torrent.magnetLink
          try {
            navigator.clipboard.writeText(shareLink)
            toast.show(i18n.t('toasts.linkCopied'))
          } catch (e) {}
        }}
      >
        {i18n.t('torrentDialog.copyLink')}
      </Button>
    )
  }

  // Native
  return (
    <Button
      icon={Share2}
      onPress={async () => {
        const shareLink = appUrl + '/add#' + torrent.magnetLink
        Share.share({
          url: shareLink,
          message: shareLink,
          title: torrent.name,
        })
      }}
    >
      {i18n.t('torrentDialog.share')}
    </Button>
  )
}
