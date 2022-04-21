import React, { useState } from 'react';
import { SignOut } from '../Firebase';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar, Icon, NavItem, Button } from 'react-materialize';
import '../StyleSheets/Home.css';
import Profile from './Profile';
import Dashboard from './Dashboard';
import Search from './Search/Search';
import Messages from './Messages';

function Home() {
	const navigate = useNavigate();

	const [PageLoaded, setPageLoaded] = useState(<Profile />);

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

	function HomePageSearch(params) {
		setPageLoaded(<Search />);
	}

	function HomePageDashboard() {
		setPageLoaded(<Dashboard />);
	}

	function HomePageProfile() {
		setPageLoaded(<Profile />);
	}

	function HomePageMessages(params) {
		setPageLoaded(<Messages />);
	}

	return (
		<div id="HomeContainer">
			<Navbar
				alignLinks="right"
				id="mobile-nav"
				menuIcon={<Icon>menu</Icon>}
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
				<h1 id="NavbarTitle">Riko V2</h1>

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
						HomePageDashboard();
					}}
				>
					Dashboard
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
