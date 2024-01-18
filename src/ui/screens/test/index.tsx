import { tokenCookie } from '@/src/infra/Cookies'
import { cookies } from 'next/headers'
import { randomId } from '../../infra'
import { OnSubmit } from './client'
import { Link } from '../../infra/next'

export default function HomeScreen() {
	const formId = randomId('home_form')
	const resultId = randomId('home_result')
	return (
		<>
			<h1>Hello word</h1>
			<a>
				tokenCookie.getAll(cookies()): {tokenCookie.getAll(cookies())}
			</a>
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
