import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	// http://localhost:3000/api?test=1
	
	return NextResponse.json(
		{ param: request.nextUrl.searchParams.get('test') },
		{ status: 200 }
	)
}

export async function POST(request: Request, context: any) {
	let body = await request.json()

	return NextResponse.json(
		{ param: body.test },
		{ status: 200 }
	)
}
