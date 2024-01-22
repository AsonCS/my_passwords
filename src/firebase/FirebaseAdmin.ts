import admin from 'firebase-admin'
import { initializeApp, getApp } from 'firebase-admin/app'

import { Auth, getAuth } from 'firebase-admin/auth'
import { Firestore, getFirestore } from 'firebase-admin/firestore'

import FirebaseFirestore from './FirebaseFirestore'
import passwordsFirestore, { PasswordsFirestore } from './remote/Passwords'

export class FirebaseAdmin {

    private readonly auth: Auth
	private readonly db: Firestore

    constructor() {
		//console.log('FirebaseAdmin-constructor')
		try {
			// Initialize Firebase
			const app = getApp()
			this.auth = getAuth(app)
			this.db = getFirestore(app)
			return
		} catch(e) { /* empty */ }
		
		// Initialize Firebase
		const serviceAccountKey = JSON.parse(process.env.FIREBASE_CONFIG!)
		const app = initializeApp({
			credential: admin.credential.cert(serviceAccountKey)
		})
		this.auth = getAuth(app)
		this.db = getFirestore(app)
	}
	
	public get passwords(): PasswordsFirestore {
		return passwordsFirestore(
			new FirebaseFirestore(this.db)
		)
	}

	verifyToken(token: string): Promise<string> {
		return this.auth
			.verifyIdToken(
				token.replace('Bearer ', '')
			).then((decoded) => decoded.uid)
	}
    
}

const firebaseAdmin = new FirebaseAdmin()

export default firebaseAdmin
