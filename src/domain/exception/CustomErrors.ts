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

		Object.setPrototypeOf(this, prototype)
	}

	private readonly internalErrorCode: string

	readonly httpErrorCode: number

	public get getError(): {
		error: {
			message: string
			internalCode: string
		}
	} {
		return {
			error: {
				message: this.message,
				internalCode: this.internalErrorCode,
			},
		}
	}
}
