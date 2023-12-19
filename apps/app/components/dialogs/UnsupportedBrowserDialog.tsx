import React from 'react'

import { Dialog } from '../reusable/Dialog'
import { useI18n } from '../../hooks/use18n'

export const UnsupportedBrowserDialog = () => {
  const i18n = useI18n()

  return (
    <Dialog open title={i18n.t('unsupportedBrowserDialog.title')}>
      <Dialog.Description>
        {i18n.t('unsupportedBrowserDialog.description')}
      </Dialog.Description>
    </Dialog>
  )
}
