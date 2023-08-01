import React from 'react'
import { X } from '@tamagui/lucide-icons'
import {
  Adapt,
  Button,
  Dialog as TamaguiDialog,
  Sheet,
  Unspaced,
} from 'tamagui'
import { Platform } from 'react-native'

type DialogProps = {
  title?: string | React.ReactNode
  trigger?: React.ReactNode
  children: React.ReactNode
  snapPoints?: Array<number>
  defaultPosition?: number
  defaultOpen?: boolean
  open?: boolean
  dismissOnOverlayPress?: boolean
  dismissOnSnapToBottom?: boolean
  onOpenChange?: () => {}
}

const Dialog = ({
  title,
  trigger,
  children,
  snapPoints = [50],
  defaultPosition,
  defaultOpen,
  open,
  dismissOnOverlayPress = true,
  dismissOnSnapToBottom = true,
  onOpenChange,
}: DialogProps) => {
  return (
    <TamaguiDialog
      modal
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
    >
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Adapt when="sm">
        <Sheet
          zIndex={200000}
          modal
          dismissOnSnapToBottom={dismissOnSnapToBottom}
          snapPoints={snapPoints}
          defaultPosition={defaultPosition}
          dismissOnOverlayPress={dismissOnOverlayPress}
        >
          <Sheet.Frame padding="$4" space>
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <TamaguiDialog.Portal>
        <TamaguiDialog.Overlay
          key="overlay"
          animation="quick"
          o={0.5}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />

        <TamaguiDialog.Content
          {...(Platform.OS === 'web' && {
            maxHeight: '50vh',
            maxWidth: '50vw',
          })}
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
          {title && (
            <TamaguiDialog.Title fontSize={'$8'}>{title}</TamaguiDialog.Title>
          )}
          {children}
          <Unspaced>
            <TamaguiDialog.Close asChild>
              <Button
                pos="absolute"
                t="$3"
                r="$3"
                size="$2"
                circular
                icon={X}
              />
            </TamaguiDialog.Close>
          </Unspaced>
        </TamaguiDialog.Content>
      </TamaguiDialog.Portal>
    </TamaguiDialog>
  )
}

Dialog.Close = TamaguiDialog.Close
Dialog.Trigger = TamaguiDialog.Trigger
Dialog.Description = TamaguiDialog.Description

export { Dialog }
