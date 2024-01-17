import { PasswordGroup } from '@domain/model'
import { HttpClientResponse } from '@domain/model'

import type { ControllerAPI } from '../index'
import getAllPasswordGroups from './remote/GetAllPasswordGroups'
import getAllPasswords from './remote/GetAllPasswords'

export interface GetParams {
    idClient: string,
    idGroup?: string | undefined
}

export default (): ControllerAPI => {
    return {
        async GET(
            params: GetParams
        ): Promise<HttpClientResponse<any>> {
            if (params.idGroup) {
                return getAllPasswords(params.idClient, params.idGroup)
            } else {
                return getAllPasswordGroups(params.idClient)
            }
        },
        async POST(): Promise<HttpClientResponse<any>> {
            return new HttpClientResponse()
        }
    }
}
