import React from 'react'
import { List } from '@tamagui/lucide-icons'
import { Button, ListItem, Paragraph, XStack, YGroup } from 'tamagui'
import { Dialog } from './Dialog'
import { FlatList } from 'react-native'
import prettyBytes from 'pretty-bytes'

export const FilesListDialog = ({ torrent }) => {
  return (
    <Dialog
      title="Files"
      trigger={<Button icon={List}>Files</Button>}
      snapPoints={[50]}
    >
      <XStack overflow="scroll">
        <YGroup alignSelf="center" bordered size="$2" f={1}>
          <FlatList
            data={torrent.files}
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
