import { HttpClientResponse, Password } from '@domain/model'

import { ControllerAPI } from '..'
import Controller from './controller'

function controller(): ControllerAPI<Password> {
    const controller = new Controller()

    return {
        GET: async (params: any): Promise<HttpClientResponse<Password>> => {
            return await controller.GET({
                test: params.test
            })
        },
        POST: async (): Promise<HttpClientResponse<Password>> => {
            return await controller.POST()
        }
    }
}

export { controller }
