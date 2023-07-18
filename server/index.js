const { ipcMain } = require('electron/main');
const LightingService = require('./LightingService');

const Server = (window) => {
	ipcMain.on('updateChannel', (event, channel, value) => LightingService.updateChannel(channel, value));
}

module.exports = Server;
