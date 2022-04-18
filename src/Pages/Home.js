import React from 'react';
import { SignOut } from '../Firebase';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar, Icon, NavItem, Button } from 'react-materialize';
import '../StyleSheets/Home.css';

function Home() {
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
				<Link to="/SignUp" id="LogInCreateAnAccountButton">
					Search
				</Link>
				<Link to="/SignUp" id="LogInCreateAnAccountButton">
					My Profile
				</Link>
				<Link to="/SignUp" id="LogInCreateAnAccountButton">
					Messages
				</Link>
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
			<h1 id="HomeTitle">Home</h1>
		</div>
	);
}

export default Home;
