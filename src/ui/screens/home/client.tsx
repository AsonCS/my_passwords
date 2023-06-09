'use client'

import { setTokenCookie } from '@/src/infra/Cookies'
import httpClient from '@/src/infra/HttpClient'

const onSubmit = async (e: SubmitEvent) => {
	e.preventDefault()
	const num = (e.target as any).num.value
	const res = await httpClient<string>('/api', {
		test: num,
	}).catch((err) => {
		console.log('Error: ')
		console.log(err)

		return typeof err.error === 'string' ? err.error : 'Error: '
	})
	console.log(res)
}

export function OnSubmit(props: { formId: string }) {
	try {
		setTokenCookie('Cookie-Test')
		const form = document.getElementById(props.formId) as HTMLFormElement
		form.onsubmit = onSubmit
	} catch (e) {}

	return null
}
