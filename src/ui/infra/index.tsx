export function randomId(prefix: string): string {
	return `${prefix}_${(Math.random()).toString().substring(2, 8)}`
}
