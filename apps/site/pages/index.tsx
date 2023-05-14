import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Card, H1, H3, Paragraph, XStack, YStack } from 'tamagui'
import Link from 'next/link'
import { ExternalLink } from '@tamagui/lucide-icons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>PikaTorrent</title>
        <meta name="description" content="PikaTorrent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <YStack ai="center" space p="$8">
          <H1>PikaTorrent</H1>

          <H3>A next-generation BitTorrent client.</H3>
          <YStack ai="center" space>
            <Paragraph>Try the alpha version now with:</Paragraph>
            <Card theme="gray" px="$4">
              <pre>npm install -g pikatorrent</pre>
              <pre>pikatorrent node</pre>
            </Card>
            <Paragraph>Then follow the instructions.</Paragraph>
          </YStack>

          <XStack>
            <Link
              href="https://app.pikatorrent.com"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button icon={ExternalLink}>Open app</Button>
            </Link>
          </XStack>
        </YStack>
      </main>
    </>
  )
}
