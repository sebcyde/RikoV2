import React from 'react';
import { Row, Col, Card, Icon, Button, TextInput } from 'react-materialize';
import '../StyleSheets/LoginPage.css';
import { useRef } from 'react';

function LoginPage() {
	const LogInButton = useRef();
	const LogInPassword = useRef();
	const LogInEmail = useRef();

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
						title="Welcome Back"
					>
						<form id="LoginInputForm">
							<TextInput
								id="EmailInput"
								placeholder="Email"
								type="text"
								ref={LogInEmail}
							/>

							<TextInput
								placeholder="Password"
								type="password"
								ref={LogInPassword}
								id="PasswordInput"
							/>

							<Button
								type="submit"
								ref={LogInButton}
								node="button"
								style={{
									marginRight: '5px',
								}}
								waves="light"
								id="LoginSubmitButton"
							>
								Sign In
							</Button>
						</form>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default LoginPage;
