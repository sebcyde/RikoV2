import React, { useState, useEffect } from 'react';
import { Button, TextInput, Row, Col } from 'react-materialize';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../../../Firebase';
import './Interests.css';

function Interests() {
	const InterestList = [];

	return (
		<div id="InterestsContainer">
			<div id="SearchTopLevelRow">
				<p>Enter an interest of select from the ones below</p>
				<TextInput id="TextInput-25" placeholder="Search" />
			</div>
			<div id="DefaultInterestButtonsContainer">
				<Row>
					<Col className="teal white-text" s={1}>
						<Button node="button" waves="light" className="InterestButton">
							button
						</Button>
					</Col>
					<Col className="teal white-text" s={1}>
						<Button node="button" waves="light" className="InterestButton">
							button
						</Button>
					</Col>
					<Col className="teal white-text" s={1}>
						<Button node="button" waves="light" className="InterestButton">
							button
						</Button>
					</Col>
					<Col className="teal white-text" s={1}>
						<Button node="button" waves="light" className="InterestButton">
							button
						</Button>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default Interests;
