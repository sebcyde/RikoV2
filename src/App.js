import React, { useState, useContext } from 'react';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import LoginPage from './Pages/LoginPage';
import LoadingScreen from './LoadingScreen';
import Home from './Pages/Home';
import { Login, SignUp, SignOut } from './Firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

import { LoginContext } from './Context/Login';
import { SignUpContext } from './Context/SignUp';
import SignUpPage from './Pages/SignUpPage';

function App() {
	const auth = getAuth();
	const [Loading, setLoading] = useState(false);
	const [User, setUser] = useState(false);

	auth.onAuthStateChanged(function (user) {
		if (user) {
			setUser(true);
		} else {
			// No user is signed in.
			setUser(false);
		}
	});

	return (
		<BrowserRouter>
			{Loading ? (
				<LoadingScreen />
			) : (
				<div id="App">
					<LoginContext.Provider value={(Loading, setLoading, setUser)}>
						<Routes>
							<Route path="/" element={User ? <Home /> : <LoginPage />} />
							<Route
								path="/SignUp"
								element={User ? <Home /> : <SignUpPage />}
							/>
						</Routes>
					</LoginContext.Provider>
				</div>
			)}
		</BrowserRouter>
	);
}

export default App;
