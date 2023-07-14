const { ipcMain } = require('electron/main');

const Server = (window) => {
	ipcMain.on('test', () => console.log('test'));
}

module.exports = Server;
