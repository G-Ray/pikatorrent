import React, { useEffect, useRef } from 'react'
import { PlusCircle, X } from '@tamagui/lucide-icons'
import { useContext, useState } from 'react'
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Paragraph,
  Sheet,
  Unspaced,
  YStack,
} from 'tamagui'
import { NodeContext } from '../contexts/node'
import { Platform } from 'react-native'
import * as DocumentPicker from 'expo-document-picker'

function readFileToBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () =>
      resolve(
        reader.result?.slice('data:application/x-bittorrent;base64,'.length)
      )
    reader.onerror = reject
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
            metainfo: await readFileToBase64(documentResult.file),
          }
        : { filename: magnet }

      const response = await sendRPCMessage({
        method: 'torrent-add',
        arguments: torrentAddArgs,
      })

      console.log('response', response)
    } catch (e) {
      console.error(e)
    }
  }

  const handleSelectTorrentFile = async () => {
    if (Platform.OS !== 'web') return
    // TODO: Mobile

    const documentResult = await DocumentPicker.getDocumentAsync({
      type: '.torrent',
    })

    if (documentResult.type === 'cancel') return

    setDocumentResult(documentResult)
  }

  return (
    <Dialog modal defaultOpen={defaultOpen}>
      <Dialog.Trigger asChild>
        <Button icon={PlusCircle} themeInverse>
          Add
        </Button>
      </Dialog.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" space>
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          o={0.5}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          space
        >
          <Dialog.Title>Add a torrent</Dialog.Title>
          <Dialog.Description>
            Add a new torrent by pasting a magnet link, or selecting a .torrent
            file .
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
                onClick={handleAddTorrent}
              >
                Add
              </Button>
            </Dialog.Close>
          </YStack>

          <Unspaced>
            <Dialog.Close asChild>
              <Button
                pos="absolute"
                t="$3"
                r="$3"
                size="$2"
                circular
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
