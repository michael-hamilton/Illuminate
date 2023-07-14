import React from 'react';
import './styles.scss';

const BumpButton = (props) => {
	const onBumpButtonPress = (e) => {
		if(props.onPress && typeof props.onPress === 'function') {
			props.onPress(100);
		}
	};

	const onBumpButtonRelease = (e) => {
		if(props.onPress && typeof props.onPress === 'function') {
			props.onPress(0);
		}
	};

	return (
		<div className={'bump-button-wrapper'}>
			<button onPointerDown={ onBumpButtonPress } onPointerUp={ onBumpButtonRelease } />
		</div>
	);
};

export default BumpButton;
