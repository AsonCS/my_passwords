import FirebaseFirestore, {
    PATH_USER,
    PATH_PASSWORDS
} from '@firebase/FirebaseFirestore'

export interface PasswordsFirestore {
    passwords: (
        // eslint-disable-next-line no-unused-vars
        idClient: string,
        // eslint-disable-next-line no-unused-vars
        idGroup: string
    ) => Promise<any[]>
    passwordsGroups: (
        // eslint-disable-next-line no-unused-vars
        idClient: string
    ) => Promise<any[]>
}

const passwordsFirestore =  (
    firestore: FirebaseFirestore
): PasswordsFirestore => {
    return {
        passwords: async (
            idClient: string,
            idGroup: string
        ): Promise<any[]> => {
            if (!idClient) return []

            return firestore.getDocs(
                `${PATH_USER}/${idClient}/${PATH_PASSWORDS}/${idGroup}/${PATH_PASSWORDS}`
            )
        },
        passwordsGroups: async (
            idClient: string
        ): Promise<any[]> => {
            if (!idClient) return []

            return firestore.getDocs(
                `${PATH_USER}/${idClient}/${PATH_PASSWORDS}`
            )
        }
    }
}

export default passwordsFirestore
