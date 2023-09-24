import Link from 'next/link'
import { Paragraph, Separator, XStack } from 'tamagui'

export const Footer = () => {
  return (
    <footer>
      <Separator />
      <XStack jc="center" py="$4" gap="$8" f={1} flexWrap="wrap">
        <Paragraph>
          <Link href={'/'}>Home</Link>
        </Paragraph>
        <Paragraph>
          <Link href={'/docs'}>Docs</Link>
        </Paragraph>
        <Paragraph>
          <Link href={'/faq'}>FAQ</Link>
        </Paragraph>
        <Paragraph>
          <Link href={'/privacy-policy'}>Privacy Policy</Link>
        </Paragraph>
        <Paragraph>
          <Link href={'https://github.com/G-Ray/pikatorrent'} target="_blank">
            Github
          </Link>
        </Paragraph>

        <Paragraph>
          <Link href={'https://discord.gg/6HxCV4aGdy'} target="_blank">
            Discord
          </Link>
        </Paragraph>
      </XStack>
    </footer>
  )
}
