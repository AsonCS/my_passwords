import { HttpClientResponse } from '@domain/model'

export abstract class ControllerAPI {
    // eslint-disable-next-line no-undef
    [propName: string]: any

    GET: (
        // eslint-disable-next-line no-unused-vars
        params?: any
    ) => Promise<HttpClientResponse<any>> = async () => new HttpClientResponse()
    POST: (
        // eslint-disable-next-line no-unused-vars
        params?: any
    ) => Promise<HttpClientResponse<any>> = async () => new HttpClientResponse()
}
