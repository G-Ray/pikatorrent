import { Search } from '@tamagui/lucide-icons'
import React, { useContext, useState } from 'react'
import { Button, Input, XStack, Form, useThemeName } from 'tamagui'
import { SearchEngineSelector } from './SearchEngineSelector'
import { SettingsContext } from '../contexts/SettingsContext'

import defaultSettings from '../defaultSettings.json'
import { openExternalLink } from '../lib/links'
import i18n from '../i18n'

export type Engine = {
  name: string
  searchUrl: string
  iconUri: string
}

export const SearchBar = () => {
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
          // br={50}
          outlineStyle="none"
          bc={/^light/.test(theme) ? 'white' : 'black'}
          placeholder={i18n.t('torrents.searchPlaceholder')}
          value={query}
          onChangeText={setQuery}
        />
        <SearchEngineSelector
          engines={engines}
          value={selectedSearchEngineUrl}
          onValueChange={handleEngineChange}
        />
        <Form.Trigger asChild disabled={query.length === 0}>
          <Button
            bc={/^light/.test(theme) ? 'white' : 'black'}
            icon={() => (
              <XStack alignSelf="center">
                <Search size={16} />
              </XStack>
            )}
          />
        </Form.Trigger>
      </XStack>
    </Form>
  )
}
