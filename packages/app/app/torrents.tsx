import {
  ChevronDown,
  ChevronUp,
  PauseCircle,
  PlayCircle,
} from '@tamagui/lucide-icons'
import { useContext, useEffect, useState } from 'react'
import {
  Button,
  Card,
  H4,
  H5,
  Paragraph,
  Progress,
  XStack,
  YStack,
} from 'tamagui'
import { NodeContext } from '../contexts/node'
import prettyBytes from 'pretty-bytes'
import { RemoveTorrentDialog } from '../dialogs/RemoveTorrentDialog'

const REFRESH_INTERVAL = 5_000

const STATUSES = {
  0: 'Stopped',
  4: 'Downloading',
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
        <Card key={torrent.id} bordered size="$2">
          <Card.Header theme="light">
            <XStack jc="space-between">
              <XStack ai="center" space="$2">
                {STATUSES[torrent.status] === STATUSES[0] ? (
                  <Button
                    color="$gray12"
                    circular
                    scaleIcon={3}
                    icon={PlayCircle}
                    onClick={() => handleResume(torrent.id)}
                  ></Button>
                ) : (
                  <Button
                    color="$gray12"
                    circular
                    scaleIcon={3}
                    icon={PauseCircle}
                    onClick={() => handlePause(torrent.id)}
                  ></Button>
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
                flex={1}
                jc="space-between"
                w="100%"
                flexWrap="wrap"
                gap="$4"
              >
                <YStack>
                  <Paragraph>Progress</Paragraph>
                  <Paragraph theme="light" fontWeight="bold">
                    {Math.round(torrent.percentComplete * 100)}%
                  </Paragraph>
                </YStack>
                <YStack>
                  <Paragraph>Status</Paragraph>
                  <Paragraph theme="light" fontWeight="bold">
                    {STATUSES[torrent.status]}
                  </Paragraph>
                </YStack>
                <YStack>
                  <Paragraph>Speed</Paragraph>
                  <XStack space="$4">
                    <XStack theme="light">
                      <ChevronDown color="$purple9" />
                      <Paragraph theme="light" fontWeight="bold">
                        {prettyBytes(torrent.rateDownload)}/s
                      </Paragraph>
                    </XStack>
                    <XStack theme="light">
                      <ChevronUp color="$blue9" />
                      <Paragraph theme="light" fontWeight="bold">
                        {prettyBytes(torrent.rateUpload)}/s
                      </Paragraph>
                    </XStack>
                  </XStack>
                </YStack>
                <YStack>
                  <Paragraph>Peers</Paragraph>
                  <Paragraph theme="light" fontWeight="bold">
                    {torrent.peers.length}
                  </Paragraph>
                </YStack>
                <YStack>
                  <Paragraph alignSelf="flex-end">Size</Paragraph>
                  <Paragraph
                    theme="light"
                    fontWeight="bold"
                    alignSelf="flex-end"
                  >
                    {prettyBytes(torrent.totalSize)}
                  </Paragraph>
                </YStack>
              </XStack>
            </YStack>
          </Card.Footer>
        </Card>
      ))}
    </YStack>
  )
}
