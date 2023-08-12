import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import { Button, Fieldset, Input, Label, Paragraph, YStack } from 'tamagui'
import { NodeContext } from '../contexts/NodeContext'
import { Platform } from 'react-native'
import * as DocumentPicker from 'expo-document-picker'
import * as FileSystem from 'expo-file-system'
import { Dialog } from './Dialog'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useURL } from 'expo-linking'
import isElectron from 'is-electron'

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
  const [torrentFilePath, setTorrentFilePath] = useState<string | null>(null)
  const [documentResult, setDocumentResult] =
    useState<DocumentPicker.DocumentResult | null>(null)
  const { sendRPCMessage } = useContext(NodeContext)
  const localSearchParams = useLocalSearchParams()
  const router = useRouter()
  const url = useURL()

  useEffect(() => {
    if (!url) return

    // Web links, hash are supported
    if (url.includes('#')) {
      const afterHash = url.split('#')[1]
      if (
        afterHash &&
        (/^magnet:/.test(afterHash) || /^https:/.test(afterHash))
      ) {
        setMagnet(decodeURIComponent(afterHash))
        setTorrentFilePath(null)
      } else if (isElectron()) {
        // could be a path ?
        setTorrentFilePath(afterHash)
      }
    }
  }, [url])

  useEffect(() => {
    if (Platform.OS !== 'android' && !isElectron()) {
      return
    }

    // Handle magnet links on Android & electron
    // hash in routes are not supported yet
    if (
      localSearchParams.magnet &&
      typeof localSearchParams.magnet === 'string'
    ) {
      setMagnet(decodeURIComponent(localSearchParams.magnet))
      setTorrentFilePath(null)
      setDocumentResult(null)
    }
  }, [localSearchParams])

  const handleAddTorrent = async () => {
    try {
      let torrentAddArgs

      if (documentResult) {
        // Document from file picker
        torrentAddArgs = {
          metainfo: await readFileToBase64(documentResult),
        }
      } else if (magnet) {
        // Magnet
        torrentAddArgs = {
          filename: magnet,
        }
      } else if (torrentFilePath) {
        const content = await window.electronAPI.readFileAsBase64(
          torrentFilePath
        )
        torrentAddArgs = {
          metainfo: content,
        }
      }

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

    if (documentResult.canceled || documentResult.assets.length === 0) return

    setDocumentResult(documentResult.assets[0])
    setTorrentFilePath(null)
  }

  return (
    <Dialog
      onOpenChange={() => {
        router.push('/')
        // TODO: wait for animation duration to finish
      }}
      // snapPoints={[42]}
      defaultOpen
      title="Add a torrent"
    >
      <Fieldset horizontal gap="$4">
        <Input
          f={1}
          id="torrent-uri"
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
        {torrentFilePath && <Paragraph>{torrentFilePath}</Paragraph>}
      </Fieldset>

      <YStack ai="flex-end">
        <Dialog.Close displayWhenAdapted asChild>
          <Button
            theme="yellow"
            aria-label="Close"
            disabled={
              magnet.length === 0 &&
              torrentFilePath === null &&
              documentResult === null
            }
            onPress={handleAddTorrent}
          >
            Add
          </Button>
        </Dialog.Close>
      </YStack>
    </Dialog>
  )
}
