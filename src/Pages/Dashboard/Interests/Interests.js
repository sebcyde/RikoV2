import React, { useState, useEffect } from 'react';
import { Button, TextInput, Row, Col } from 'react-materialize';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../../../Firebase';
import './Interests.css';

function Interests() {
	const AddToInterestList = [];
	const [ButtonSuggestion, setButtonSuggestion] = useState('');

	const AddToInterests = (NewInterest) => {
		AddToInterestList.push(NewInterest);
	};

	return (
		<div id="InterestsContainer">
			<div id="DefaultInterestButtonsContainer">
				<Row>
					<Col className="teal white-text" s={1}>
						<Button
							node="button"
							waves="light"
							className="InterestButton InterestButton1"
							onClick={() => {
								setButtonSuggestion('Anime');
								AddToInterests('Anime');
							}}
						>
							Anime
						</Button>
					</Col>
					<Col className="teal white-text" s={1}>
						<Button
							node="button"
							waves="light"
							className="InterestButton InterestButton2"
							onClick={() => {
								setButtonSuggestion('Sports');
								AddToInterests('Sports');
							}}
						>
							Sports
						</Button>
					</Col>
					<Col className="teal white-text" s={1}>
						<Button
							node="button"
							waves="light"
							className="InterestButton InterestButton3"
							onClick={() => {
								setButtonSuggestion('Music');
								AddToInterests('Music');
							}}
						>
							Music
						</Button>
					</Col>
				</Row>
				<Row>
					<Col className="teal white-text" s={1}>
						<Button
							node="button"
							waves="light"
							className="InterestButton InterestButton4"
							onClick={() => {
								setButtonSuggestion('Politics');
								AddToInterests('Politics');
							}}
						>
							Politics
						</Button>
					</Col>
					<Col className="teal white-text" s={1}>
						<Button
							node="button"
							waves="light"
							className="InterestButton InterestButton5"
							onClick={() => {
								setButtonSuggestion('Movies');
								AddToInterests('Movies');
							}}
						>
							Movies
						</Button>
					</Col>
					<Col className="teal white-text" s={1}>
						<Button
							node="button"
							waves="light"
							className="InterestButton InterestButton6"
							onClick={() => {
								setButtonSuggestion('News');
								AddToInterests('News');
							}}
						>
							News
						</Button>
					</Col>
				</Row>
				<Row>
					<Col className="teal white-text" s={1}>
						<Button
							node="button"
							waves="light"
							className="InterestButton InterestButton7"
							onClick={() => {
								setButtonSuggestion('Celebs');
								AddToInterests('Celebs');
							}}
						>
							Celebs
						</Button>
					</Col>
					<Col className="teal white-text" s={1}>
						<Button
							node="button"
							waves="light"
							className="InterestButton InterestButton8"
							onClick={() => {
								setButtonSuggestion('Fashion');
								AddToInterests('Fashion');
							}}
						>
							Fashion
						</Button>
					</Col>
					<Col className="teal white-text" s={1}>
						<Button
							node="button"
							waves="light"
							className="InterestButton InterestButton9"
							onClick={() => {
								setButtonSuggestion('Houses');
								AddToInterests('Houses');
							}}
						>
							Houses
						</Button>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default Interests;
