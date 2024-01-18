import { InvalidArgumentException } from '@domain/exception'
import { HttpClientResponse } from '@domain/model'

import FirebaseFirestore, {
    PATH_USER,
    PATH_PASSWORDS
} from '@firebase/FirebaseFirestore'

export interface PasswordsFirestore {
    login: (
        // eslint-disable-next-line no-unused-vars
        idClient: string,
        // eslint-disable-next-line no-unused-vars
        email: string
    ) => Promise<HttpClientResponse<any>>,
    passwords: (
        // eslint-disable-next-line no-unused-vars
        idClient: string,
        // eslint-disable-next-line no-unused-vars
        idGroup: string
    ) => Promise<HttpClientResponse<any[]>>
    passwordsGroups: (
        // eslint-disable-next-line no-unused-vars
        idClient: string
    ) => Promise<HttpClientResponse<any[]>>
}

const passwordsFirestore =  (
    firestore: FirebaseFirestore
): PasswordsFirestore => {
    return {
        login: async (
            idClient: string,
            email: string
        ): Promise<HttpClientResponse<any>> => {
            error
            if (!idClient || !email) {
                const error = new InvalidArgumentException(
                    'idClient or email missing'
                )
                return new HttpClientResponse({
                    error: error,
                    status: error.httpErrorCode
                })
            }

            return firestore.createDoc(
                `${PATH_USER}`,
                {
                    email
                }
            )
        },
        passwords: async (
            idClient: string,
            idGroup: string
        ): Promise<HttpClientResponse<any[]>> => {
            if (!idClient || !idGroup) {
                const error = new InvalidArgumentException(
                    'idClient or idGroup missing'
                )
                return new HttpClientResponse({
                    error: error,
                    status: error.httpErrorCode
                })
            }

            return firestore.getDocs(
                `${PATH_USER}/${idClient}/${PATH_PASSWORDS}/${idGroup}/${PATH_PASSWORDS}`
            )
        },
        passwordsGroups: async (
            idClient: string
        ): Promise<HttpClientResponse<any[]>> => {
            if (!idClient) {
                const error = new InvalidArgumentException(
                    'idClient missing'
                )
                return new HttpClientResponse({
                    error: error,
                    status: error.httpErrorCode
                })
            }

            return firestore.getDocs(
                `${PATH_USER}/${idClient}/${PATH_PASSWORDS}`
            )
        }
    }
}

export default passwordsFirestore
