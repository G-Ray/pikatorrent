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
          fontSize={'$6'}
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
