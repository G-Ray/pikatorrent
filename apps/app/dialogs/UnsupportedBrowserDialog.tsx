import React from 'react'
import { Dialog } from './Dialog'

export const UnsupportedBrowserDialog = () => {
  return (
    <Dialog open title="Unsupported browser">
      <Dialog.Description>
        This browser is not supported. Please try pikatorrent in another
        browser.
      </Dialog.Description>
    </Dialog>
  )
}
