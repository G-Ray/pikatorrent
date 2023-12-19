import React, { useContext, useState } from 'react'
import {
  Button,
  Card,
  Input,
  Separator,
  Stack,
  XStack,
  YStack,
  useMedia,
  Theme,
  Paragraph,
} from 'tamagui'
import { Link, Slot } from 'expo-router'
import { PlusCircle } from '@tamagui/lucide-icons'

import { DESKTOP_MAX_CONTENT_WIDTH } from '../../constants/layout'
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

const SearchBarWithAddButton = () => {
  const media = useMedia()
  const i18n = useI18n()

  return (
    <Card mx="auto" w="100%" maxWidth={DESKTOP_MAX_CONTENT_WIDTH}>
      <XStack bc="$backgroundTransparent" gap="$2">
        {/* Workaround to avoid textDecoration on Firefox */}
        <Link href="/add" asChild>
          <Button
            theme="yellow"
            icon={PlusCircle}
            bordered
            borderColor={'$yellow7'}
            {...(!media.gtXs && {
              position: 'absolute',
              bottom: '$10',
              right: '$1',
              size: '$5',
              br: 50,
            })}
          >
            {i18n.t('torrents.add')}
          </Button>
        </Link>
        <SearchBar />
      </XStack>
    </Card>
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
            <YStack mb="$4">
              <SearchBarWithAddButton />
            </YStack>
            <Separator />
          </Stack>
        )}

        <Card
          mx="auto"
          my="$2"
          w="100%"
          maxWidth={DESKTOP_MAX_CONTENT_WIDTH}
          bc="$backgroundTransparent"
        >
          <XStack jc="space-between" bc="$backgroundTransparent">
            <StartPauseAllTorrentsButton />
            <Theme reset>
              <SortingOptionsDialog
                sortOptions={settings.sortOptions}
                onChangeSort={handleChangeSort}
              />
            </Theme>
            <Theme reset>
              <Filters onChangeFilters={setFilters} />
            </Theme>
            <Input
              minWidth={120}
              f={1}
              m={'$1'}
              mr="$2"
              placeholder={i18n.t('torrents.filterListPlaceholder')}
              value={filter}
              onChangeText={setFilter}
              borderTopWidth={0}
              borderRightWidth={0}
              borderLeftWidth={0}
              br={0}
              bc="$backgroundTransparent"
              placeholderTextColor={'$color'}
            />
          </XStack>
        </Card>
      </YStack>
      <TorrentsList
        filter={filter}
        filters={filters}
        sortOptions={settings.sortOptions}
      />
      <Slot />
      {!media.gtXs && <Separator />}
      {!media.gtXs && (
        <XStack py="$2" mx="$2" mt="auto">
          <SearchBarWithAddButton />
        </XStack>
      )}
    </YStack>
  )
}
