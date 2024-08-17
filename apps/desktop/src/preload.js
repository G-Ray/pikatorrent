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
  onAcceptOrRejectPeerResponse: (response) =>
    ipcRenderer.send('onAcceptOrRejectPeerResponse', response),
  openFolder: (...paths) => ipcRenderer.invoke('node:openFolder', ...paths),
  selectFolder: (...args) => ipcRenderer.invoke('selectFolder', ...args),
  quitApp: () => ipcRenderer.invoke('quitApp'),
  openFile: (...paths) => ipcRenderer.invoke('openFile', ...paths),
  onRedirect: (callback) => ipcRenderer.on('onRedirect', callback),
  readFileAsBase64: (path) => ipcRenderer.invoke('readFileAsBase64', path),
})

contextBridge.exposeInMainWorld('theme', {
  set: (theme) => ipcRenderer.invoke('theme:set', theme),
})
