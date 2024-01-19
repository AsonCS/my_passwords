import {
    HttpClientResponse,
    HttpStatus,
    PasswordGroup
} from '@domain/model'

import { passwordApi } from '../../_remote'

export const passwords = (
    idClient: string
) => {
    return {
        async getAllGroups(): Promise<HttpClientResponse<PasswordGroup[]>> {
            const result = await passwordApi(idClient)
                .getAllGroups()

            return new HttpClientResponse({
                data: result,
                status: HttpStatus.OK
            })
        },
        async getGroup(
            idGroup: string
        ): Promise<HttpClientResponse<PasswordGroup>> {
            const result = await passwordApi(idClient)
                .getGroup(idGroup)

            return new HttpClientResponse({
                data: result,
                status: HttpStatus.OK
            })
        },
        async putGroup(
            applyTransform: boolean,
            password: PasswordGroup
        ): Promise<HttpClientResponse<PasswordGroup>> {
            const result = await passwordApi(idClient)
                .putGroup(
                    applyTransform,
                    password
                )

            return new HttpClientResponse({
                data: result,
                status: HttpStatus.OK
            })
        }
    }
}
