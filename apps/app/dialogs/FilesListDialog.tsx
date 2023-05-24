import React, { useEffect, useState } from 'react'
import { List } from '@tamagui/lucide-icons'
import { useContext } from 'react'
import { Button, ListItem, Paragraph, XStack, YGroup } from 'tamagui'
import { NodeContext } from '../contexts/node'
import { Dialog } from './Dialog'
import { FlatList } from 'react-native'
import prettyBytes from 'pretty-bytes'

export const FilesListDialog = ({ torrentId }) => {
  const { sendRPCMessage } = useContext(NodeContext)
  const [files, setFiles] = useState([])

  useEffect(() => {
    const fetchFiles = async () => {
      console.log('sendRPCMessage')
      const result = await sendRPCMessage({
        method: 'torrent-get',
        arguments: {
          ids: [torrentId],
          fields: ['files'],
        },
      })

      setFiles(result.payload.arguments.torrents[0].files)
    }
    fetchFiles()
  }, [sendRPCMessage, torrentId])

  return (
    <Dialog
      title="Files"
      trigger={
        <Button icon={List} br={50}>
          <Paragraph>{files.length} Files</Paragraph>
        </Button>
      }
    >
      <XStack overflow="scroll">
        <YGroup alignSelf="center" bordered size="$2">
          <FlatList
            data={files}
            renderItem={({ item }) => (
              <YGroup.Item>
                <ListItem
                  hoverTheme
                  title={item.name}
                  subTitle={prettyBytes(item.length)}
                />
              </YGroup.Item>
            )}
          />
        </YGroup>
      </XStack>
    </Dialog>
  )
}
