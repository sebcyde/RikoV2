import React, { useState, useEffect } from 'react';
import { Tabs, Tab, TextInput, Icon, Breadcrumb } from 'react-materialize';
import Chatroom from './Components/Components/Chatrooms/Chatroom';
import PrimaryChats from './Components/PrimaryChats/PrimaryChats';
import './Messages.css';
import { db } from '../../Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { OpenChat } from './Components/PrimaryChats/PrimaryChats';
import MessagesTabs from './Components/MessagesTabs/MessagesTabs';

function Messages() {
	const [SearchTerm, setSearchTerm] = useState('');
	const [ListOfUsers, setListOfUsers] = useState();
	const [Chatting, setChatting] = useState(false);
	const [ToChat, setToChat] = useState(<MessagesTabs />);

	const ReturnUsers = async () => {
		const docSnap = await getDoc(doc(db, 'Users', SearchTerm));
		console.log('Document data:', docSnap.data());
		setListOfUsers();
	};

	return (
		<div id="MessagesContainer">
			{Chatting ? (
				<Breadcrumb className="teal" cols={12} id="BC">
					<div
						id="BreadCrumbDivider"
						onClick={() => {
							setChatting(false);
							setToChat(<MessagesTabs />);
						}}
					>
						<span id="BackArrow" className="material-symbols-outlined">
							arrow_back
						</span>
						<span id="BackText">Back</span>
					</div>
				</Breadcrumb>
			) : (
				<>
					<div id="MessagesTopLevelRow">
						<TextInput
							noLayout={true}
							id="TextInput-25"
							placeholder="Search"
							onChange={(e) => {
								setSearchTerm(e.target.value);
								ReturnUsers();
							}}
						/>
						<span
							className="material-symbols-outlined"
							onClick={() => {
								setChatting(true);
								setToChat(
									<>
										<Chatroom />
									</>
								);
							}}
						>
							open_in_new
						</span>
					</div>
				</>
			)}

			{ToChat}
		</div>
	);
}

export default Messages;
