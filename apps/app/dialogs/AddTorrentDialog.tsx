import React, { useEffect } from 'react'
import { PlusCircle, X } from '@tamagui/lucide-icons'
import { useContext, useState } from 'react'
import { Button, Fieldset, Input, Label, Paragraph, YStack } from 'tamagui'
import { NodeContext } from '../contexts/node'
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

    console.log('documentResult', documentResult)

    if (documentResult.type === 'cancel') return

    setDocumentResult(documentResult)
  }

  return (
    <Dialog
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
      <Dialog.Description>
        Add a new torrent by pasting a magnet link, or selecting a .torrent file
        .
      </Dialog.Description>

      <Fieldset horizontal gap="$4">
        <Label w={160} justifyContent="flex-end" htmlFor="name">
          Torrent or magnet link
        </Label>
        <Input
          f={1}
          id="name"
          placeholder="magnet://"
          value={magnet}
          onChangeText={setMagnet}
        />
      </Fieldset>
      <Paragraph>Or</Paragraph>

      <Fieldset horizontal gap="$4">
        <Button theme="yellow" onPress={handleSelectTorrentFile}>
          Select a .torrent file
        </Button>
        {documentResult && <Paragraph>{documentResult.name}</Paragraph>}
      </Fieldset>

      <YStack ai="flex-end" mt="$2">
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
