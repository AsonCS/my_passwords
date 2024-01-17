import type { NextApiRequest, NextApiResponse } from 'next'

import { controller } from '@api/passwords'
import { HttpClientResponse } from '@domain/model'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let result: HttpClientResponse<any>

    try {
        result = await controller()[
            req.method!
        ]({
            ...req.query,
            ...req.body
        })
    } catch (e) {
        result = new HttpClientResponse({
            error: e instanceof Error
                ? e.message
                : 'Unknown error'
        })
    }

    res.status(result.status)
        .json(result)
}
