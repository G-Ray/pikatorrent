import { Search } from '@tamagui/lucide-icons'
import React, { useContext, useState } from 'react'
import { Button, Input, XStack, Form } from 'tamagui'
import { SearchEngineSelector } from './SearchEngineSelector'
import { SettingsContext } from '../contexts/SettingsContext'

import defaultSettings from '../defaultSettings.json'
import { Linking, Platform } from 'react-native'

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
    if (Platform.OS !== 'web') {
      Linking.openURL(link)
    } else {
      window.open(link)
    }
  }

  return (
    <Form onSubmit={handleSubmit} f={1}>
      <XStack>
        <Input
          f={1}
          id="query"
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          borderLeftWidth={0}
          borderRightWidth={0}
          borderColor={'$yellow9'}
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
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            borderTopRightRadius={50}
            borderBottomRightRadius={50}
            icon={Search}
            borderLeftWidth={0}
            borderColor={'$yellow9'}
          />
        </Form.Trigger>
      </XStack>
    </Form>
  )
}
