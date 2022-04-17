import React from 'react';
import { Row, Col, Card, Icon, Button, TextInput } from 'react-materialize';
import '../StyleSheets/LoginPage.css';
import { useRef } from 'react';

function SignUpPage() {
	const SignUpButtonRef = useRef();
	const SignUpPasswordRef = useRef();
	const SignUpEmailRef = useRef();

	const SignUpPassword = SignUpPasswordRef.current.value;
	const SignUpEmail = SignUpEmailRef.current.value;

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
								ref={SignUpEmailRef}
							/>

							<TextInput
								placeholder="Password"
								type="password"
								ref={SignUpPasswordRef}
								id="SignUpPasswordInput"
							/>

							<Button
								type="submit"
								ref={SignUpButtonRef}
								node="button"
								waves="light"
								id="SignUpSubmitButton"
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

export default SignUpPage;
