import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { Button, Modal, Form } from 'react-bootstrap';
import './SetDisplayName.css';

function SetDisplayName() {
	const [UsernameInputField, setUsernameInputField] = useState('');
	let Auth = getAuth();
	const [OpenModal, setOpenModal] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setOpenModal(true);
		}, 2000);
	}, []);

	const handleClose = () => {
		setOpenModal(false);
	};

	return (
		<div align="center" id="ModalContainer">
			<Modal show={OpenModal} id="DisplayNameModal">
				<Modal.Header>
					<Modal.Title>Welcome to Riko!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Create a new username</p>
					<Form.Control type="email" placeholder="Enter Username" />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose}>Save</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default SetDisplayName;
