import React from 'react';
import { Row, Col, Card, Icon, Button, TextInput } from 'react-materialize';
import '../../StyleSheets/LoginPage.css';
import { useRef, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LoginContext } from '../../Context/Login';
import { Login } from '../../Firebase';
import { LoadingContext } from '../../Context/SignUp';

function LoginPage() {
	const navigate = useNavigate();

	const [LoginEmail, setLoginEmail] = useState('');
	const [LoginPassword, setLoginPassword] = useState('');

	const [LoginError, setLoginError] = useState(false);
	const [ErrorMessage, setErrorMessage] = useState('false');

	const { setUser } = useContext(LoginContext);
	const { Loading, setLoading } = useContext(LoadingContext);

	async function AppLogin() {
		try {
			await Login(LoginEmail, LoginPassword)
				.then(() => {
					navigate('/');
				})
				.then(() => {
					console.log('User Log In Successful');
				});
		} catch (error) {
			setErrorMessage(error);
		}
	}

	return (
		<div id="LoginPage">
			<Row>
				<Col m={6} s={12}>
					<Card
						id="LoginCard"
						className="LoginCard"
						closeIcon={<Icon>close</Icon>}
						revealIcon={<Icon>more_vert</Icon>}
						textClassName="white-text"
					>
						<span id="LoginText">
							<h1>Welcome Back</h1>
							<p>Sign In To You Riko Account</p>
							{/* {LoginError && <p>{ErrorMessage}</p>} */}
						</span>
						<form id="LoginInputForm">
							<TextInput
								id="EmailInput"
								placeholder="Email"
								type="text"
								onChange={(event) => {
									setLoginEmail(event.target.value);
								}}
							/>

							<TextInput
								placeholder="Password"
								type="password"
								onChange={(event) => {
									setLoginPassword(event.target.value);
								}}
								id="PasswordInput"
							/>

							<Button
								type="submit"
								node="button"
								waves="light"
								id="LoginSubmitButton"
								onClick={(event) => {
									event.preventDefault();
									AppLogin();
								}}
							>
								Sign In
							</Button>
							<Link to="/SignUp" id="LogInCreateAnAccountButton">
								Create An Account
							</Link>
						</form>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default LoginPage;
