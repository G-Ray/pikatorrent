import React from 'react'
import { Trash } from '@tamagui/lucide-icons'
import { useContext } from 'react'
import { Button, Paragraph, XStack } from 'tamagui'
import { NodeContext } from '../contexts/node'
import { Dialog } from './Dialog'

export const RemoveTorrentDialog = ({ id }) => {
  const { sendRPCMessage } = useContext(NodeContext)

  const handleRemoveTorrent = async (deleteLocalData: boolean = false) => {
    try {
      await sendRPCMessage({
        method: 'torrent-remove',
        arguments: { ids: [id], 'delete-local-data': deleteLocalData },
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Dialog
      title="Remove a torrent"
      trigger={
        <Button icon={Trash} theme="red" br={50}>
          Remove
        </Button>
      }
    >
      <XStack space="$4" ai="center">
        <Dialog.Close displayWhenAdapted asChild>
          <Button onPress={() => handleRemoveTorrent(false)} theme="yellow">
            Remove torrent only
          </Button>
        </Dialog.Close>
        <Paragraph>or</Paragraph>
        <Dialog.Close displayWhenAdapted asChild>
          <Button onPress={() => handleRemoveTorrent(true)} theme="red">
            Remove torrent and data
          </Button>
        </Dialog.Close>
      </XStack>
    </Dialog>
  )
}
