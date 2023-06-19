import React, { useContext, useEffect, useRef, useState } from 'react'
import { AcceptOrRejectPeerDialog } from '../dialogs/AcceptOrRejectPeerDialog'
import isElectron from 'is-electron'
import { NodeContext } from '../contexts/NodeContext'

export const PeerRequest = () => {
  const node = useContext(NodeContext)
  const [pendingPeer, setPendingPeer] = useState(null)
  const eventResponse = useRef(null)

  useEffect(() => {
    if (!isElectron() || !window.electronAPI) return

    window.electronAPI.handleAcceptOrRejectPeer((event, { id, name }) => {
      eventResponse.current = event
      setPendingPeer({ id, name })
    })
  }, [])

  const sendReponse = (response) => {
    eventResponse.current.sender.send('onAcceptOrRejectPeerResponse', response)
    eventResponse.current = null
    setPendingPeer(null)
  }

  if (pendingPeer) {
    return (
      <AcceptOrRejectPeerDialog
        name={pendingPeer.name}
        onResponse={sendReponse}
      />
    )
  }

  return null
}
