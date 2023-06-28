// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  getNodeSettings: () => ipcRenderer.invoke('node:getNodeSettings'),
  updateNodeSettings: (update) =>
    ipcRenderer.invoke('node:updateSettings', update),
  handleUpdateNodeSettings: (callback) =>
    ipcRenderer.on('onNodeSettingsUpdate', callback),
  transmissionRequest: (request) =>
    ipcRenderer.invoke('transmission:request', request),
  handleAcceptOrRejectPeer: (callback) =>
    ipcRenderer.on('onAcceptOrRejectPeer', callback),
  openFolder: (path) => ipcRenderer.invoke('node:openFolder', path),
})
