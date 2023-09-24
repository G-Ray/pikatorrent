import { H3, H4, H5, H6, XStack, YStack } from 'tamagui'
import Link from 'next/link'

export const Hero = ({ theme }: any) => {
  return (
    <YStack ai="center" mt="$8">
      <H4 mb="$4" textAlign="center">
        A modern, simple, connected, and electric BitTorrent app ⚡.
      </H4>
      <H6>
        Available on mobile, desktop,{' '}
        <Link href={'https://www.npmjs.com/package/pikatorrent'}>
          command line
        </Link>{' '}
        & the <Link href={'https://app.pikatorrent.com'}>web</Link>.
      </H6>
    </YStack>
  )
}
