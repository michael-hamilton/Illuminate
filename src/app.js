import React, { useState } from 'react';
import FaderBank from './components/FaderBank';
import devices from '../devices.json';
import './app.scss';

const App = () => {
	const [channels, setChannels] = useState(devices);

	const updateChannelValue = async (id, value) => {
		const newChannels = [...channels];
		newChannels[channels.findIndex((chan) => chan.id === id)].value = value;
		setChannels(newChannels);
		await window.illuminate.updateChannel(id, value);
	};

	return (
		<div className={'app-container'}>
			<div>
				<FaderBank faders={devices} onUpdateChannelValue={updateChannelValue} />
			</div>
		</div>
	)
};

export default App;
