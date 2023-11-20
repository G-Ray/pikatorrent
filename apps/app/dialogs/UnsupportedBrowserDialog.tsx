import React from 'react'

import { Dialog } from '../components/reusable/Dialog'
import i18n from '../i18n'

export const UnsupportedBrowserDialog = () => {
  return (
    <Dialog open title={i18n.t('unsupportedBrowserDialog.title')}>
      <Dialog.Description>
        {i18n.t('unsupportedBrowserDialog.description')}
      </Dialog.Description>
    </Dialog>
  )
}
