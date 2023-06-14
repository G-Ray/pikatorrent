import isElectron from 'is-electron'

if (!isElectron()) {
  throw 'Not in electron'
}

export const useLocalNode = () => {
  const sendRPCMessage = async (json: any) => {
    const res = await window.electronAPI.transmissionRequest(json)
    return res
  }

  return {
    sendRPCMessage,
    isConnected: true,
  }
}
