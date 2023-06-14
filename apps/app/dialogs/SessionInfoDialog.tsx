import React from 'react'
import { Button, TextArea } from 'tamagui'
import { Dialog } from './Dialog'

export const SessionsInfoDialog = ({ session }) => {
  return (
    <Dialog
      title="Session info"
      trigger={<Button>Session info</Button>}
      snapPoints={[90]}
    >
      <TextArea
        w={800}
        h={500}
        value={JSON.stringify(session, null, 2)}
        disabled
      />
    </Dialog>
  )
}
