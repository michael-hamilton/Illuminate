import React, { useEffect, useState } from 'react';
import './styles.scss';

const Fader = (props) => {
	const [ faderValue, setFaderValue ] = useState(0);

	const onFaderChange = (e) => {
		setFaderValue(e.target.value);

		if(props.onChange && typeof props.onChange === 'function') {
			props.onChange(parseInt(e.target.value));
		}
	};

	useEffect(() => {
		if(props.value) {
			setFaderValue(props.value);
		}
	}, [props.value]);

	return (
		<div className={'fader-wrapper'}>
			<p className={'fader-readout'}>{ faderValue }</p>
			<input onChange={ onFaderChange } type={'range'} value={ faderValue } min={ props.min || 0 } max={ props.max || 100 } />
			<p className={'fader-id'}>{ props.id }</p>
		</div>
	);
};

export default Fader;
