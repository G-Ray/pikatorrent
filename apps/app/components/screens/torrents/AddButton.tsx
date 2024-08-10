import React from 'react'
import { Button, XStack, useMedia, useThemeName } from 'tamagui'
import { useI18n } from '../../../hooks/use18n'
import { Link } from 'expo-router'
import { PlusCircle } from '@tamagui/lucide-icons'

export const AddButton = () => {
  const i18n = useI18n()
  const media = useMedia()
  const theme = useThemeName()

  return (
    <Link href="/add" asChild>
      <Button
        theme="yellow"
        backgroundColor={theme === 'light' ? 'white' : 'black'}
        icon={PlusCircle}
        borderColor={'$yellow9'}
        style={{ textDecoration: 'none' }}
        br={50}
        {...{
          position: 'absolute',
          bottom: media.gtXs ? '$8' : '$4',
          right: media.gtXs ? '$8' : '$4',
          size: '$5',
        }}
      >
        {i18n.t('torrents.add')}
      </Button>
    </Link>
  )
}
