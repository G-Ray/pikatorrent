import React, { useEffect } from 'react'
import { PlusCircle } from '@tamagui/lucide-icons'
import { useContext, useState } from 'react'
import { Button, Fieldset, Input, Label, Paragraph, YStack } from 'tamagui'
import { NodeContext } from '../contexts/NodeContext'
import { Platform } from 'react-native'
import * as DocumentPicker from 'expo-document-picker'
import * as FileSystem from 'expo-file-system'
import { Dialog } from './Dialog'

function readFileToBase64(document: DocumentPicker.DocumentResult) {
  return new Promise((resolve, reject) => {
    if (Platform.OS === 'web') {
      const reader = new FileReader()
      reader.readAsDataURL(document.file)
      reader.onload = () =>
        resolve(
          reader.result?.slice('data:application/x-bittorrent;base64,'.length)
        )
      reader.onerror = reject
    } else {
      FileSystem.readAsStringAsync(document.uri, { encoding: 'base64' })
        .then(resolve)
        .catch(reject)
    }
  })
}

export const AddTorrentDialog = () => {
  const [magnet, setMagnet] = useState('')
  const [documentResult, setDocumentResult] =
    useState<DocumentPicker.DocumentResult | null>(null)
  const { sendRPCMessage } = useContext(NodeContext)

  const defaultOpen = Boolean(
    Platform.OS === 'web' &&
      new URLSearchParams(document.location.search).get('magnet')
  )

  useEffect(() => {
    // Open modal with magnet from url searchParams
    if (Platform.OS !== 'web') return

    const searchParams = new URLSearchParams(document.location.search)
    if (searchParams.get('magnet')) {
      setMagnet(searchParams.get('magnet'))
    }
  }, [])

  const handleAddTorrent = async () => {
    try {
      const torrentAddArgs = documentResult
        ? {
            metainfo: await readFileToBase64(documentResult),
          }
        : { filename: magnet }

      await sendRPCMessage({
        method: 'torrent-add',
        arguments: torrentAddArgs,
      })
    } catch (e) {
      console.error(e)
    }
  }

  const handleSelectTorrentFile = async () => {
    // FIXME: handle rejection
    const documentResult = await DocumentPicker.getDocumentAsync({
      type: ['application/x-bittorrent', '.torrent'],
    })

    if (documentResult.type === 'cancel') return

    setDocumentResult(documentResult)
  }

  return (
    <Dialog
      snapPoints={[42]}
      defaultOpen={defaultOpen}
      title="Add a torrent"
      trigger={
        <Button
          borderColor={'$yellow9'}
          theme="yellow"
          icon={PlusCircle}
          borderTopLeftRadius={50}
          borderBottomLeftRadius={50}
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
        >
          Add
        </Button>
      }
    >
      <Fieldset horizontal gap="$4">
        <Input
          f={1}
          id="name"
          placeholder="torrent or magnet:// links"
          value={magnet}
          onChangeText={setMagnet}
        />
      </Fieldset>
      <Paragraph fontWeight="bold" mx="auto">
        Or
      </Paragraph>

      <Fieldset gap="$4">
        <Button theme="yellow" onPress={handleSelectTorrentFile}>
          Select a .torrent file
        </Button>
        {documentResult && <Paragraph>{documentResult.name}</Paragraph>}
      </Fieldset>

      <YStack ai="flex-end">
        <Dialog.Close displayWhenAdapted asChild>
          <Button
            theme="yellow"
            aria-label="Close"
            disabled={magnet.length === 0 && documentResult === null}
            onPress={handleAddTorrent}
          >
            Add
          </Button>
        </Dialog.Close>
      </YStack>
    </Dialog>
  )
}
