import { getTokenCookie } from '@/src/infra/Cookies'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	// http://localhost:3000/api?test=1

	return NextResponse.json(
		{ param: request.nextUrl.searchParams.get('test') },
		{ status: 200 }
	)
}

export async function POST(request: Request, context: any) {
	const body = await request.json()

	if (body.test === 'F' || body.test === 'f') {
		return NextResponse.json({ error: 'Test Error' }, { status: 404 })
	}
	if (body.test === 't') {
		return NextResponse.json({ data: 'Test data' }, { status: 301 })
	}

	const cookie = getTokenCookie(request.headers.get('cookie'))
	const text = `${body.test} - ${cookie}`
	const res = body.test === '123' ? { data: text } : { param: text }

	return NextResponse.json(res, { status: 200 })
}
