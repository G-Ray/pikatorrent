import React from 'react'
import { Paragraph, XStack, YStack } from 'tamagui'
import { TorrentFieldFormatter } from '../TorrentFieldFormatter'

export const TorrentInfo = ({ torrent }) => {
  return (
    <YStack>
      <XStack columnGap="$2">
        <TorrentFieldFormatter name="percentDone" value={torrent.percentDone} />
        <Paragraph>•</Paragraph>
        <TorrentFieldFormatter name="totalSize" value={torrent.totalSize} />
        <Paragraph>•</Paragraph>
        <Paragraph
          fontSize={'$2'}
        >{`${torrent.peersConnected} peers`}</Paragraph>
        {torrent.eta >= 0 && (
          <>
            <Paragraph>•</Paragraph>
            <TorrentFieldFormatter name="eta" value={torrent.eta} />
          </>
        )}
      </XStack>
      <XStack columnGap="$2">
        <TorrentFieldFormatter name="status" value={torrent.status} />
        <Paragraph>•</Paragraph>
        <XStack gap="$2">
          <TorrentFieldFormatter
            name="rateDownload"
            value={torrent.rateDownload}
          />
          <TorrentFieldFormatter name="rateUpload" value={torrent.rateUpload} />
        </XStack>
      </XStack>
      {torrent.errorString.length > 0 && (
        <TorrentFieldFormatter
          name="errorString"
          value={torrent.errorString}
          f={1}
          flexShrink={1}
        />
      )}
    </YStack>
  )
}
