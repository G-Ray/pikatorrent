import React from 'react'
import { Pause, PauseCircle, Play, PlayCircle } from '@tamagui/lucide-icons'
import { useContext, useEffect, useState } from 'react'
import { Button, Card, H4, Paragraph, Progress, XStack, YStack } from 'tamagui'
import { NodeContext } from '../contexts/node'
import prettyBytes from 'pretty-bytes'
import { RemoveTorrentDialog } from '../dialogs/RemoveTorrentDialog'
import { Speed } from '../components/Speed'

const REFRESH_INTERVAL = 5_000

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

export default function Torrents() {
  const [torrents, setTorrents] = useState([])
  const { sendRPCMessage } = useContext(NodeContext)

  useEffect(() => {
    const fetchTorrents = async () => {
      console.log('fetchTorrents')
      try {
        const response = await sendRPCMessage({
          method: 'torrent-get',
          arguments: {
            fields: [
              'id',
              'name',
              'totalSize',
              'status',
              'percentDone',
              'percentComplete',
              'rateDownload',
              'rateUpload',
              'peers',
            ],
          },
        })

        setTorrents(response.payload.arguments.torrents)
      } catch (e) {
        console.log('Error fetching torrent', e)
      }
    }

    const interval = setInterval(async () => {
      fetchTorrents()
    }, REFRESH_INTERVAL)

    fetchTorrents()

    return () => clearInterval(interval)
  }, [sendRPCMessage])

  const handleResume = (id: string) => {
    sendRPCMessage({ method: 'torrent-start', arguments: { ids: id } }) // NOTE: What difference with torrent-start-now ?
  }

  const handlePause = (id: string) => {
    sendRPCMessage({ method: 'torrent-stop', arguments: { ids: [id] } })
  }

  return (
    <YStack gap="$6">
      {torrents.map((torrent) => (
        <Card key={torrent.id} bordered size="$2" theme="gray">
          <Card.Header>
            <XStack jc="space-between">
              <XStack ai="center" space="$2">
                {STATUSES[torrent.status] === STATUSES[0] ? (
                  <Button
                    onClick={() => handleResume(torrent.id)}
                    theme="blue"
                    icon={PlayCircle}
                  >
                    Start
                  </Button>
                ) : (
                  <Button
                    onClick={() => handlePause(torrent.id)}
                    theme="gray"
                    icon={PauseCircle}
                  >
                    Pause
                  </Button>
                )}
                <H4 numberOfLines={1} fontWeight="bold">
                  {torrent.name}
                </H4>
              </XStack>
              <RemoveTorrentDialog id={torrent.id} />
            </XStack>
          </Card.Header>
          <Card.Footer w="100%">
            <YStack space="$1" w="100%">
              <Progress
                value={Math.round(torrent.percentComplete * 100)}
                theme="yellow"
                bordered
                w="100%"
              >
                <Progress.Indicator animation="lazy" bc={'$yellow9'} w="100%" />
              </Progress>
              <XStack
                // flex={1}
                jc="space-between"
                w="100%"
                flexWrap="wrap"
                gap="$4"
              >
                <YStack>
                  <Paragraph>Progress</Paragraph>
                  <Paragraph fontWeight="bold">
                    {Math.round(torrent.percentComplete * 100)}%
                  </Paragraph>
                </YStack>
                <YStack>
                  <Paragraph>Status</Paragraph>
                  <Paragraph fontWeight="bold">
                    {STATUSES[torrent.status]}
                  </Paragraph>
                </YStack>
                <YStack>
                  <Paragraph>Speed</Paragraph>
                  <Speed
                    downloadSpeed={torrent.rateDownload}
                    uploadSpeed={torrent.rateUpload}
                  />
                </YStack>
                <YStack>
                  <Paragraph>Peers</Paragraph>
                  <Paragraph fontWeight="bold">
                    {torrent.peers.length}
                  </Paragraph>
                </YStack>
                <YStack>
                  <Paragraph alignSelf="flex-end">Size</Paragraph>
                  <Paragraph fontWeight="bold" alignSelf="flex-end">
                    {prettyBytes(torrent.totalSize)}
                  </Paragraph>
                </YStack>
              </XStack>
            </YStack>
          </Card.Footer>
          {/* <Card.Background bc="$background" /> */}
        </Card>
      ))}
    </YStack>
  )
}
