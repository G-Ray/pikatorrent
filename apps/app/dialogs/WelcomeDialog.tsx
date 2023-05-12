import React from 'react'
import { X } from '@tamagui/lucide-icons'
import { Adapt, Button, Dialog, Sheet, Unspaced } from 'tamagui'

export const WelcomeDialog = () => {
  return (
    <Dialog modal defaultOpen>
      <Dialog.Trigger asChild>
        <Button>Session info</Button>
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
          w="50%"
        >
          <Dialog.Title>Welcome to PikaTorrent</Dialog.Title>
          <Dialog.Description>
            PikaTorrent apps (web, and mobile soon) allow you to control one or
            multiple pikatorrent node(s).
          </Dialog.Description>
          <Dialog.Description>
            Please add a node by clicking on the secure link provided by your
            pikatorrent node, or flashing its qrcode.
          </Dialog.Description>
          <Dialog.Description>
            You can also add a node manually in settings.
          </Dialog.Description>

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
