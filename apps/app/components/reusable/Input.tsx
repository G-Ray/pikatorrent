import React from 'react'
import { InputProps, Input as TamaguiInput } from 'tamagui'

export const Input = (props: InputProps) => {
  return (
    <TamaguiInput
      br={0}
      borderTopWidth={0}
      borderRightWidth={0}
      borderLeftWidth={0}
      {...props}
    />
  )
}
