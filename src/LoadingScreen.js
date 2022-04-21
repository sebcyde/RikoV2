import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './StyleSheets/LoadingScreen.css';
import { Col, Preloader } from 'react-materialize';
import { RingLoader, FadeLoader } from 'react-spinners';

function LoadingScreen() {
	let color = 'rgb(106, 0, 0)';

	return (
		<div id="LoadingScreenContainer" align="center">
			<FadeLoader id="LoadingCircle" color={color} />
		</div>
	);
}

export default LoadingScreen;
