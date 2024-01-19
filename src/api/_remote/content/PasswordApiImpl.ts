import { Password, PasswordGroup } from '@domain/model'
import { PasswordApi } from '@domain/remote'

import firebaseAdmin from '@firebase/FirebaseAdmin'
import { GroupDoc } from '@firebase/remote/Passwords'

function responseToPasswordGroup(
    data: any
): PasswordGroup {
    const passwords = (data.passwords as string)
        .split(';')
        .map(Password.fromRemote)

    return new PasswordGroup({
        id: data.id,
        title: data.title,
        passwords: passwords
    })
}

const passwordApi = (
    idClient: string
): PasswordApi => {
    return {
        async getAllGroups(): Promise<PasswordGroup[]> {
            return await firebaseAdmin
                .passwords
                .passwordsGroups(idClient)
                .then(response => (response.data || [])
                    .map(password => responseToPasswordGroup(password))
                )
        },
        async getGroup(
            idGroup: string
        ): Promise<PasswordGroup> {
            return await firebaseAdmin
                .passwords
                .group(idClient, idGroup)
                .then((result) => responseToPasswordGroup(result.data))
        },
        async putGroup(
            applyTransform: boolean,
            group: PasswordGroup
        ): Promise<PasswordGroup> {
            const groupDoc: GroupDoc = {
                title: group.title,
                passwords: group.passwords
                    ?.join(';')
            }

            if (applyTransform) {
                groupDoc.passwords = groupDoc.passwords + ''
            }

            return await firebaseAdmin
                .passwords
                .putGroup(idClient, groupDoc)
                .then((result) => responseToPasswordGroup(result.data))
        }
    }
}

export default passwordApi
