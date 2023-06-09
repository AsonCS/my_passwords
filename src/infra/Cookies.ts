import nookies from 'nookies'

const TOKEN = process.env.NEXT_PUBLIC_TOKEN || '' // crypto.randomBytes(20).toString('hex')

export type ServerContext = {
	get(key: string): any
	getAll(): any
	set(key: string, value: string): void
}

function get(key: string, ctx: ServerContext | null): string {
	if (ctx) {
		return ctx.get(key).value
	} else {
		return nookies.get(null, key)[key]
	}
}

function getAll(ctx: ServerContext | null): Array<string> {
	if (ctx) {
		return ctx.getAll().map((cookie: any) => cookie.value)
	} else {
		const cookies = nookies.get(null)
		return Object.keys(cookies).map((key) => cookies[key])
	}
}

function set(key: string, value: string, ctx: ServerContext | null) {
	if (ctx) {
		ctx.set(key, value)
	} else {
		nookies.set(null, key, value)
	}
}

export const tokenCookie = {
	set(token: string, ctx: ServerContext | null = null) {
		set(TOKEN, token, ctx)
	},
	get(ctx: ServerContext | null = null): string | null {
		return get(TOKEN, ctx)
	},
	getAll(ctx: ServerContext | null = null): Array<string> {
		return getAll(ctx)
	},
}
