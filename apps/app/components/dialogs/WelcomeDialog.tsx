import React, { useContext } from 'react'
import { Card, Text, XStack, YStack } from 'tamagui'
import { Rocket } from '@tamagui/lucide-icons'

import { AddNodeDialog } from './AddNodeDialog'
import { SettingsContext } from '../../contexts/SettingsContext'
import { Dialog } from '../reusable/Dialog'

// TODO: Remove
export const WelcomeDialog = () => {
  const settingsContext = useContext(SettingsContext)

  return (
    <Dialog
      snapPoints={[80, 60]}
      defaultPosition={1}
      open
      title={
        <>
          Welcome <Rocket />
        </>
      }
      dismissOnOverlayPress={false}
      dismissOnSnapToBottom={false}
    >
      <YStack>
        <Dialog.Description mb="$4">
          PikaTorrent allows you to control one or multiple pikatorrent node(s).
        </Dialog.Description>
        <Dialog.Description mb="$4">
          During the alpha, you can install a pikatorrent node on a computer
          where nodejs is installed, with:
        </Dialog.Description>
        <XStack jc="center">
          <Card p="$4" br="$4" mb="$4">
            <Text color="white" fontFamily="monospace">
              npm install -g pikatorrent
            </Text>
            <Text color="white" fontFamily="monospace">
              pikatorrent node
            </Text>
          </Card>
        </XStack>
        <Dialog.Description mb="$4">{`Then click on the displayed link to quickly add a node, or click on the following button to enter your secret node id manually:`}</Dialog.Description>
        <XStack jc="center" ai="center" mb="$4">
          <AddNodeDialog settingsContext={settingsContext} />
        </XStack>
        <Dialog.Description>
          {`You will be able to manage your nodes later in settings > nodes.`}
        </Dialog.Description>
      </YStack>
    </Dialog>
  )
}
