import { Password, PasswordGroup } from "@domain/model";
import { PasswordApi } from "@domain/remote";

import { passwords } from "@firebase/index";

export default (
    idClient: string
): PasswordApi => {
    return {
        async getAllGroups(): Promise<PasswordGroup[]> {
            return await passwords()
                .passwordsGroups(idClient)
                .then(passwords => passwords.map(password => new PasswordGroup(password)))
        },
        async getAllPasswords(
            idGroup: string
        ): Promise<Password[]> {
            return await passwords()
                .passwords(idClient, idGroup)
                .then(passwords => passwords.map(password => new Password(password)))
        }
    }
}
