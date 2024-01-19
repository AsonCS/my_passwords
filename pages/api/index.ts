import type { NextApiRequest, NextApiResponse } from 'next'

import { HttpClientResponse } from '@domain/model'

import firebaseAdmin from '@firebase/FirebaseAdmin'

export async function apiHandler(
    req: NextApiRequest,
    res: NextApiResponse,
    // eslint-disable-next-line no-unused-vars
    controller: (method: string) => (params?: any) => Promise<HttpClientResponse<any>>
) {
    const idClient = await firebaseAdmin
        .verifyToken(
            req.headers.authorization || ''
        )
    const body = {
        ...req.query,
        ...req.body,
        idClient: idClient
    }
    //console.log('body', body)
    
    let result: HttpClientResponse<any>
    try {
        result = await controller(
            req.method!
        )(body)
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
