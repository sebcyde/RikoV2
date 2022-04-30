import './Chatroom.css';
import React, { useEffect, useState } from 'react';
import {
	Row,
	Icon,
	CollectionItem,
	Col,
	Collection,
	TextInput,
} from 'react-materialize';
import Messages from '../../Messages';
import { db, Auth } from '../../../../Firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import {
	doc,
	onSnapshot,
	getDoc,
	collection,
	getDocs,
} from 'firebase/firestore';
import { OpenChat } from '../PrimaryChats/PrimaryChats';

function Chatroom(RecipientUserName, SenderUserName) {
	const auth = getAuth();
	const user = auth.currentUser;
	const docRef = doc(db, 'cities', 'SF');
	const docSnap = getDoc(docRef);
	const [SearchedUsers, setSearchedUsers] = useState();
	const [ReturnedUsers, setReturnedUsers] = useState();
	const Users = [];

	async function CheckSearch() {
		const Query = await getDocs(collection(db, `Users`));
		let tempArray = [];
		Query.forEach((doc) => {
			if (doc.id.includes(SearchedUsers)) {
				tempArray.push(
					<CollectionItem
						className="avatar"
						onClick={() => {
							OpenChat(doc.data().Email);
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
			}
		});
		setReturnedUsers(tempArray);
	}

	useEffect(() => {
		async function RetrieveMessages() {
			const querySnapshot = await getDocs(collection(db, `Users`));
			querySnapshot.forEach((doc) => {
				Users.push(
					<CollectionItem
						className="avatar"
						onClick={() => {
							OpenChat(doc.data().Email);
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
			setReturnedUsers(Users);
		});
	}, []);

	return (
		<div id="ChatroomContainer">
			<TextInput
				id="TextInput-25"
				placeholder="Search Users"
				onChange={(e) => {
					setSearchedUsers(e.target.value);
					CheckSearch();
				}}
			/>
			<Row>
				<Col m={6} s={12}>
					<Collection>{ReturnedUsers}</Collection>
				</Col>
			</Row>
		</div>
	);
}

export default Chatroom;
