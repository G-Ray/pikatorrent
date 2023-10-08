import React, { useEffect, useRef, useState } from 'react'
import { X } from '@tamagui/lucide-icons'
import {
  Adapt,
  Button,
  Dialog as TamaguiDialog,
  Sheet,
  Unspaced,
  useThemeName,
} from 'tamagui'
import { BackHandler, Platform } from 'react-native'
import { SnapPointsMode } from 'tamagui'

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
  onOpenChange?: (open: boolean) => {}
  snapPointsMode?: SnapPointsMode
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
  snapPointsMode,
}: DialogProps) => {
  const theme = useThemeName()
  const [localOpen, setLocalOpen] = useState(defaultOpen)

  useEffect(() => {
    if (Platform.OS === 'web') {
      return
    }

    const backAction = () => {
      if (onOpenChange) {
        // Dialog is controlled
        onOpenChange(false)
        return true
      }

      if (open == undefined) {
        // Dialog is locally controlled
        setLocalOpen(false)
        return true
      }

      return false
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [onOpenChange, open])

  const handleOpenChange = (isOpen: boolean) => {
    setLocalOpen(isOpen)
    if (onOpenChange) {
      onOpenChange(isOpen)
    }
  }

  return (
    <TamaguiDialog
      modal
      defaultOpen={defaultOpen}
      open={open === undefined ? localOpen : open}
      onOpenChange={handleOpenChange}
    >
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Adapt when="sm">
        <Sheet
          zIndex={200000}
          modal
          dismissOnSnapToBottom={dismissOnSnapToBottom}
          {...(snapPointsMode !== 'fit' && { snapPoints })}
          defaultPosition={defaultPosition}
          dismissOnOverlayPress={dismissOnOverlayPress}
          snapPointsMode={snapPointsMode}
        >
          <Sheet.Handle bc={theme.startsWith('light') ? 'black' : 'white'} />
          <Sheet.Frame padding="$4" bc="$backgroundStrong">
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
            maxHeight: '70vh',
            maxWidth: '50vw',
            overflow: 'auto',
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
                size="$3"
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
