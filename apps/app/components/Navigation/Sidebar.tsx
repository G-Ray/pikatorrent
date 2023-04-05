import { Button, YStack } from 'tamagui'
import React from 'react'
import { ButtonLink } from './ButtonLink'

import { buttons, footerButtons } from './buttons'

export const Sidebar = () => {
  return (
    <YStack p="$8">
      <YStack gap="$4" f={1}>
        {buttons.map((button, index) => (
          <ButtonLink key={index} {...button} />
        ))}
      </YStack>
      <YStack gap="$4">
        {footerButtons.map((button, index) => (
          <ButtonLink key={index} {...button} />
        ))}
      </YStack>
    </YStack>
  )
}
