import React from 'react'
import { Link, useSegments } from 'expo-router'
import { Button, useMedia, useThemeName } from 'tamagui'

export const ButtonLink = ({ title, href, segment, icon }) => {
  const media = useMedia()
  const segments = useSegments()
  const theme = useThemeName()

  const isActive = segments[0] === segment

  return (
    <Link href={href}>
      <Button
        size="$5"
        br={50}
        icon={icon}
        scaleIcon={1.4}
        bc={theme.startsWith('light') ? 'white' : 'black'}
        {...(isActive && {
          color: '$yellow9',
        })}
      >
        {media.gtXs && title}
      </Button>
    </Link>
  )
}
