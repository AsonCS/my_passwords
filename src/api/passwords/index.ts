import { HttpClientResponse } from '@domain/model'

import { ControllerAPI } from '..'
import controllerAPI from './controller'

const controller = (): ControllerAPI => {
    return {
        GET: async (
            params: any
        ): Promise<HttpClientResponse<any[]>> => {
            return await controllerAPI().GET({
                idClient: params.idClient
            })
        },
        POST: async (
            params: any
        ): Promise<HttpClientResponse<any[]>> => {
            return await controllerAPI().POST({
                applyTransform: params.applyTransform,
                id: params.id,
                idClient: params.idClient,
                title: params.title,
                passwords: params.passwords
            })
        }
    }
}

export default controller
