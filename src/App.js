import React, { useState, useContext, useEffect } from 'react';
import {
	BrowserRouter,
	Router,
	Routes,
	Route,
	Link,
	useNavigate,
} from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import LoadingScreen from './LoadingScreen';
import Home from './Pages/Home/Home';
import { Login, SignUp, SignOut } from './Firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import Chat from './Pages/Messages/Components/Components/Chat/Chat';
import Messages from './Pages/Messages/Messages';
import Search from './Pages/Search/Search';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Profile/Profile';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Navbar/Navbar';

function App() {
	const auth = getAuth();
	const user = auth.currentUser;
	const [User, setUser] = useState(false);
	const [Loading, setLoading] = useState(true);

	auth.onAuthStateChanged(function (user) {
		if (user) {
			setUser(true);
			setLoading(false);
		} else {
			// No user is signed in.
			setUser(false);
		}
	});

	useEffect((user) => {
		setTimeout(() => {
			if (!user) {
				setLoading(false);
			}
		}, 1000);
	}, []);

	return (
		<BrowserRouter>
			<div id="App">
				{Loading ? (
					<LoadingScreen />
				) : (
					<>
						<Navbar />
						<Routes>
							<Route path="/" element={User ? <Home /> : <LoginPage />} />
							<Route
								path="/SignUp"
								element={User ? <Home /> : <SignUpPage />}
							/>
							<Route
								path="/Search"
								element={User ? <Search /> : <LoginPage />}
							/>
							<Route
								path="/Dashboard"
								element={User ? <Dashboard /> : <LoginPage />}
							/>
							<Route
								path="/Profile"
								element={User ? <Profile /> : <LoginPage />}
							/>
							<Route path="/Chat" element={User ? <Chat /> : <LoginPage />} />
							<Route
								path="/Messages"
								element={User ? <Messages /> : <LoginPage />}
							/>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</>
				)}
			</div>
		</BrowserRouter>
	);
}

export default App;
