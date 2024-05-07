import React from 'react'
import { Link, useSegments } from 'expo-router'
import { Button, useMedia } from 'tamagui'

export const ButtonLink = ({
  title,
  href,
  segment,
  icon,
  theme = 'yellow',
}) => {
  const media = useMedia()
  const segments = useSegments()

  const isActive = segments[0] === segment

  return (
    <Link href={href} asChild>
      <Button
        theme="yellow"
        transparent
        icon={icon}
        br={50}
        circular={!media.gtXs}
        {...(!media.gtXs && { scaleIcon: 1.4 })}
        {...(isActive && {
          borderColor: `$${theme}7`,
          color: `$${theme}9`,
        })}
        style={{ textDecoration: 'none' }}
      >
        {media.gtXs && title}
      </Button>
    </Link>
  )
}
