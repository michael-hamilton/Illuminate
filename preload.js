const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('illuminate', {
	updateChannel: (channel, value) => ipcRenderer.send('updateChannel', channel, value)
});
