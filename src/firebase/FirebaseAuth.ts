import {
    Auth,
    GoogleAuthProvider,
    signInWithPopup,
    User
} from 'firebase/auth'

import { HttpClientResponse } from '@domain/model'

import { tokenCookie } from '@infra/Cookies'
import { HttpStatus } from '@infra/api'

export default class FirebaseAuth {

    private readonly auth: Auth

    constructor(
        auth: Auth
    ) {
        this.auth = auth
    }

    
    public get currentUser() : User | null {
        return this.auth.currentUser
    }

    signOut(): Promise<void> {
        return this.auth.signOut()
    }    

    async signInWithPopup(): Promise<HttpClientResponse<any>> {
        const currentUser = this.currentUser
        if (currentUser) {
            const token = await currentUser.getIdToken()
            tokenCookie.set(token)
            return Promise.resolve(
                new HttpClientResponse({
                    data: {
                        displayName: currentUser.displayName,
                        email: currentUser.email,
                        alreadyLoggedIn: true
                    },
                    status: HttpStatus.OK
                })
            )
        }

        const provider = new GoogleAuthProvider()
        return await signInWithPopup(this.auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential?.accessToken
                if (token) {
                    tokenCookie.set(token)
                }
                // The signed-in user info.
                const user = result.user
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                
                return new HttpClientResponse({
                    data: {
                        displayName: user.displayName,
                        email: user.email
                    },
                    status: HttpStatus.OK
                })
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code
                const errorMessage = error.message
                // The email of the user's account used.
                const email = error.customData.email
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error)
                // ...

                return new HttpClientResponse({
                    error: {
                        errorCode,
                        errorMessage,
                        email,
                        credential
                    }
                })
            })
    }

}
