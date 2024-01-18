import type { NextApiRequest, NextApiResponse } from 'next'

import { HttpClientResponse } from '@domain/model'

import FirebaseAdmin from '@firebase/FirebaseAdmin'

import { tokenCookie } from '@infra/Cookies'

const firebaseAdmin = new FirebaseAdmin()

export async function apiHandler(
    req: NextApiRequest,
    res: NextApiResponse,
    // eslint-disable-next-line no-unused-vars
    controller: (method: string) => ((params?: any) => Promise<HttpClientResponse<any>>)
) {
    const idClient = await firebaseAdmin.verifyToken(
        tokenCookie.get(req.cookies)
    )
    //console.log('idClient', idClient)
    
    let result: HttpClientResponse<any>
    try {
        result = await controller(
            req.method!
        )({
            ...req.query,
            ...req.body,
            idClient: idClient
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
