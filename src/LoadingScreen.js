import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './StyleSheets/LoadingScreen.css';
import { Col, Preloader } from 'react-materialize';
import { RingLoader, FadeLoader } from 'react-spinners';

function LoadingScreen() {
	return (
		<div id="LoadingScreenContainer" align="center">
			{RingLoader}
		</div>
	);
}

export default LoadingScreen;
