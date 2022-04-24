import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, getAuth, updateProfile } from 'firebase/auth';
import { db } from '../../../Firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Button, Modal, Form } from 'react-bootstrap';
import './SetDisplayName.css';

function SetDisplayName() {
	let Auth = getAuth();
	let User = Auth.currentUser;
	const [UsernameInputField, setUsernameInputField] = useState('');
	const [ShowError, setShowError] = useState(false);
	const [OpenModal, setOpenModal] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setOpenModal(true);
		}, 500);
	}, []);

	const handleClose = () => {
		if (UsernameInputField.length > 0) {
			updateProfile(User, {
				displayName: UsernameInputField,
			})
				.then(() => {
					console.log('User Display Name Updated Successfully');
					const UserEmail = User.email;
					const UsersDocRef = doc(db, 'Users', UserEmail);
					setDoc(
						UsersDocRef,
						{ Username: UsernameInputField },
						{ merge: true }
					);
					setOpenModal(false);
				})
				.catch((error) => {
					alert(error);
				});
		} else {
			setShowError(true);
		}
	};

	return (
		<div align="center" id="ModalContainer">
			<Modal show={OpenModal} id="DisplayNameModal">
				<Modal.Header>
					<Modal.Title>Welcome to Riko!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{ShowError ? (
						<p id="ErrorText">Please Enter A Username</p>
					) : (
						<p>Create a new username</p>
					)}

					<Form.Control
						type="email"
						placeholder="Enter Username"
						onChange={(e) => {
							setUsernameInputField(e.target.value);
						}}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose}>Save</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default SetDisplayName;
