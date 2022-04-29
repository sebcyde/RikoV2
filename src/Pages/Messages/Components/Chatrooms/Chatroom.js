import './Chatroom.css';
import React, { useEffect, useState } from 'react';
import { Row, Icon, CollectionItem, Col, Collection } from 'react-materialize';
import './PrimaryChats.css';
import Messages from '../../Messages';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, Auth } from '../../../../Firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

function Chatroom(RecipientUserName, SenderUserName) {
	return (
		<div id="ChatroomContainer">
			<h2>To: {RecipientUserName}</h2>
			<br />
			<h2>From: {SenderUserName}</h2>
		</div>
	);
}

export default Chatroom;
