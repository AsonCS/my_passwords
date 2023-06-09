import nookies from 'nookies'

const TOKEN = process.env.NEXT_PUBLIC_TOKEN || '' // crypto.randomBytes(20).toString('hex')

export function setTokenCookie(token: string) {
	nookies.set(null, TOKEN, token)
}

export function getTokenCookie(cookies: string | null = null): string | null {
	if (cookies) {
		const token = cookies
			.split('; ')
			.find((value) => value.includes(TOKEN))
			?.substring(TOKEN.length + 1)

		return token || null
	} else {
		console.log(nookies.get(null, TOKEN))

		return TOKEN
	}
}
