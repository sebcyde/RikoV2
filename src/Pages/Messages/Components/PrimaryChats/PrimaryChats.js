import React, { useEffect, useState } from 'react';
import { Row, Icon, CollectionItem, Col, Collection } from 'react-materialize';
import './PrimaryChats.css';
import Messages from '../../Messages';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, Auth } from '../../../../Firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

function PrimaryChats() {
	const auth = getAuth();
	const user = auth.currentUser;

	const OpenChat = (UserName) => {
		console.log('Clicked Chat');
		console.log(user);
	};

	useEffect(() => {
		const NewMessage = onSnapshot(
			doc(db, 'Messages', `${user.displayName}`),
			(doc) => {
				console.log('Current data: ', doc.data());
			}
		);
	}, []);

	return (
		<div align="center" id="ChatsContainer">
			<Row>
				<Col m={6} s={12}>
					<Collection>
						<CollectionItem className="avatar" onClick={OpenChat}>
							<img
								alt=""
								className="circle"
								src="https://materializecss.com/images/yuna.jpg"
							/>
							<div className="TextContainer">
								<span className="title">Name</span>

								<p>Name</p>
							</div>

							<a className="secondary-content" href="javascript:void(0)">
								<Icon>grade</Icon>
							</a>
						</CollectionItem>
						<CollectionItem className="avatar">
							<img
								alt=""
								className="circle"
								src="https://materializecss.com/images/yuna.jpg"
							/>
							<div className="TextContainer">
								<span className="title">Name</span>

								<p>Name</p>
							</div>
							<a className="secondary-content" href="javascript:void(0)">
								<Icon>grade</Icon>
							</a>
						</CollectionItem>
						<CollectionItem className="avatar">
							<img
								alt=""
								className="circle"
								src="https://materializecss.com/images/yuna.jpg"
							/>
							<div className="TextContainer">
								<span className="title">Name</span>

								<p>Name</p>
							</div>
							<a className="secondary-content" href="javascript:void(0)">
								<Icon>grade</Icon>
							</a>
						</CollectionItem>
						<CollectionItem className="avatar">
							<img
								alt=""
								className="circle"
								src="https://materializecss.com/images/yuna.jpg"
							/>
							<div className="TextContainer">
								<span className="title">Name</span>

								<p>Name</p>
							</div>
							<a className="secondary-content" href="javascript:void(0)">
								<Icon>grade</Icon>
							</a>
						</CollectionItem>
					</Collection>
				</Col>
			</Row>
		</div>
	);
}

export default PrimaryChats;
