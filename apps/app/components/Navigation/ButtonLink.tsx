import React from 'react'
import { Link, useSegments } from 'expo-router'
import { Button, useMedia, useThemeName } from 'tamagui'
import { Platform } from 'react-native'

export const ButtonLink = ({ title, href, segment, icon }) => {
  const media = useMedia()
  const segments = useSegments()
  const theme = useThemeName()

  const isActive = segments[0] === segment

  return (
    <Link href={href} asChild={Platform.OS !== 'web'}>
      {/* asChild workaround to avoid textDecoration on Firefox */}
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
