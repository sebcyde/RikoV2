import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import LoginPage from './Pages/LoginPage';
import LoadingScreen from './LoadingScreen';
import Home from './Pages/Home';

function App() {
	const [Loading, setLoading] = useState(false);

	let User = false;

	return (
		<Router>
			{Loading ? (
				<LoadingScreen />
			) : (
				<div id="App">
					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
					<Switch>
						{/* <Route path="/about">
							<About />
						</Route>
						<Route path="/users">
							<Users />
						</Route> */}
						<Route path="/">{User ? <Home /> : <LoginPage />}</Route>
					</Switch>
				</div>
			)}
		</Router>
	);
}

export default App;
