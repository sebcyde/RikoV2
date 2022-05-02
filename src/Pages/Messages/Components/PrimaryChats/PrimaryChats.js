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
import { useNavigate } from 'react-router-dom';

function PrimaryChats() {
	const auth = getAuth();
	const user = auth.currentUser;
	const Messages = [];
	const [MCont, setMCont] = useState();
	const navigate = useNavigate();

	const OpenChat = (UserName) => {
		const RecieverEmail = UserName;
		navigate(`/Chat/${RecieverEmail}`, { Name: RecieverEmail });
	};

	useEffect(() => {
		async function RetrieveMessages() {
			const querySnapshot = await getDocs(
				collection(db, `Users/${user.email}/Received`)
			);
			querySnapshot.forEach((doc) => {
				let i = 0;
				Messages.push(
					<CollectionItem
						className="avatar"
						key={i}
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
				i++;
			});
		}
		RetrieveMessages().then(() => {
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
