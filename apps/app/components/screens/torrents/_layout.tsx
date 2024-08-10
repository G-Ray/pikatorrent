import React, { useContext, useState } from 'react'
import { useI18n } from '../../../hooks/use18n'
import { Input, Separator, Stack, XStack, YStack, useMedia } from 'tamagui'
import { AddButton } from './AddButton'
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
      {/* <YStack m="$1">
        {media.gtXs && (
          <Stack>
            <YStack px={media.gtXs ? '$8' : '$2'}>
              <SearchBarWithAddButton />
            </YStack>
            <Separator my="$4" />
          </Stack>
        )}
      </YStack> */}

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
      <YStack f={1} px={media.gtXs ? '$8' : '$2'} py={media.gtXs ? '$0' : '$2'}>
        <TorrentsList
          filter={filter}
          filters={filters}
          sortOptions={settings.sortOptions}
        />
      </YStack>
      <Slot />
      {/* {!media.gtXs && (
        <YStack p="$2" w="100%" mt="auto">
          <AddButton />
        </YStack>
      )} */}
      <YStack p="$2" w="100%" mt="auto">
        <AddButton />
      </YStack>
    </YStack>
  )
}
