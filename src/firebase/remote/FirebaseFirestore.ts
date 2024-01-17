import {
    collection,
    Firestore,
    getDocs
} from "firebase/firestore"

// region PATHS
const PATH_PASSWORDS = 'PASSWORDS'
const PATH_USER = 'USERS'

export interface FirebaseFirestore {
    passwords: (
        idClient: string,
        idGroup: string
    ) => Promise<any[]>
    passwordsGroups: (
        idClient: string
    ) => Promise<any[]>
}

export default (
    firestore: Firestore
): FirebaseFirestore => {
    return {
        passwords: async (
            idClient: string,
            idGroup: string
        ): Promise<any[]> => {
            if (!Boolean(idClient)) return []

            const querySnapshot = await getDocs(
                collection(
                    firestore,
                    `${PATH_USER}/${idClient}/${PATH_PASSWORDS}/${idGroup}/${PATH_PASSWORDS}`
                )
            )

            return querySnapshot
                .docs
                .map((doc) => {
                    const result = doc.data()
                    result.id = doc.id

                    return result
                })
        },
        passwordsGroups: async (
            idClient: string
        ): Promise<any[]> => {
            if (!Boolean(idClient)) return []

            const querySnapshot = await getDocs(
                collection(
                    firestore,
                    `${PATH_USER}/${idClient}/${PATH_PASSWORDS}`
                )
            )

            return querySnapshot
                .docs
                .map((doc) => {
                    const result = doc.data()
                    result.id = doc.id

                    return result
                })
        }
    }
}
