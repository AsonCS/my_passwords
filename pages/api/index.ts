import type { NextApiRequest, NextApiResponse } from 'next'

import { HttpClientResponse } from '@domain/model'

export async function apiHandler(
    req: NextApiRequest,
    res: NextApiResponse,
    controller: (method: string) => ((params?: any) => Promise<HttpClientResponse<any>>)
) {
    let result: HttpClientResponse<any>

    try {
        result = await controller(
            req.method!
        )({
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
