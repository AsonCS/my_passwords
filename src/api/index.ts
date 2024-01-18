import { HttpClientResponse } from '@domain/model'

export abstract class ControllerAPI {
    // eslint-disable-next-line no-undef
    [propName: string]: any

    // eslint-disable-next-line no-unused-vars
    GET: (params?: any) => Promise<HttpClientResponse<any>> = async () => new HttpClientResponse()
    // eslint-disable-next-line no-unused-vars
    POST: (params?: any) => Promise<HttpClientResponse<any>> = async () => new HttpClientResponse()
}
