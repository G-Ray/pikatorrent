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
        size="$5"
        br={50}
        icon={icon}
        scaleIcon={1.4}
        variant="outlined"
        borderWidth={0}
        hoverStyle={{
          borderColor: `$${theme}5`,
        }}
        focusStyle={{
          outlineColor: `$${theme}5`,
          borderWidth: 0,
        }}
        {...(isActive && {
          borderColor: `$${theme}5`,
          color: `$${theme}9`,
        })}
      >
        {media.gtXs && title}
      </Button>
    </Link>
  )
}
