import React from 'react'
import { FolderEdit } from '@tamagui/lucide-icons'
import { Button } from 'tamagui'

export const DirectoryPickerDialog = ({ selectedPath = '', onSelect }) => {
  const openElectronFolderPicker = async () => {
    const selectedFolders = await window.electronAPI.selectFolder(selectedPath)

    if (selectedFolders && selectedFolders.length > 0) {
      const path = selectedFolders[0]
      onSelect(path)
    }
  }

  return <Button icon={FolderEdit} onPress={() => openElectronFolderPicker()} />
}
