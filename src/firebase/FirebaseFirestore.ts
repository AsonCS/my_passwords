import {
    addDoc,
    collection,
    Firestore,
    getDocs
} from 'firebase/firestore'

import { HttpClientResponse } from '@domain/model'
import { HttpStatus } from '@infra/api'

// region PATHS
export const PATH_PASSWORDS = 'PASSWORDS'
export const PATH_USER = 'USERS'

// eslint-disable-next-line no-unused-vars
enum FirestoreErrorCode {
    // eslint-disable-next-line no-unused-vars
    PermissionDenied = 'permission-denied'
}

export default class FirebaseFirestore {

    private readonly firestore: Firestore

    constructor(
        firestore: Firestore
    ) {
        this.firestore = firestore
    }

    createDoc(
        path: string,
        doc: any
    ): Promise<HttpClientResponse<any>> {
        return addDoc(
            collection(
                this.firestore,
                path
            ),
            doc
        ).then(() => new HttpClientResponse({
            data: {}
        }))
    }

    getDocs(
        path: string
    ): Promise<HttpClientResponse<any[]>> {
        return getDocs(
            collection(
                this.firestore,
                path
            )
        ).then((snapshot) => snapshot
            .docs
            .map((doc) => {
                const result = doc.data()
                result.id = doc.id

                return result
            })
        ).then((result) => new HttpClientResponse(
            {
                data: result,
                status: HttpStatus.OK
            }
        )
        ).catch((error) => {
            //console.error(error)
            let status: HttpStatus
            switch (error?.code) {
                case FirestoreErrorCode.PermissionDenied:
                    status = HttpStatus.Unautjorized
                    break
                
                default:
                    status = HttpStatus.InternalServerError
            }
            throw new HttpClientResponse({
                error: error?.message,
                status: status
            })
        })
    }

}
