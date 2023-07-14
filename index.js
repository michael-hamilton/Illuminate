const { app, BrowserWindow } = require('electron');
const path = require('path');
const server = require('./server/index');

const createWindow = async () => {
	let window = new BrowserWindow({
		width: 1920,
		height: 1080,
		minHeight: 1080,
		minWidth: 720,
		icon: path.resolve(`${__dirname}/resources/icon.ico`),
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, 'preload.js')
		}
	});

	window.webContents.once('did-start-loading', async () => {
		server(window);
	});

	if (process.env.NODE_ENV === 'development') {
		window.openDevTools({mode: 'attached'});
		await window.loadURL('http://localhost:1234');
	}
	else {
		await window.loadFile(`dist/index.html`);
	}
};

app.on('ready', createWindow);
