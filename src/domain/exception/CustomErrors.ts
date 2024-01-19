export default class CustomErrors extends Error {
	constructor({
		name,
		prototype,
		message,
		internalErrorCode,
		httpErrorCode,
	}: {
		name: string
		prototype: any
		message: string
		internalErrorCode: string
		httpErrorCode: number
	}) {
		super(message)
		this.name = name
		this.internalErrorCode = internalErrorCode
		this.httpErrorCode = httpErrorCode
		this._message = message

		Object.setPrototypeOf(this, prototype)
	}

	private readonly internalErrorCode: string

	readonly httpErrorCode: number
	readonly _message: any
	
}
