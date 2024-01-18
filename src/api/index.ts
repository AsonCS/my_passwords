import { HttpClientResponse } from "@domain/model"

export abstract class ControllerAPI {
    [propName: string]: any

    GET: (params?: any) => Promise<HttpClientResponse<any>> = async () => new HttpClientResponse()
    POST: (params?: any) => Promise<HttpClientResponse<any>> = async () => new HttpClientResponse()
}
