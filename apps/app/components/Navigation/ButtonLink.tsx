import React from 'react'
import { Link, usePathname } from 'expo-router'
import { Button, useMedia } from 'tamagui'

export const ButtonLink = ({ title, href, icon, withLabel = true }) => {
  const pathname = usePathname()
  const media = useMedia()

  const isActive = pathname.substring(0, href.length) === href

  return (
    <Link href={href} asChild style={{ textDecorationLine: 'none' }}>
      <Button
        size="$6"
        br={50}
        icon={icon}
        scaleIcon={1.4}
        {...(isActive
          ? {
              color: '$yellow8',
              backgroundColor: '$backgroundTransparent',
            }
          : { backgroundColor: '$backgroundTransparent' })}
      >
        {media.gtXs && title}
      </Button>
    </Link>
  )
}
