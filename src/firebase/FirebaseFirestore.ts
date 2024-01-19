import { Firestore } from 'firebase-admin/firestore'

import { HttpClientResponse, HttpStatus } from '@domain/model'
import { logError } from '@infra/Console'

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

    private throwError(
        error: any
    ): Promise<HttpClientResponse<any>> {
        logError(error)
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
    }

    createDoc(
        path: string,
        doc: any
    ): Promise<HttpClientResponse<any>> {
        return this
            .firestore
            .collection(path)
            .add(doc)
            .then((result) => {
                return new HttpClientResponse({
                    data: {
                        id: result.id,
                        ...doc
                    }
                })
            }).catch(this.throwError)
    }

    getDoc(
        path: string
    ): Promise<HttpClientResponse<any>> {
        return this
            .firestore
            .doc(path)
            .get()
            .then((doc) => {
                const result = doc.data()
                if (!result) {
                    throw new Error('Doc Not Found')
                }
                result.id = doc.id

                return result
            }).then((result) => new HttpClientResponse({
                data: result,
                status: HttpStatus.OK
            })).catch(this.throwError)
    }

    getDocs(
        path: string
    ): Promise<HttpClientResponse<any[]>> {
        return this
            .firestore
            .collection(path)
            .get()
            .then((snapshot) => snapshot
                .docs
                .map((doc) => {
                    const result = doc.data()
                    result.id = doc.id

                    return result
                })
            ).then((result) => new HttpClientResponse({
                data: result,
                status: HttpStatus.OK
            })).catch(this.throwError)
    }

}
