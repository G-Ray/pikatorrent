import { ColorStyleProp } from '@tamagui/core'
import React from 'react'
import { Button } from 'tamagui'

export const Label = ({ onPress, name, icon }: LabelProps) => {
  return (
    <Button
      themeInverse
      iconAfter={icon}
      disabled={!onPress}
      onPress={onPress}
      {...(!onPress && { size: '$2' })}
      br={50}
    >
      {name}
    </Button>
  )
}

type LabelProps = {
  name: string
  color: ColorStyleProp
}
