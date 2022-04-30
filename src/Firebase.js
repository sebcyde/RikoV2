// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	doc,
	setDoc,
	collection,
	addDoc,
	getFirestore,
	Timestamp,
} from 'firebase/firestore';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	updateProfile,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD7jf6pDiF59Km7G8ABWc9S_SXthRyMfiM',
	authDomain: 'riko-v2.firebaseapp.com',
	projectId: 'riko-v2',
	storageBucket: 'riko-v2.appspot.com',
	messagingSenderId: '853770491598',
	appId: '1:853770491598:web:490af6bf88fc3dd2d7629f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
// export const ref = firebase.db.collection('Users');
const auth = getAuth();
// Get the Database service for a specific app
// let Database = db.database(app);

export async function Login(email, password) {
	try {
		await signInWithEmailAndPassword(auth, email, password).then(
			(userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				return user;
				// ...
			}
		);
	} catch (error) {
		const errorMessage = error.message;
		console.log(errorMessage);
		return errorMessage;
	}
}

export async function SignUp(email, password, username) {
	await createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log(email.toString());

			setDoc(doc(db, 'Users', email.toLowerCase()), {
				Email: email.toLowerCase(),
				Interests: [],
				Friends: [],
			});

			setDoc(collection(db, 'Users', `${email}/Received`), {
				Email: email.toLowerCase(),
				Interests: [],
				Friends: [],
			});

			const UsersDocRef = collection(db, 'Users', user.email);
			setDoc(UsersDocRef, { Me: user.email }, { merge: true });

			console.log(user);
		})

		.catch((error) => {
			const errorMessage = error.message;
			console.log(errorMessage);
			alert(error.message);
			// ..
		});
}

export async function SignOut() {
	await signOut(auth)
		.then(() => {
			// Sign-out successful.
		})
		.catch((error) => {
			// An error happened.
			console.log(error.message);
		});
}
