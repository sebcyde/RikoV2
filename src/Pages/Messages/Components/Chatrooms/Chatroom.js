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
import { doc, getDoc } from 'firebase/firestore';
import { db, Auth } from '../../../../Firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

function Chatroom(RecipientUserName, SenderUserName) {
	const docRef = doc(db, 'cities', 'SF');
	const docSnap = getDoc(docRef);
	const [ReturnedUsers, setReturnedUsers] = useState();
	// const RetrieveUsers = (ReturnedUsers) => {
	// 	if (docSnap.exists()) {
	// 		console.log("Document data:", docSnap.data());
	// 	} else {
	// 		// doc.data() will be undefined in this case
	// 		console.log("No such document!");
	// 	}
	// };

	return (
		<div id="ChatroomContainer">
			<TextInput
				id="TextInput-25"
				placeholder="Search Users"
				onChange={(e) => {
					setReturnedUsers(e.target.value);
				}}
			/>
			<h2>Chatroom</h2>
		</div>
	);
}

export default Chatroom;
