import { HttpClientResponse, PasswordGroup } from '@domain/model'

import { ControllerAPI } from '..'
import controller from './controller'

export default (): ControllerAPI<PasswordGroup[]> => {
    return {
        GET: async (params: any): Promise<HttpClientResponse<PasswordGroup[]>> => {
            return await controller().GET({
                idClient: params.idClient
            })
        },
        POST: async (): Promise<HttpClientResponse<PasswordGroup[]>> => {
            return await controller().POST()
        }
    }
}

export { controller }
