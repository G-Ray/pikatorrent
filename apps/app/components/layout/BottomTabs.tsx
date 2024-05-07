import React from 'react'
import { Separator, XStack, YStack } from 'tamagui'
import { ButtonLink } from './ButtonLink'

import { getButtons } from './buttons'
import { useI18n } from '../../hooks/use18n'

export const BottomTabs = () => {
  const i18n = useI18n()
  const { buttons, footerButtons } = getButtons({ i18n })

  return (
    <YStack w="100%">
      <Separator />
      <XStack jc="space-around" p="$2" gap="$4">
        {[...buttons, ...footerButtons].map((button, index) => (
          <ButtonLink key={index} {...button} />
        ))}
      </XStack>
    </YStack>
  )
}
