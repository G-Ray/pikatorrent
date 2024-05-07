import React, { useContext, useState } from 'react'
import { Button, Separator, Stack, XStack, YStack, useMedia } from 'tamagui'
import { Link, Slot } from 'expo-router'
import { PlusCircle } from '@tamagui/lucide-icons'

import {
  SortOptions,
  SortingOptionsDialog,
} from '../../components/dialogs/SortingOptionsDialog'
import { SettingsContext } from '../../contexts/SettingsContext'
import { useI18n } from '../../hooks/use18n'
import { SearchBar } from '../../components/screens/torrents/SearchBar'
import { Filters } from '../../components/screens/torrents/Filters'
import { TorrentsList } from '../../components/screens/torrents/TorrentsList'
import { StartPauseAllTorrentsButton } from '../../components/screens/torrents/StartPauseAllTorrentsButton'
import { Input } from '../../components/reusable/Input'

const SearchBarWithAddButton = () => {
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

export default function Torrents() {
  const i18n = useI18n()
  const { settings, updateSettings } = useContext(SettingsContext)
  const [filter, setFilter] = useState('')
  const [filters, setFilters] = useState([])
  const media = useMedia()

  const handleChangeSort = (sortOptions: SortOptions) => {
    updateSettings({ sortOptions })
  }

  return (
    <YStack f={1}>
      <YStack>
        {media.gtXs && (
          <Stack>
            <YStack px={media.gtXs ? '$8' : '$2'}>
              <SearchBarWithAddButton />
            </YStack>
            <Separator my="$4" />
          </Stack>
        )}
      </YStack>
      <XStack
        mx="auto"
        w="100%"
        px={media.gtXs ? '$8' : '$2'}
        pb={media.gtXs ? '$4' : '$0'}
        gap="$2"
        jc="space-between"
      >
        <StartPauseAllTorrentsButton />
        <SortingOptionsDialog
          sortOptions={settings.sortOptions}
          onChangeSort={handleChangeSort}
        />
        <Filters onChangeFilters={setFilters} />
        <Input
          f={1}
          minWidth={120}
          placeholder={i18n.t('torrents.filterListPlaceholder')}
          value={filter}
          onChangeText={setFilter}
        />
      </XStack>
      <YStack px={media.gtXs ? '$8' : '$2'}>
        <TorrentsList
          filter={filter}
          filters={filters}
          sortOptions={settings.sortOptions}
        />
      </YStack>
      <Slot />
      {!media.gtXs && (
        <YStack py="$2" w="100%" mt="auto">
          <Separator />
          <SearchBarWithAddButton />
        </YStack>
      )}
    </YStack>
  )
}
