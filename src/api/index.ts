import { HttpClientResponse } from "@domain/model"

export abstract class ControllerAPI<T> {
    [propName: string]: any

    GET: (params?: any) => Promise<HttpClientResponse<T>> = async () => new HttpClientResponse()
    POST: (params?: any) => Promise<HttpClientResponse<T>> = async () => new HttpClientResponse()
}
