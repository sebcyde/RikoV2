import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './StyleSheets/LoadingScreen.css';
import { Col, Preloader } from 'react-materialize';

function LoadingScreen() {
	return (
		<div id="LoadingScreenContainer">
			<Col s={4}>
				<Preloader active color="red" flashing={false} size="small" />
			</Col>
		</div>
	);
}

export default LoadingScreen;
