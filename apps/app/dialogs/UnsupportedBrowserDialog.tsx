import React from 'react'
import { Adapt, Dialog, Sheet } from 'tamagui'

export const UnsupportedBrowserDialog = () => {
  return (
    <Dialog modal open>
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
          h="50%"
        >
          <Dialog.Title>Unsupported browser</Dialog.Title>
          <Dialog.Description>
            This browser is not supported. Please try pikatorrent in another
            browser.
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
