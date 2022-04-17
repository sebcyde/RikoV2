import React from 'react';
import { Row, Col, Card, Icon, Button, TextInput } from 'react-materialize';
import '../StyleSheets/SignUpPage.css';
import { useRef, useContext, useState } from 'react';
import { LoginContext } from '../Context/Login';
import { SignUp } from '../Firebase';
import { useNavigate, Link } from 'react-router-dom';

function SignUpPage() {
	const navigate = useNavigate();

	const [SignUpEmail, setSignUpEmail] = useState('');
	const [SignUpPassword, setSignUpPassword] = useState('');

	const { setUser } = useContext(LoginContext);
	const { Loading, setLoading } = useContext(LoginContext);

	async function AppSignUp() {
		console.log('Sign Up Request Sent');
		// setLoading(true);
		SignUp(SignUpEmail, SignUpPassword);
		console.log('User Creation Successful');
		// setLoading(false);

		navigate('/');
	}

	return (
		<div id="SignUpPage">
			<Row>
				<Col m={6} s={12}>
					<Card
						id="SignUpCard"
						className="SignUpCard"
						closeIcon={<Icon>close</Icon>}
						revealIcon={<Icon>more_vert</Icon>}
						textClassName="white-text"
					>
						<span id="SignUpText">
							<h1>Welcome To Riko</h1>
							<p>Create An Account Below</p>
						</span>
						<form id="SignUpInputForm">
							<TextInput
								id="SignUpEmailInput"
								placeholder="Email"
								type="text"
								onChange={(event) => {
									setSignUpEmail(event.target.value);
								}}
							/>

							<TextInput
								placeholder="Password"
								type="password"
								onChange={(event) => {
									setSignUpPassword(event.target.value);
								}}
								id="SignUpPasswordInput"
							/>

							<Button
								type="submit"
								node="button"
								waves="light"
								id="SignUpSubmitButton"
								onClick={(event) => {
									event.preventDefault();
									AppSignUp();
								}}
							>
								Sign Up
							</Button>
							<Link to="/" id="CreateAnAccountLogInButton">
								Already Have An Account
							</Link>
						</form>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default SignUpPage;
