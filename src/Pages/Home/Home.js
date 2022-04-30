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
			<Navbar
				alignLinks="right"
				id="mobile-nav"
				menuIcon={<Icon>menu</Icon>}
				fixed={true}
				options={{
					draggable: true,
					edge: 'left',
					inDuration: 250,
					onCloseEnd: null,
					onCloseStart: null,
					onOpenEnd: null,
					onOpenStart: null,
					outDuration: 200,
					preventScrolling: true,
				}}
			>
				<h1 id="NavbarTitle">{user.displayName}</h1>

				<NavItem
					href=""
					onClick={(e) => {
						e.preventDefault();
						HomePageSearch();
					}}
				>
					Search
				</NavItem>

				<NavItem
					href=""
					onClick={(event) => {
						event.preventDefault();
						HomePageProfile();
					}}
				>
					My Profile
				</NavItem>

				<NavItem
					href=""
					onClick={(event) => {
						event.preventDefault();
						HomePageDashboard();
					}}
				>
					Dashboard
				</NavItem>

				<NavItem
					href=""
					onClick={(event) => {
						event.preventDefault();
						HomePageMessages();
					}}
				>
					Messages
				</NavItem>
				<Button
					id="SignOutButton"
					node="a"
					small
					style={{
						marginRight: '5px',
					}}
					onClick={() => {
						AppSignOut();
					}}
					waves="light"
				>
					Sign Out
				</Button>
			</Navbar>
			{PageLoaded}
		</div>
	);
}

export default Home;
