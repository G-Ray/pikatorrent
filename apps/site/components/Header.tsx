import { H3, H5, XStack, YStack } from 'tamagui'
import { Logo } from './Logo'
import { H1 } from 'tamagui'
import Link from 'next/link'

export const Header = ({ theme }: any) => {
  return (
    <YStack ai="center">
      <XStack ai="center" mb="$4">
        <Logo width={64} height={64} theme={theme} />
        <H1 color="$yellow9" fontWeight="600">
          Pika
        </H1>
        <H1 fontWeight="600">Torrent</H1>
      </XStack>
      <H3 textAlign="center" maxWidth={500} mb="$4">
        A modern, simple, connected, and electric BitTorrent app ⚡.
      </H3>
      <H5 textAlign="center">
        Available on mobile, desktop,{' '}
        <Link href={'https://www.npmjs.com/package/pikatorrent'}>
          command line
        </Link>{' '}
        & the <Link href={'https://app.pikatorrent.com'}>web</Link>.
      </H5>
    </YStack>
  )
}
