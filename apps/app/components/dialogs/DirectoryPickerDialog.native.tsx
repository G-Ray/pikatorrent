import React, { useEffect, useState } from 'react'
import { ArrowLeft, Folder, FolderOpen } from '@tamagui/lucide-icons'
import {
  Button,
  Input,
  YStack,
  ListItem,
  ScrollView,
  XStack,
  Label,
  Paragraph,
  Switch,
  useThemeName,
} from 'tamagui'
import { YGroup } from 'tamagui'
import RNFS from 'react-native-fs'
import * as FileSystem from 'expo-file-system'
import { Separator } from 'tamagui'

import { Dialog } from '../reusable/Dialog'
import { PRIVATE_DOWNLOAD_DIR } from '../../lib/transmission.native'
import { useI18n } from '../../hooks/use18n'

const PRIVATE_DOWNLOAD_DIR_FILE_URI = 'file://' + PRIVATE_DOWNLOAD_DIR
const ROOT_FILE_URI = 'file://' + RNFS.ExternalStorageDirectoryPath

export const DirectoryPickerDialog = ({ onSelect }) => {
  const i18n = useI18n()
  const [directories, setDirectories] = useState<string[]>([])
  const [currentFileUri, setCurrentFileUri] = useState(ROOT_FILE_URI)
  const theme = useThemeName()

  useEffect(() => {
    if (currentFileUri === PRIVATE_DOWNLOAD_DIR_FILE_URI) {
      return
    }

    const readDirectories = async () => {
      const entries =
        currentFileUri === ROOT_FILE_URI
          ? ['Documents', 'Download'] // Public folders
          : await FileSystem.readDirectoryAsync(currentFileUri)

      const directories = currentFileUri !== ROOT_FILE_URI ? ['..'] : []

      for (const entry of entries) {
        const fileUri = `${currentFileUri}/${entry}`
        const info = await FileSystem.getInfoAsync(fileUri)
        if (info.isDirectory) {
          directories.push(entry)
        }
      }

      setDirectories([...directories.sort()])
    }

    readDirectories()
  }, [currentFileUri])

  const handleChangeDirectory = (directory: string) => {
    if (directory === '..') {
      setCurrentFileUri((cur) => {
        const directories = cur.split('/')
        const lastDir = directories[directories.length - 1]
        return cur.substring(0, cur.length - `/${lastDir}`.length)
      })
    } else {
      setCurrentFileUri((cur) => `${cur}/${directory}`)
    }
  }

  const currentPath = currentFileUri.substring('file://'.length)

  const handleSelect = () => {
    onSelect(currentPath)
  }

  return (
    <Dialog
      title={i18n.t('directoryPickerDialog.title')}
      snapPoints={[90]}
      trigger={<Button icon={FolderOpen} />}
    >
      <YStack gap="$4" pt="$4" f={1}>
        <XStack alignItems="center" jc="center" space="$4">
          <Switch
            id={'use-private-dir-switch'}
            checked={currentPath === PRIVATE_DOWNLOAD_DIR}
            onCheckedChange={(checked) => {
              if (checked) {
                setCurrentFileUri(PRIVATE_DOWNLOAD_DIR_FILE_URI)
              } else {
                setCurrentFileUri(ROOT_FILE_URI)
              }
            }}
          >
            <Switch.Thumb animation="quick" />
          </Switch>
          <Label
            paddingRight="$0"
            minWidth={90}
            justifyContent="flex-end"
            htmlFor={'use-private-dir-switch'}
          >
            {i18n.t('directoryPickerDialog.privateAppSwitchLabel')}
          </Label>
        </XStack>

        <YStack f={1}>
          {currentPath !== PRIVATE_DOWNLOAD_DIR ? (
            <ScrollView>
              <YGroup
                alignSelf="center"
                bordered
                size="$4"
                separator={<Separator />}
                f={1}
                w="100%"
              >
                {directories.map((entry) => (
                  <YGroup.Item key={entry}>
                    <ListItem
                      hoverTheme
                      pressTheme
                      onPress={() => handleChangeDirectory(entry)}
                      icon={entry === '..' ? ArrowLeft : Folder}
                      title={entry}
                    ></ListItem>
                  </YGroup.Item>
                ))}
              </YGroup>
            </ScrollView>
          ) : (
            <>
              <Paragraph>
                {i18n.t('directoryPickerDialog.privateAppDescription1')}
              </Paragraph>
              <Paragraph>
                {i18n.t('directoryPickerDialog.privateAppDescription2')}
              </Paragraph>
            </>
          )}
        </YStack>
        <Input editable={false} value={currentPath} />
        <Dialog.Close asChild displayWhenAdapted>
          <Button
            onPress={handleSelect}
            disabled={currentFileUri === ROOT_FILE_URI}
            o={currentFileUri === ROOT_FILE_URI ? 0.5 : 1}
          >
            {i18n.t('directoryPickerDialog.select')}
          </Button>
        </Dialog.Close>
      </YStack>
    </Dialog>
  )
}
