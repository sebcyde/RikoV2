import React from 'react';
import { SignOut } from '../Firebase';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
	const navigate = useNavigate();
	function AppSignOut() {
		console.log('Sign Out Request Sent');
		// setLoading(true);
		SignOut();
		console.log('Sign Out Successful');
		// setLoading(false);

		navigate('/');
	}

	return (
		<div>
			<h1>Home</h1>
			<button
				onClick={() => {
					AppSignOut();
				}}
			>
				Sign Out
			</button>
		</div>
	);
}

export default Home;
