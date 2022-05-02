import React, { useEffect, useState } from 'react';
import {
	Row,
	Icon,
	CollectionItem,
	Col,
	Collection,
	Breadcrumb,
} from 'react-materialize';
import '../PrimaryChats/PrimaryChats.css';
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
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

function Chat(props) {
	const [test, settest] = useState('');
	const navigate = useNavigate;
	const [searchParams] = useSearchParams();

	useEffect(() => {
		// console.log(props.path);
		settest(<h2>{props.path}</h2>);
		console.log(searchParams.get('Name'));
		let answer = searchParams.get('Name');
		console.log(answer);
	}, []);

	const NavigateBack = () => {
		navigate('/Messages');
	};

	return (
		<div className="ChatContainer">
			<Breadcrumb className="teal" cols={12} id="BC">
				<div
					id="BreadCrumbDivider"
					// onClick={(event) => {
					// 	event.preventDefault();
					// 	NavigateBack();
					// }}
				>
					<span id="BackArrow" className="material-symbols-outlined">
						arrow_back
					</span>
					<span id="BackText">Back</span>
				</div>
			</Breadcrumb>
			{test}
		</div>
	);
}

export default Chat;
