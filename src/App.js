import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Pages/LoginPage';
import LoadingScreen from './LoadingScreen';
import Home from './Pages/Home';
import { Login, SignUp, SignOut } from './Firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { LoadingContext } from './Context/SignUp.js';
import { LoginContext } from './Context/Login';
import SignUpPage from './Pages/SignUpPage';

function App() {
	const auth = getAuth();

	const [User, setUser] = useState(false);
	const [Loading, setLoading] = useState(true);
	const value = { Loading, setLoading };

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

	let test = 'test';

	return (
		<BrowserRouter>
			<div id="App">
				{Loading ? (
					<LoadingScreen />
				) : (
					<LoginContext.Provider value={(test, setUser)}>
						<LoadingContext.Provider value={value}>
							<Routes>
								<Route path="/" element={User ? <Home /> : <LoginPage />} />
								<Route
									path="/SignUp"
									element={User ? <Home /> : <SignUpPage />}
								/>
							</Routes>
						</LoadingContext.Provider>
					</LoginContext.Provider>
				)}
			</div>
		</BrowserRouter>
	);
}

export default App;
