import { YStack } from 'tamagui'
import React from 'react'

import { ButtonLink } from './ButtonLink'
import { buttons, footerButtons } from './buttons'
import { ScrollView } from 'react-native'

export const Sidebar = () => {
  return (
    <YStack p="$8">
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <YStack gap="$4" pb="$4" m="$2">
          {buttons.map((button, index) => (
            <ButtonLink key={index} {...button} />
          ))}
        </YStack>
        <YStack gap="$4" m="$2">
          {footerButtons.map((button, index) => (
            <ButtonLink key={index} {...button} />
          ))}
        </YStack>
      </ScrollView>
    </YStack>
  )
}
