import {
    FirestoreWrapper,
    PATH_USER,
    PATH_PASSWORDS
} from "@firebase/FirebaseFirestore"

export interface PasswordsFirestore {
    passwords: (
        idClient: string,
        idGroup: string
    ) => Promise<any[]>
    passwordsGroups: (
        idClient: string
    ) => Promise<any[]>
}

export default (
    firestore: FirestoreWrapper
): PasswordsFirestore => {
    return {
        passwords: async (
            idClient: string,
            idGroup: string
        ): Promise<any[]> => {
            if (!Boolean(idClient)) return []

            return firestore.getDocs(
                `${PATH_USER}/${idClient}/${PATH_PASSWORDS}/${idGroup}/${PATH_PASSWORDS}`
            )
        },
        passwordsGroups: async (
            idClient: string
        ): Promise<any[]> => {
            if (!Boolean(idClient)) return []

            return firestore.getDocs(
                `${PATH_USER}/${idClient}/${PATH_PASSWORDS}`
            )
        }
    }
}
