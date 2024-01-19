import { InvalidArgumentException } from '@domain/exception'
import { HttpClientResponse } from '@domain/model'

import FirebaseFirestore, {
    PATH_USER,
    PATH_PASSWORDS
} from '@firebase/FirebaseFirestore'

export interface GroupDoc {
    title: string
    passwords: string | undefined
}

export interface PasswordsFirestore {
    group: (
        // eslint-disable-next-line no-unused-vars
        idClient: string,
        // eslint-disable-next-line no-unused-vars
        idGroup: string
    ) => Promise<HttpClientResponse<any>>
    passwordsGroups: (
        // eslint-disable-next-line no-unused-vars
        idClient: string
    ) => Promise<HttpClientResponse<any[]>>
    putGroup: (
        // eslint-disable-next-line no-unused-vars
        idClient: string,
        // eslint-disable-next-line no-unused-vars
        groupDoc: GroupDoc
    ) => Promise<HttpClientResponse<any>>
}

const passwordsFirestore =  (
    firestore: FirebaseFirestore
): PasswordsFirestore => {
    return {
        async group(
            idClient: string,
            idGroup: string
        ): Promise<HttpClientResponse<any>> {
            if (!idClient || !idGroup) {
                const error = new InvalidArgumentException(
                    'idClient or idGroup missing'
                )
                throw new HttpClientResponse({
                    error: error,
                    status: error.httpErrorCode
                })
            }

            return firestore.getDoc(
                `${PATH_USER}/${idClient}/${PATH_PASSWORDS}/${idGroup}`
            )
        },
        async passwordsGroups(
            idClient: string
        ): Promise<HttpClientResponse<any[]>> {
            if (!idClient) {
                const error = new InvalidArgumentException(
                    'idClient missing'
                )
                throw new HttpClientResponse({
                    error: error,
                    status: error.httpErrorCode
                })
            }

            return firestore.getDocs(
                `${PATH_USER}/${idClient}/${PATH_PASSWORDS}`
            )
        },
        async putGroup(
            idClient: string,
            groupDoc: GroupDoc
        ): Promise<HttpClientResponse<any>> {
            if (!idClient) {
                const error = new InvalidArgumentException(
                    'idClient missing'
                )
                throw new HttpClientResponse({
                    error: error,
                    status: error.httpErrorCode
                })
            }

            return firestore.createDoc(
                `${PATH_USER}/${idClient}/${PATH_PASSWORDS}`,
                groupDoc
            )
        }
    }
}

export default passwordsFirestore
