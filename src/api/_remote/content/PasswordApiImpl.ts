import { Password, PasswordGroup } from '@domain/model'
import { PasswordApi } from '@domain/remote'

import { passwords } from '@firebase/index'

const passwordApi = (
    idClient: string
): PasswordApi => {
    return {
        async getAllGroups(): Promise<PasswordGroup[]> {
            return await passwords()
                .passwordsGroups(idClient)
                .then(response => (response.data || []).map(password => new PasswordGroup(password)))
        },
        async getAllPasswords(
            idGroup: string
        ): Promise<Password[]> {
            return await passwords()
                .passwords(idClient, idGroup)
                .then(response => (response.data || []).map(password => new Password(password)))
        }
    }
}

export default passwordApi
