import {
    collection,
    Firestore,
    getDocs
} from "firebase/firestore"

// region PATHS
export const PATH_PASSWORDS = 'PASSWORDS'
export const PATH_USER = 'USERS'

export default class FirebaseFirestore {

    constructor(
        firestore: Firestore
    ) {
        this.firestore = firestore
    }

    getDocs(
        path: string
    ): Promise<any[]> {
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
        )
    }

    private readonly firestore: Firestore

}
