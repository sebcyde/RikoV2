import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { Navbar, Icon, NavItem, Button } from 'react-materialize';

function Dashboard() {
	let Auth = getAuth();
	const [AddInterests, setAddInterests] = useState();
	let UserInterests = [];

	useEffect(() => {
		console.log(Auth.currentUser);
		if (UserInterests.length === 0) {
			setAddInterests(
				<div id="EmptyInterestContainer">
					<form></form>
				</div>
			);
		}
	}, []);

	return (
		<div align="center">
			<h1>Dashboard</h1>
			<h2>{AddInterests}</h2>
		</div>
	);
}

export default Dashboard;
