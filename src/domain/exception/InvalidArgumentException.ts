import ErrorsCode from './ErrorsCode'
import CustomErrors from './CustomErrors'

const DEFAULT_MESSAGE = 'Invalid Argument: '
const DEFAULT_CODE = 400
const ERROR_CODE = ErrorsCode._0001

export default class InvalidArgumentException extends CustomErrors {
	constructor(message: string, httpErrorCode: number = DEFAULT_CODE) {
		super({
			name: 'InvalidArgumentException',
			prototype: InvalidArgumentException.prototype,
			message: DEFAULT_MESSAGE + message,
			internalErrorCode: ERROR_CODE,
			httpErrorCode: httpErrorCode,
		})
	}
}
