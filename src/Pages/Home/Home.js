import React, { useState } from 'react';
import { SignOut } from '../../Firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar, Icon, NavItem, Button } from 'react-materialize';
import '../../StyleSheets/Home.css';
import Profile from '../Profile/Profile';
import Dashboard from '../Dashboard/Dashboard';
import Search from '../Search/Search';
import Messages from '../Messages/Messages';

function Home() {
	const auth = getAuth();
	const user = auth.currentUser;
	const navigate = useNavigate();

	const [PageLoaded, setPageLoaded] = useState(<Dashboard />);

	async function AppSignOut() {
		// setLoading(true);
		await SignOut()
			.then(() => {
				navigate('/');
			})
			.then(() => {
				console.log('Sign Out Successful');
				// setLoading(false);
			});
	}

	function HomePageSearch() {
		setPageLoaded(<Search />);
	}

	function HomePageDashboard() {
		setPageLoaded(<Dashboard />);
	}

	function HomePageProfile() {
		setPageLoaded(<Profile />);
	}

	function HomePageMessages() {
		setPageLoaded(<Messages />);
	}

	return (
		<div id="HomeContainer">
		
			{PageLoaded}
		</div>
	);
}

export default Home;
