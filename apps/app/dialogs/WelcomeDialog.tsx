import React, { useContext } from 'react'
import { Adapt, Card, Dialog, Sheet, Text, XStack, YStack } from 'tamagui'
import { AddNodeDialog } from './AddNodeDialog'
import { Rocket } from '@tamagui/lucide-icons'
import { SettingsContext } from '../contexts/settings'

export const WelcomeDialog = () => {
  const settingsContext = useContext(SettingsContext)

  return (
    <Dialog modal open>
      <Adapt when="sm" platform="touch">
        <Sheet
          zIndex={200000}
          modal
          snapPoints={[90, 80]}
          defaultPosition={1}
          dismissOnOverlayPress={false}
        >
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
          w={500}
        >
          <YStack>
            <Dialog.Title pb="$4">
              Welcome <Rocket />
            </Dialog.Title>
            <Dialog.Description mb="$4">
              PikaTorrent allows you to control one or multiple pikatorrent
              node(s).
            </Dialog.Description>
            <Dialog.Description mb="$4">
              During the alpha, you can install a pikatorrent node on a computer
              where nodejs is installed, with:
            </Dialog.Description>
            <XStack jc="center">
              <Card bc="black" p="$4" br="$4" mb="$4">
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
