import { YStack } from 'tamagui'
import React from 'react'

import { ButtonLink } from './ButtonLink'
import { getButtons } from './buttons'
import { ScrollView } from 'react-native'
import { useI18n } from '../../hooks/use18n'
import { Title } from './Header'

export const Sidebar = () => {
  const i18n = useI18n()
  const { buttons, footerButtons } = getButtons({ i18n })

  return (
    <YStack pt="$8" px="$8" pb="$8" gap="$8">
      <Title />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <YStack gap="$4">
          {buttons.map((button, index) => (
            <ButtonLink key={index} {...button} />
          ))}
        </YStack>
        <YStack gap="$4">
          {footerButtons.map((button, index) => (
            <ButtonLink key={index} {...button} />
          ))}
        </YStack>
      </ScrollView>
    </YStack>
  )
}
