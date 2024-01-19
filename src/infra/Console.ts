export function logAny(args: any) {
	if (process.env.NODE_ENV !== 'production') {
		// eslint-disable-next-line no-console
		console.log(args)
	}
}

export function logError(args: any) {
	// eslint-disable-next-line no-console
	console.error(args)
}
