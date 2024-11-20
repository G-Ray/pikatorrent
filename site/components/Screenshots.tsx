import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Card, XStack, useMedia } from 'tamagui'

interface ScreenShotsProps {
  theme: string | undefined
}

export const Screenshots = ({ theme }: ScreenShotsProps) => {
  const media = useMedia()
  const [desktopImageSource, setDesktopImageSource] = useState(
    '/desktop-light.webp'
  )
  const [mobileImageSource, setMobileImageSource] =
    useState('/mobile-light.webp')

  const desktopWidth = media.gtMd ? 800 : media.gtXs ? 400 : '90vw'
  const mobileWidth = media.gtMd ? 280 : 140
  const mobilePositionTop = media.gtMd ? 395 : 200
  const paddingX = media.gtMd ? 64 : 12
  const paddingBottom = media.gtMd ? 128 : 280

  useEffect(() => {
    setDesktopImageSource(
      theme === 'light' ? '/desktop-light.webp' : '/desktop-dark.webp'
    )
    setMobileImageSource(
      theme === 'light' ? '/mobile-light.webp' : '/mobile-dark.webp'
    )
  }, [theme])

  return (
    <XStack px={paddingX} pt={32} pb={paddingBottom} position="relative">
      <Card
        bordered
        w={desktopWidth}
        size="$6"
        elevate
        borderColor="$yellow9"
        shadowColor="$yellow3"
      >
        <Image
          src={desktopImageSource}
          alt="pikatorrent screenshot on desktop."
          width={0}
          height={0}
          style={{
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
            borderRadius: 16,
          }}
        />
      </Card>
      <Card
        bordered
        w={mobileWidth}
        size="$6"
        elevate
        position="absolute"
        right={0}
        top={mobilePositionTop}
        borderColor="$yellow9"
        shadowColor="$yellow3"
      >
        <Image
          src={mobileImageSource}
          alt="pikatorrent screenshot on mobile."
          width={0}
          height={0}
          style={{
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
            borderRadius: 16,
          }}
        />
      </Card>
    </XStack>
  )
}
