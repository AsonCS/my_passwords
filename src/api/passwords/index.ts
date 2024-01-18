import { HttpClientResponse } from '@domain/model'

import { ControllerAPI } from '..'
import controllerAPI from './controller'

const controller = (): ControllerAPI => {
    return {
        GET: async (params: any): Promise<HttpClientResponse<any[]>> => {
            return await controllerAPI().GET({
                idClient: params.idClient
            })
        },
        POST: async (): Promise<HttpClientResponse<any[]>> => {
            return await controllerAPI().POST()
        }
    }
}

export default controller
