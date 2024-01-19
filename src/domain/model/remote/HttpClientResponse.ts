import { HttpStatus } from './HttpStatus'

export default class HttpClientResponse<T> {
    constructor({
        data = null,
        error = null,
        status = HttpStatus.InternalServerError
    }: {
        data?: T | null | undefined,
        error?: Error | string | any | null,
        status?: HttpStatus
    } = {}) {
        this.data = data
        this.error = error
        this.status = status
    }

    readonly data: T | null | undefined
    readonly error: Error | string | any | null
    readonly status: HttpStatus
}
