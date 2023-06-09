import { tokenCookie } from '@/src/infra/Cookies'
import { Link } from '@/src/ui/infra/next'
import { randomId } from '@/src/ui/infra'

import { OnSubmit } from './client'

import { cookies } from 'next/headers'

export default function HomeScreen() {
	console.log('tokenCookie.getAll(cookies())')
	console.log(tokenCookie.getAll(cookies()))

	const formId = randomId('home_form')
	const resultId = randomId('home_result')
	return (
		<>
			<h1>Hello word</h1>
			<form action='#' id={formId}>
				<input name='num' type='text' defaultValue='12' />
				<button type='submit'>Send</button>
				<OnSubmit formId={formId} resultId={resultId} />
			</form>
			<p id={resultId}></p>
			<Link href='/test'>Test</Link>
		</>
	)
}
