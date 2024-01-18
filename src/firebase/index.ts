// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { Auth, getAuth, signInWithCredential } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import FirebaseFirestore from './FirebaseFirestore'
import FirebaseAuth from './FirebaseAuth'
import passwordsFirestore from './remote/Passwords'

class Firebase {
	constructor() {
		//console.log('Firebase-constructor')
		// Your web app's Firebase configuration
		// For Firebase JS SDK v7.20.0 and later, measurementId is optional
		const firebaseConfig = {
			apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
			authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
			//databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
			storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
			messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
			appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
			measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
		}

		// Initialize Firebase
		const app = initializeApp(firebaseConfig)
		this.auth = getAuth(app)
		this.db = getFirestore(app)
	}

	public readonly auth: Auth
	public readonly db: Firestore
}

const firebase = new Firebase()

const auth = () => {
	//console.log('Firebase-auth')
	signInWithCredential
	return new FirebaseAuth(firebase.auth)
}

const passwords = () => {
	//console.log('Firebase-passwords')
	return passwordsFirestore(
		new FirebaseFirestore(firebase.db)
	)
}

export {
	auth,
	passwords
}
