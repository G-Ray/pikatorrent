import React from 'react'
import { H1, H2, Theme, useMedia, XStack } from 'tamagui'
import { AddTorrentDialog } from '../dialogs/AddTorrentDialog'
import { ConnectionStatus } from './ConnectionStatus'

export const Header = () => {
  const media = useMedia()

  return (
    <Theme>
      <XStack
        py="$4"
        px={media.gtMd ? '$8' : '$4'}
        jc="space-between"
        ai="center"
        bc="$background"
      >
        <XStack ai="center" gap="$8">
          <XStack ai="center" gap="$8">
            <XStack>{media.gtMd ? <DesktopTitle /> : <MobileTitle />}</XStack>
            <AddTorrentDialog />
          </XStack>
        </XStack>
        <ConnectionStatus />
      </XStack>
    </Theme>
  )
}

const DesktopTitle = () => {
  return (
    <>
      <H1 color="$yellow9" fontWeight="$6">
        Pika
      </H1>
      <H1 fontWeight="$6">Torrent</H1>
    </>
  )
}

const MobileTitle = () => {
  return (
    <>
      <H2 color="$yellow9" fontWeight="$6">
        Pika
      </H2>
      <H2 fontWeight="$6">Torrent</H2>
    </>
  )
}
