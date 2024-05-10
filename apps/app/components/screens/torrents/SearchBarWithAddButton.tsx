import React from 'react'
import { Button, XStack, useMedia } from 'tamagui'
import { useI18n } from '../../../hooks/use18n'
import { Link } from 'expo-router'
import { PlusCircle } from '@tamagui/lucide-icons'
import { SearchBar } from './SearchBar'

export const SearchBarWithAddButton = () => {
  const media = useMedia()
  const i18n = useI18n()

  return (
    <XStack w="100%" gap="$8">
      <Link href="/add" asChild>
        <Button
          theme="yellow"
          transparent
          icon={PlusCircle}
          borderColor={'$yellow9'}
          style={{ textDecoration: 'none' }}
          br={50}
          {...(!media.gtXs && {
            position: 'absolute',
            bottom: '$12',
            right: '$6',
            size: '$5',
          })}
        >
          {i18n.t('torrents.add')}
        </Button>
      </Link>
      <SearchBar />
    </XStack>
  )
}
