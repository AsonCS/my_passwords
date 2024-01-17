import { Password } from '@domain/model'
import { HttpClientResponse } from '@domain/model'

import { HttpStatus } from '@infra/api'

import type { ControllerAPI } from '../index'

export interface GetParams {
    test: string
}

export default class Controller implements ControllerAPI<Password> {
    async GET(
        params: GetParams
    ): Promise<HttpClientResponse<Password>> {
        return new HttpClientResponse({
            data: {
                id: 'id',
                title: `title GET ${params.test}`,
                value: `value GET ${params.test}`,
            },
            status: HttpStatus.OK
        })
    };
    async POST(): Promise<HttpClientResponse<Password>> {
        return new HttpClientResponse({
            data: {
                id: 'id',
                title: 'title POST',
                value: 'value POST'
            },
            status: HttpStatus.OK
        })
    }
}
