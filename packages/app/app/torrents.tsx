import { PauseCircle, PlayCircle } from '@tamagui/lucide-icons'
import { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Button, Card, H3, Paragraph, XStack, YStack } from 'tamagui'
import { NodeContext } from '../contexts/node'
import prettyBytes from 'pretty-bytes'

const REFRESH_INTERVAL = 10_000

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
            ],
          },
        })

        console.log('response', response)
        setTorrents(response.payload.arguments.torrents)
      } catch (e) {}
    }

    const interval = setInterval(async () => {
      fetchTorrents()
    }, REFRESH_INTERVAL)

    fetchTorrents()

    return () => clearInterval(interval)
  }, [])

  return (
    <YStack gap="$6">
      {torrents.map((torrent) => (
        <Card key={torrent.id} bordered size="$2">
          <Card.Header>
            <XStack ai="center" gap="$2">
              {STATUSES[torrent.status] === STATUSES[0] ? (
                <Button circular scaleIcon={3} icon={PlayCircle}></Button>
              ) : (
                <Button circular scaleIcon={3} icon={PauseCircle}></Button>
              )}
              <H3>{torrent.name}</H3>
            </XStack>
          </Card.Header>
          <Card.Footer>
            <XStack gap="$8" jc="space-between" w="100%">
              <Paragraph>
                {Math.round(torrent.percentComplete * 100)} %
              </Paragraph>
              <Paragraph>{STATUSES[torrent.status]}</Paragraph>
              <Paragraph>{prettyBytes(torrent.totalSize)}</Paragraph>
            </XStack>
          </Card.Footer>
        </Card>
      ))}
    </YStack>
  )
}
