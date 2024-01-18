import nookies from 'nookies'
import error from './Console'

const COOKIE_MAX_AGE_YEAR = 60 // * 60 * 24 * 32 * 12
const COOKIE_OPTIONS = {
	// httpOnly: true,
	maxAge: COOKIE_MAX_AGE_YEAR,
	path: '/',
	sameSite: 'lax',
}
const TOKEN = process.env.NEXT_PUBLIC_TOKEN || '' // crypto.randomBytes(20).toString('hex')

export type ServerContext = {
	// eslint-disable-next-line no-unused-vars
	get(key: string): any
	getAll(): any
	// eslint-disable-next-line no-unused-vars
	set(key: string, value: string, options: any): void
}

function get(key: string, ctx: ServerContext | null): string | null {
	try {
		if (ctx) {
			return ctx.get(key).value
		} else {
			return nookies.get(null, key)[key]
		}
	} catch (err) {
		error(err)

		return null
	}
}

function getAll(ctx: ServerContext | null): Array<string> {
	try {
		if (ctx) {
			return ctx.getAll().map((cookie: any) => cookie.value)
		} else {
			const cookies = nookies.get(null)
			return Object.keys(cookies).map((key) => cookies[key])
		}
	} catch (err) {
		error(err)

		return []
	}
}

function set(key: string, value: string, ctx: ServerContext | null) {
	try {
		if (ctx) {
			ctx.set(key, value, COOKIE_OPTIONS)
		} else {
			nookies.set(null, key, value, COOKIE_OPTIONS)
		}
	} catch (err) {
		error(err)
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
