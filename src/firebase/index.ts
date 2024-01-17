// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, Auth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebaseFirestore, { FirebaseFirestore } from './remote/FirebaseFirestore';

class Firebase {
	constructor() {
		// Your web app's Firebase configuration
		// For Firebase JS SDK v7.20.0 and later, measurementId is optional
		const firebaseConfig = {
			apiKey: process.env.FIREBASE_API_KEY,
			authDomain: process.env.FIREBASE_AUTH_DOMAIN,
			//databaseURL: process.env.FIREBASE_DATABASE_URL,
			projectId: process.env.FIREBASE_PROJECT_ID,
			storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
			messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
			appId: process.env.FIREBASE_APP_ID,
			measurementId: process.env.FIREBASE_MEASUREMENT_ID
		}

		// Initialize Firebase
		const app = initializeApp(firebaseConfig)
		this.auth = getAuth(app)
		this.db = firebaseFirestore(getFirestore(app))
	}

	public readonly auth: Auth
	public readonly db: FirebaseFirestore
}

const firebase = new Firebase()

export default firebase
