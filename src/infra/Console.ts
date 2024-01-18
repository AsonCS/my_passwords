export function log(args: any) {
	if (process.env.NODE_ENV !== 'production') {
		// eslint-disable-next-line no-console
		console.log(args)
	}
}

export default function error(args: any) {
	// eslint-disable-next-line no-console
	console.error(args)
}
