import type { NextApiRequest, NextApiResponse } from 'next'

import controller from '@api/passwords'
import { apiHandler } from '..'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    return apiHandler(
        req,
        res,
        (method: string) => (params?: any) => controller()[method](params)
    )
}
