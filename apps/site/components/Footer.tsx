import Link from 'next/link'
import { Paragraph, XStack } from 'tamagui'

export const Footer = () => {
  return (
    <footer>
      <XStack jc="center" py="$4" gap="$8">
        <Paragraph>
          <Link href={'/privacy-policy'} target="_blank">
            Privacy Policy
          </Link>
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
