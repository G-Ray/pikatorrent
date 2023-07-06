import { H3, H4, XStack, YStack } from 'tamagui'
import { Logo } from './Logo'
import { H1 } from 'tamagui'
import Link from 'next/link'

export const Header = ({ theme }: any) => {
  return (
    <YStack ai="center">
      <XStack ai="center" mb="$8">
        <Logo width={64} height={64} theme={theme} />
        <H1 color="$yellow9" fontWeight="$6">
          Pika
        </H1>
        <H1 fontWeight="$6">Torrent</H1>
      </XStack>
      <H3 textAlign="center" maxWidth={500} mb="$4">
        A modern, simple, connected, and electric BitTorrent app ⚡.
      </H3>
      <H4>
        Available on mobile, desktop, command line & the{' '}
        <Link href={'https://app.pikatorrent.com'}>web</Link>.
      </H4>
    </YStack>
  )
}
