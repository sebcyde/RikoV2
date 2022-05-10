import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Icon, NavItem, Button } from 'react-materialize';
import { SignOut } from '../Firebase';

function NavBar() {
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
			<h1 id="NavbarTitle">Riko V1</h1>

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

export default NavBar;
