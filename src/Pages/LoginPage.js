import React, useRef from 'react';
import { Row, Col, Card, Icon } from 'react-materialize';
import '../StyleSheets/LoginPage.css';
import { useRef } from 'react';

function LoginPage() {

  const LogInButton = useRef()
  const LogInPassword = useRef()
  const LogInEmail = useRef()



	return (
		<div id="LoginPage">
			<Row>
				<Col m={6} s={12}>
					<Card
						id="LoginCard"
						actions={[
							<a key="1" href="#">
								This is a link
							</a>,
							<a key="2" href="#">
								This is a link
							</a>,
						]}
						className="LoginCard"
						closeIcon={<Icon>close</Icon>}
						revealIcon={<Icon>more_vert</Icon>}
						textClassName="white-text"
						title="Welcome Back"
					>
						<form id="LoginInputForm">
							<input type="text" ref={LogInEmail}></input>
							<input type="password" ref={LogInPassword}></input>
							<button type="submit" id="LoginSubmitButton" ref={LogInButton}></button>
						</form>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default LoginPage;
