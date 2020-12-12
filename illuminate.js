const blessed = require('blessed');

const screen = blessed.screen({smartCSR: true});

screen.title = 'Illuminate';

const table = blessed.ListTable({
  border: {
    type: 'line'
  },
  width: 50,
  interactive: true,
  tags: true,
  scrollable: true,
  style: {
    border: {
      type: 'line'
    },
    cell: {
      fg: 'white'
    },
  },
  pad: 0
});

const addresses = [];
const row = [];
const rowWidth = 32;

for (let a=1; a<=rowWidth*2; a++) {
  row.push();
  if (a % rowWidth === 0) {
    addresses.push([...row]);
    row.length = 0;
  }
}

for (let a=1; a<=512; a++) {
  row.push(`${a}`);
  if (a % rowWidth === 0) {
    addresses.push([...row]);
    row.length = 0;
  }
}

table.setData(addresses);

screen.key(['escape', 'q', 'C-c'], (ch, key) => process.exit(0));
// If box is focused, handle `enter`/`return` and give us some more content.
screen.key('enter', (ch, key) => {
  table.setData();
  screen.render();
});
screen.append(table);
table.focus();
screen.render();
