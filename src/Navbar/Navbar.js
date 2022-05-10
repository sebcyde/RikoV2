import React from 'react';
import {
	BrowserRouter,
	Router,
	Routes,
	Route,
	Link,
	useNavigate,
} from 'react-router-dom';
import { Navbar, Icon, NavItem, Button } from 'react-materialize';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import Chat from './Pages/Messages/Components/Components/Chat/Chat';
import Messages from './Pages/Messages/Messages';
import Search from './Pages/Search/Search';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Profile/Profile';
import NotFound from './Pages/NotFound/NotFound';

function Navbar() {
	const navigate = useNavigate();

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

	return (
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
					navigate('/Search');
				}}
			>
				Search
			</NavItem>

			<NavItem
				href=""
				onClick={(event) => {
					event.preventDefault();
					navigate('/Profile');
				}}
			>
				My Profile
			</NavItem>

			<NavItem
				href=""
				onClick={(event) => {
					event.preventDefault();
					navigate('/Dashboard');
				}}
			>
				Dashboard
			</NavItem>

			<NavItem
				href=""
				onClick={(event) => {
					event.preventDefault();
					navigate('/Messages');
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
	);
}

export default Navbar;
