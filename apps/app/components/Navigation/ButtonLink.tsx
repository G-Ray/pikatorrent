import React from 'react'
import { Link, useSegments } from 'expo-router'
import { Button, useMedia } from 'tamagui'

export const ButtonLink = ({ title, href, segment, icon }) => {
  const media = useMedia()
  const segments = useSegments()

  const isActive = segments[0] === segment

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
