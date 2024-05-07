import { config } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'

const headingFont = createInterFont()
const bodyFont = createInterFont()
const tamaguiConfig = createTamagui({
  ...config,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
})

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
