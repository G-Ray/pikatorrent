import { Search } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { Button, Input, XStack, Form } from 'tamagui'

export const SearchBar = () => {
  const [query, setQuery] = useState('')

  return (
    <Form
      maxWidth={600}
      onSubmit={() =>
        window.open(`https://www.google.com/search?q=${query}+torrent`)
      }
      f={1}
    >
      <XStack>
        <Input
          f={1}
          id="query"
          borderTopLeftRadius={50}
          borderBottomLeftRadius={50}
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          placeholder="Pick a torrent..."
          value={query}
          onChangeText={setQuery}
          fontSize={'$6'}
        />
        <Form.Trigger asChild disabled={query.length === 0}>
          <Button
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            borderTopRightRadius={50}
            borderBottomRightRadius={50}
            icon={Search}
          />
        </Form.Trigger>
      </XStack>
    </Form>
  )
}