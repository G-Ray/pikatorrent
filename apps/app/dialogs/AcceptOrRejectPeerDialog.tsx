import React from 'react'
import { Button, Paragraph, XStack } from 'tamagui'
import { Dialog } from './Dialog'

export const AcceptOrRejectPeerDialog = ({ name, onResponse }) => {
  return (
    <Dialog
      open
      title="Authorize new connection"
      dismissOnOverlayPress={false}
      dismissOnSnapToBottom={false}
    >
      <Paragraph>A new device would like to control pikatorrent:</Paragraph>
      <Paragraph fontWeight={'bold'} margin="auto">
        {name}
      </Paragraph>
      <Paragraph>
        If you do not recognize this device, click on reject.
      </Paragraph>

      <XStack marginLeft="auto" gap="$4">
        <Button theme="red" onPress={() => onResponse(false)}>
          Reject
        </Button>
        <Button theme="green" onPress={() => onResponse(true)}>
          Accept
        </Button>
      </XStack>
    </Dialog>
  )
}
