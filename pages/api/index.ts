import type { NextApiRequest, NextApiResponse } from 'next'

import { HttpClientResponse } from '@domain/model'
import { auth } from '@firebase/index'

export async function apiHandler(
    req: NextApiRequest,
    res: NextApiResponse,
    // eslint-disable-next-line no-unused-vars
    controller: (method: string) => ((params?: any) => Promise<HttpClientResponse<any>>)
) {
    console.log('currentUser', auth().currentUser)
    
    let result: HttpClientResponse<any>

    try {
        result = await controller(
            req.method!
        )({
            ...req.query,
            ...req.body
        })
    } catch (e) {
        if (e instanceof HttpClientResponse) {
            result = e
        } else {
            result = new HttpClientResponse({
                error: e instanceof Error
                    ? e.message
                    : 'Unknown error'
            })
        }
    }

    res.status(result.status)
        .json(result)
}
