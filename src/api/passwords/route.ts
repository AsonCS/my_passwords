import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

import { tokenCookie } from '@infra/Cookies'

import { HttpClientResponse, Password, PasswordGroup } from '@domain/model'

export async function GET(/* request: NextRequest */) {
	// console.log('request.url', request.url)

	const token = tokenCookie.get(cookies())
	if (token !== process.env.NEXT_PUBLIC_TOKEN) {
		return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
	}

	// console.log('token', token)

	// const password = await request.json().then((value) => value.password)
	// if (!password) {
	// 	return NextResponse.json({ error: 'Without password' }, { status: 404 })
	// }

	const status = 200
	const data: HttpClientResponse<PasswordGroup[]> = {
		data: [
			new PasswordGroup({
				id: '1',
				title: 'Test 1',
				passwords: [
					new Password({
						id: '1',
						title: 'Password 1',
						value: '12345',
					}),
					new Password({
						id: '2',
						title: 'Password 2',
						value: '12345',
					}),
					new Password({
						id: '3',
						title: 'Password 3',
						value: '12345',
					}),
				],
			}),
			new PasswordGroup({
				id: '2',
				title: 'Test 2',
				passwords: [
					new Password({
						id: '1',
						title: 'Password 1',
						value: '12345',
					}),
					new Password({
						id: '2',
						title: 'Password 2',
						value: '12345',
					}),
					new Password({
						id: '3',
						title: 'Password 3',
						value: '12345',
					}),
				],
			}),
		],
		error: null,
		status: status,
	}

	// if (password !== 'password') {
	// 	data = { data: [] }
	// }

	// console.log('data', data)

	return NextResponse.json(data, { status: status })
}
