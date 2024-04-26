// the v2 config imports the css driver on web and react-native on native
// for reanimated: @tamagui/config/v2-reanimated
// for react-native only: @tamagui/config/v2-native
import { config } from '@tamagui/config/v2'
import { createTamagui } from 'tamagui' // or '@tamagui/core'
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
