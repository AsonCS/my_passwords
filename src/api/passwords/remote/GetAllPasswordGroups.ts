import { HttpClientResponse, PasswordGroup } from '@domain/model'

import { passwordApi } from '../../_remote'
import { HttpStatus } from '@infra/api';0

const getAllPasswordGroups = async (
    idClient: string
): Promise<HttpClientResponse<PasswordGroup[]>> => {
    const result = await passwordApi(idClient)
        .getAllGroups()

    return new HttpClientResponse({
        data: result,
        status: HttpStatus.OK
    })
}

export default getAllPasswordGroups
