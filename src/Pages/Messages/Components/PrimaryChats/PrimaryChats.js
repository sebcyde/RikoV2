import React, { useEffect, useState } from 'react';
import { Row, Icon, CollectionItem, Col, Collection } from 'react-materialize';
import './PrimaryChats.css';
import Messages from '../../Messages';
import {
	doc,
	onSnapshot,
	getDoc,
	collection,
	getDocs,
} from 'firebase/firestore';
import { db, Auth } from '../../../../Firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

export const OpenChat = (UserName) => {
	const RecieverEmail = UserName;
	console.log(RecieverEmail);
};

function PrimaryChats() {
	const auth = getAuth();
	const user = auth.currentUser;
	const Messages = [];
	const [MCont, setMCont] = useState();

	useEffect(() => {
		async function RetrieveMessages() {
			const querySnapshot = await getDocs(
				collection(db, `Users/${user.email}/Received`)
			);
			querySnapshot.forEach((doc) => {
				Messages.push(
					<CollectionItem
						className="avatar"
						onClick={() => {
							OpenChat(doc.data().ID);
						}}
					>
						<img
							alt=""
							className="circle"
							src="https://materializecss.com/images/yuna.jpg"
						/>
						<div className="TextContainer">
							<span className="title">{doc.id}</span>

							<p>{doc.data().Message}</p>
						</div>

						<a className="secondary-content">
							<Icon>grade</Icon>
						</a>
					</CollectionItem>
				);
			});
		}
		RetrieveMessages().then(() => {
			console.log(Messages);
			setMCont(Messages);
		});
	}, []);

	return (
		<div align="center" id="ChatsContainer">
			<Row>
				<Col m={6} s={12}>
					<Collection>{MCont}</Collection>
				</Col>
			</Row>
		</div>
	);
}

export default PrimaryChats;
