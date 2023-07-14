import React from 'react';
import Fader from '../Fader';
import BumpButton from '../BumpButton';
import './styles.scss';

const FaderBank = (props) => {
	const handleFaderChange = (id, value) => {
		props.onUpdateChannelValue(id, value);
	};

	return (
		<div className={'fader-bank-wrapper'}>
			{
				props.faders?.map(fader =>
					<Channel id={fader.id} name={fader.name} value={fader.value} onChange={(value) => handleFaderChange(fader.id, value)} />
				)
			}
		</div>
	);
};

const Channel = (props) => (
	<div className={'channel-wrapper'}>
		<Fader id={props.id} onChange={props.onChange} value={props.value} />
		<BumpButton onPress={props.onChange} />
		<p className={'channel-name'}>{props.name}</p>
	</div>
);

export default FaderBank;
