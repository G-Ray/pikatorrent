import React, { useContext, useState } from 'react'
import { useI18n } from '../../../hooks/use18n'
import { Input, Separator, Stack, XStack, YStack, useMedia } from 'tamagui'
import { SearchBarWithAddButton } from './SearchBarWithAddButton'
import {
  SortOptions,
  SortingOptionsDialog,
} from '../../dialogs/SortingOptionsDialog'
import { SettingsContext } from '../../../contexts/SettingsContext'
import { StartPauseAllTorrentsButton } from './StartPauseAllTorrentsButton'
import { Filters } from './Filters'
import { TorrentsList } from './TorrentsList'
import { Slot } from 'expo-router'

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
