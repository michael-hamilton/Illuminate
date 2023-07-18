const dmxus = require('dmxus');
const devices = require('../devices.json');

let instance;
let universe;

class LightingService {
	constructor() {
		if (instance) {
			throw new Error('An instance of LightingService already exists.');
		}

		instance = this;

		this.init();
	}

	init() {
		universe = new dmxus('enttec-dmx-usb-pro', '/dev/tty.usbserial-EN304324');
		this.importDevices();
	}

	importDevices() {
		devices.forEach((device) => {
			universe.addDevice(device.id, 1, dmxus.getDeviceProfile("Dimmer"), device.name, ["group"]);
		});
	}

	updateChannel(channel, value) {
		const intensity = 255 * (value/100);
		universe.updateDevice(channel, { intensity });
	}
}

let LightingServiceInstance = Object.freeze(new LightingService());

module.exports = LightingServiceInstance;
