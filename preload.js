const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
	test: (test) => ipcRenderer.send('test', test)
})