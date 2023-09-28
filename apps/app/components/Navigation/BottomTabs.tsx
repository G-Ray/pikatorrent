import React from 'react'
import { Separator, XStack, YStack } from 'tamagui'
import { ButtonLink } from './ButtonLink'

import { buttons, footerButtons } from './buttons'

export const BottomTabs = () => {
  return (
    <YStack w="100%">
      <Separator />
      <XStack jc="space-around" p="$2" gap="$4" bc="$backgroundStrong">
        {[...buttons, ...footerButtons].map((button, index) => (
          <ButtonLink key={index} {...button} />
        ))}
      </XStack>
    </YStack>
  )
}
