import React from 'react'
import { Toast, useToastState } from '@tamagui/toast'

export const ToastController = () => {
  const toast = useToastState()

  // don't show any toast if no toast is present or it's handled natively
  if (!toast || toast.isHandledNatively) {
    return null
  }

  return (
    <Toast
      animation={'quick'}
      enterStyle={{ opacity: 0 }}
      exitStyle={{ opacity: 0 }}
      theme="yellow"
      key={toast.id}
      duration={3000}
    >
      <Toast.Title>{toast.title}</Toast.Title>
      <Toast.Description>{toast.message}</Toast.Description>
    </Toast>
  )
}
