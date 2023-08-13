import { Search } from '@tamagui/lucide-icons'
import React, { useContext, useState } from 'react'
import { Button, Input, XStack, Form } from 'tamagui'
import { SearchEngineSelector } from './SearchEngineSelector'
import { SettingsContext } from '../contexts/SettingsContext'

import defaultSettings from '../defaultSettings.json'
import { openExternalLink } from '../lib/links'

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
    const link = `${selectedSearchEngineUrl}${query}`
    openExternalLink(link)
  }

  return (
    <Form onSubmit={handleSubmit} f={1}>
      <XStack>
        <Input
          f={1}
          borderWidth={0}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          bc={settings.theme === 'light' ? 'white' : 'dark'}
          placeholder="Pick a torrent online..."
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
            bc={settings.theme === 'light' ? 'white' : 'black'}
            icon={() => (
              <XStack alignSelf="center">
                <Search size={16} />
              </XStack>
            )}
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
          />
        </Form.Trigger>
      </XStack>
    </Form>
  )
}
