import { Password, PasswordGroup } from "@domain/model";
import { PasswordApi } from "@domain/remote";

import { FirebaseFirestore } from "@firebase/remote/FirebaseFirestore";

export default (
    db: FirebaseFirestore,
    idClient: string
): PasswordApi => {
    return {
        async getAllGroups(): Promise<PasswordGroup[]> {
            return await db
                .passwordsGroups(idClient)
                .then(passwords => passwords.map(password => new PasswordGroup(password)))
        },
        async getAllPasswords(
            idGroup: string
        ): Promise<Password[]> {
            return await db
                .passwords(idClient, idGroup)
                .then(passwords => passwords.map(password => new Password(password)))
        }
    }
}
