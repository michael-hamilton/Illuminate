// Example usage of dmxus
// /dev/tty.usbserial-EN288085
// {"red": 0, "green": 0, "blue": 0, "white": 0}

// Require the module
const dmxus = require('dmxus');
const repl = require('repl');

let d;

const replServer = repl.start({ prompt: 'dmxus> ' });

replServer.defineCommand('init', {
  help: 'Init',
  action(interface) {
    replServer.clearBufferedCommand();

    d = new dmxus('enttec-dmx-usb-pro', interface);
    d.patchFixture(1, dmxus.getFixtureProfile('RGBW'));
    d.addFixtureToGroup('group', 1);
    const initParameters = {
      "red": 0,
      "green": 0,
      "blue": 0,
      "white": 0
    };

    d.updateAllFixtures(initParameters);

    replServer.displayPrompt();
  }
});

replServer.defineCommand('update', {
  help: 'Update',
  action(params) {
    replServer.clearBufferedCommand();
    d.updateAllFixturesInGroup('group', JSON.parse(params), 1000);
    replServer.displayPrompt();
  }
});
