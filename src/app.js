import React, { useState } from 'react';
import FaderBank from './components/FaderBank';
import './app.scss';

const faders = [
	{ id: 1, name: 'Chan 1' },
	{ id: 2, name: 'Chan 2' },
	{ id: 3, name: 'Chan 3' },
	{ id: 4, name: 'Chan 4' },
	{ id: 5, name: 'Chan 5' },
	{ id: 6, name: 'Chan 6' },
	{ id: 7, name: 'Chan 7' },
	{ id: 8, name: 'Chan 8' },
	{ id: 9, name: 'Chan 9' },
	{ id: 10, name: 'Chan 10' },
	{ id: 11, name: 'Chan 11' },
	{ id: 12, name: 'Chan 12' },
	{ id: 13, name: 'Chan 13' },
	{ id: 14, name: 'Chan 14' },
	{ id: 15, name: 'Chan 15' },
	{ id: 16, name: 'Chan 16' },
];

const App = () => {
	const [channels, setChannels] = useState(faders);

	const updateChannelValue = (id, value) => {
		const newChannels = [...channels];
		newChannels[channels.findIndex((chan) => chan.id === id)].value = value;
		setChannels(newChannels);
	}

	return (
		<div className={'app-container'}>
			<div>
				<FaderBank faders={channels} onUpdateChannelValue={updateChannelValue} />
			</div>
		</div>
	)
};

export default App;
