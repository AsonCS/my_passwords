import { HttpClientResponse, Password } from '@domain/model'

import { passwordApi } from '../../_remote'
import { HttpStatus } from '@infra/api'

const getAllPasswords = async (
    idClient: string,
    idGroup: string
): Promise<HttpClientResponse<Password[]>> => {
    const result = await passwordApi(idClient)
        .getAllPasswords(idGroup)

    return new HttpClientResponse({
        data: result,
        status: HttpStatus.OK
    })
}

export default getAllPasswords
