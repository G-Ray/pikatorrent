import React from 'react'
import { Button, TextArea } from 'tamagui'
import { Dialog } from './Dialog'

export const SessionsInfoDialog = ({ session }) => {
  return (
    <Dialog
      title="Session info"
      trigger={<Button themeInverse>Session info</Button>}
    >
      <TextArea
        w={800}
        h={500}
        f={1}
        value={JSON.stringify(session, null, 2)}
      />
    </Dialog>
  )
}
