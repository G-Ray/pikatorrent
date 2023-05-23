import React from 'react'
import {
  ArrowBigUp,
  ChevronDown,
  ChevronUp,
  PauseCircle,
  PlayCircle,
} from '@tamagui/lucide-icons'
import { useState } from 'react'
import {
  Button,
  Card,
  H4,
  Paragraph,
  Progress,
  XStack,
  YStack,
  useMedia,
} from 'tamagui'
import prettyBytes from 'pretty-bytes'
import { RemoveTorrentDialog } from '../dialogs/RemoveTorrentDialog'
import { Speed } from '../components/Speed'

// 0 - Torrent is stopped
// 1 - Torrent is queued to verify local data
// 2 - Torrent is verifying local data
// 3 - Torrent is queued to download
// 4 - Torrent is downloading
// 5 - Torrent is queued to seed
// 6 - Torrent is seeding
const STATUSES = {
  0: 'Stopped',
  1: 'Queued',
  2: 'Verifying', // Torrent is verifying local data
  3: 'Queued',
  4: 'Downloading',
  5: 'Queued',
  6: 'Seeding',
}

export const TorrentCard = ({ torrent, handleResume, handlePause }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const media = useMedia()
  const isCollapsible = !media.gtXs

  return (
    <Card key={torrent.id} size="$4" bordered br="$6" mb="$4">
      <Card.Header>
        <H4 f={1} numberOfLines={1} fontWeight="bold">
          {torrent.name}
        </H4>
        <YStack>
          <Progress
            mt="$2"
            mb="$4"
            value={Math.round(torrent.percentComplete * 100)}
            theme="yellow"
            bordered
          >
            <Progress.Indicator animation="lazy" bc={'$yellow9'} />
          </Progress>
          <TorrentInfo torrent={torrent} isCollapsed={isCollapsed} />
        </YStack>

        <XStack f={1} ai="center" jc="space-between" pt="$4">
          {STATUSES[torrent.status] === STATUSES[0] ? (
            <Button
              onPress={() => handleResume(torrent.id)}
              theme="green"
              icon={PlayCircle}
              br={50}
            >
              Start
            </Button>
          ) : (
            <Button
              onPress={() => handlePause(torrent.id)}
              theme="gray"
              icon={PauseCircle}
              br={50}
            >
              Pause
            </Button>
          )}
          {isCollapsible && (
            <Button
              circular
              icon={isCollapsed ? ChevronDown : ChevronUp}
              onPress={() => setIsCollapsed(!isCollapsed)}
            />
          )}
          <RemoveTorrentDialog id={torrent.id} />
        </XStack>
      </Card.Header>
    </Card>
  )
}

const TorrentInfo = ({ torrent, isCollapsed = true }) => {
  const items = [
    {
      title: <Paragraph>Progress</Paragraph>,
      content: (
        <Paragraph fontWeight="bold">
          {Math.round(torrent.percentComplete * 100)}%
        </Paragraph>
      ),
    },
    {
      title: <Paragraph>Speed</Paragraph>,
      content: (
        <Speed
          downloadSpeed={torrent.rateDownload}
          uploadSpeed={torrent.rateUpload}
        />
      ),
    },
    {
      title: <Paragraph>Status</Paragraph>,
      content: (
        <Paragraph fontWeight="bold">{STATUSES[torrent.status]}</Paragraph>
      ),
    },
    {
      title: <Paragraph>Peers</Paragraph>,
      content: <Paragraph fontWeight="bold">{torrent.peers.length}</Paragraph>,
    },
    {
      title: <Paragraph>Size</Paragraph>,
      content: (
        <Paragraph fontWeight="bold">
          {prettyBytes(torrent.totalSize)}
        </Paragraph>
      ),
    },
  ]

  return (
    <XStack
      jc="space-between"
      w="100%"
      flexWrap="wrap"
      columnGap="$4"
      rowGap="$2"
    >
      <CollapsedItems
        isCollapsed={isCollapsed}
        items={items.map((i, index) => (
          <YStack key={index}>
            {i.title}
            {i.content}
          </YStack>
        ))}
      />
    </XStack>
  )
}

const CollapsedItems = ({ isCollapsed, items }) => {
  const media = useMedia()
  const displayedItems = media.gtXs ? 5 : 3

  return isCollapsed ? items.slice(0, displayedItems) : items
}

export const TorrentCardPlaceHolder = () => {
  return (
    <Card
      size="$4"
      bordered
      br="$6"
      mb="$4"
      height={160}
      borderStyle="dashed"
      borderWidth="$1"
    >
      <Card.Header f={1} ai="center" jc="center">
        <ArrowBigUp size={'$4'} />
        <H4 numberOfLines={1} fontWeight="bold">
          Add your first torrent
        </H4>
        <Paragraph>Your torrents will be displayed here</Paragraph>
      </Card.Header>
    </Card>
  )
}
