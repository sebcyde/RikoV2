import React from 'react';
import { Row, Col, Card, Icon, Button, TextInput } from 'react-materialize';
import '../StyleSheets/LoginPage.css';
import { useRef } from 'react';

function LoginPage() {
	const LogInButtonRef = useRef();
	const LogInPasswordRef = useRef();
	const LogInEmailRef = useRef();

	const LogInPassword = LogInButtonRef.current.value;
	const LogInEmail = LogInButtonRef.current.value;

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
							<p>Enter You Login Details</p>
						</span>
						<form id="LoginInputForm">
							<TextInput
								id="EmailInput"
								placeholder="Email"
								type="text"
								ref={LogInEmailRef}
							/>

							<TextInput
								placeholder="Password"
								type="password"
								ref={LogInPasswordRef}
								id="PasswordInput"
							/>

							<Button
								type="submit"
								ref={LogInButtonRef}
								node="button"
								waves="light"
								id="LoginSubmitButton"
							>
								Sign In
							</Button>
							<a id="LogInCreateAnAccountButton">Create An Account</a>
						</form>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default LoginPage;
