import React, { useEffect, useRef, useState } from 'react'
import { AcceptOrRejectPeerDialog } from '../dialogs/AcceptOrRejectPeerDialog'
import isElectron from 'is-electron'

export const PeerRequest = () => {
  const [pendingPeer, setPendingPeer] = useState(null)

  useEffect(() => {
    if (!isElectron() || !window.electronAPI) return

    window.electronAPI.handleAcceptOrRejectPeer((_, { id, name }) => {
      setPendingPeer({ id, name })
    })
  }, [])

  const sendResponse = (response: boolean) => {
    if (response !== undefined) {
      window.electronAPI.onAcceptOrRejectPeerResponse(response)
      setPendingPeer(null)
    }
  }

  if (pendingPeer) {
    return (
      <AcceptOrRejectPeerDialog
        name={pendingPeer.name}
        onResponse={sendResponse}
      />
    )
  }

  return null
}
