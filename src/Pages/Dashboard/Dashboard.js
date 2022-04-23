import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { Navbar, Icon, NavItem, Button } from 'react-materialize';
import SetDisplayName from './SetDisplayName/SetDisplayName';

function Dashboard() {
	let Auth = getAuth();
	const user = Auth.currentUser;
	const [AddInterests, setAddInterests] = useState();
	let UserInterests = [];
	const [Dash, setDash] = useState();

	useEffect(() => {
		console.log(user);
	}, []);

	// if (UserInterests.length === 0) {
	// 	setAddInterests(
	// 		<div id="EmptyInterestContainer">
	// 			<form></form>
	// 		</div>
	// 	);
	// }
	// setDash(
	// 	<div>
	// 		<h1>Dashboard</h1>
	// 		<h2>{AddInterests}</h2>
	// 	</div>
	// );

	return (
		<div align="center">
			{user.displayName === null ? <SetDisplayName /> : null}
			<h2>Dashboard</h2>
		</div>
	);
}

export default Dashboard;
