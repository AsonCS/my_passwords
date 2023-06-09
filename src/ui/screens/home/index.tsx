import { Link } from '@/src/ui/infra/next'

import { OnSubmit } from './client'
import { randomId } from '../../infra'

export default function Home() {
	const formId = randomId('home_form')
	return (
		<>
			<h1>Hello word</h1>
			<form action='#' id={formId}>
				<input name='num' type='text' defaultValue='12' />
				<button type='submit'>Send</button>
				<OnSubmit formId={formId} />
			</form>
			<Link href='/test'>Test</Link>
		</>
	)
}
