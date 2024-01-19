import {
    HttpClientResponse,
    Password,
    PasswordGroup
} from '@domain/model'

import type { ControllerAPI } from '../index'
import { passwords } from './remote'

export interface GetParams {
    idClient: string,
    idGroup?: string | undefined
}

export interface PostParams extends PasswordGroup {
    applyTransform: boolean,
    idClient: string
}

export interface Controller extends ControllerAPI {
    GET: (
        // eslint-disable-next-line no-unused-vars
        params: GetParams
    ) => Promise<HttpClientResponse<any>>
    POST: (
        // eslint-disable-next-line no-unused-vars
        params: PostParams
    ) => Promise<HttpClientResponse<any>>
}

const controller = (): Controller => {
    return {
        async GET(
            params: GetParams
        ): Promise<HttpClientResponse<any>> {
            if (params.idGroup) {
                return passwords(params.idClient)
                    .getGroup(params.idGroup)
            } else {
                return passwords(params.idClient)
                    .getAllGroups()
            }
        },
        async POST(
            params: PostParams
        ): Promise<HttpClientResponse<any>> {
            return passwords(params.idClient)
                .putGroup(
                    params.applyTransform,
                    new PasswordGroup({
                        id: null,
                        title: params.title,
                        passwords: params.passwords
                            ?.map((password) => new Password(password))
                    })
                )
        }
    }
}

export default controller
