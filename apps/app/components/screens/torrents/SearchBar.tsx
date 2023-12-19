import { Search } from '@tamagui/lucide-icons'
import React, { useContext, useState } from 'react'
import { Button, Input, XStack, Form, useThemeName } from 'tamagui'
import { SearchEngineSelector } from './SearchEngineSelector'

import defaultSettings from '../../../defaultSettings.json'
import { openExternalLink } from '../../../lib/links'
import { useI18n } from '../../../hooks/use18n'
import { SettingsContext } from '../../../contexts/SettingsContext'

export type Engine = {
  name: string
  searchUrl: string
  iconUri: string
}

export const SearchBar = () => {
  const i18n = useI18n()
  const [query, setQuery] = useState('')
  const { settings, updateSettings } = useContext(SettingsContext)
  const selectedSearchEngineUrl =
    settings.selectedSearchEngineUrl || defaultSettings.searchEnginesUrls[0]
  const theme = useThemeName()

  const engines: Array<Engine> = (
    settings.searchEnginesUrls || defaultSettings.searchEnginesUrls
  ).map((engineUrl: string) => {
    const url = new URL(engineUrl)
    const hostnameParts = url.hostname.split('.')

    return {
      name: hostnameParts[hostnameParts.length - 2], // ignore tld
      searchUrl: engineUrl,
      iconUrl: url.origin + '/favicon.ico',
    }
  })

  const handleEngineChange = (name: string) => {
    const engine = engines.find((e) => e.name === name)
    if (engine) {
      updateSettings({ selectedSearchEngineUrl: engine.searchUrl })
    }
  }

  const handleSubmit = () => {
    const link = `${selectedSearchEngineUrl.replace('%s', query)}`
    openExternalLink(link)
  }

  return (
    <Form onSubmit={handleSubmit} f={1}>
      <XStack bc="$backgroundTransparent" gap="$2">
        <Input
          f={1}
          placeholder={i18n.t('torrents.searchPlaceholder')}
          value={query}
          onChangeText={setQuery}
          m={'$1'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
          br={0}
          placeholderTextColor={'$color'}
          bc="$backgroundTransparent"
        />
        <SearchEngineSelector
          engines={engines}
          value={selectedSearchEngineUrl}
          onValueChange={handleEngineChange}
        />
        <Form.Trigger asChild>
          <Button
            icon={Search}
            disabled={query.length === 0}
            scaleIcon={1.3}
            borderColor={'$gray7'}
            variant="outlined"
          />
        </Form.Trigger>
      </XStack>
    </Form>
  )
}
