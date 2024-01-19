import httpClient from '@infra/HttpClient'

async function onSubmit(resultId: string, ev: SubmitEvent) {
	ev.preventDefault()
	const num = (ev.target as any).num.value
	const res = await httpClient<string>('/api', {
		test: num,
	}).catch((err) => {
		// console.log('Error: ')
		// console.log(err)

		return typeof err.error === 'string' ? err.error : 'Error: '
	})

	const element = document.getElementById(resultId)
	if (element) {
		element.innerHTML = res.param
			? `Result param: ${res.param}`
			: `Result: ${res}`
	}
}

export function OnSubmit(props: { formId: string; resultId: string }) {
	try {
		//tokenCookie.set('Cookie-Test')
		const form = document.getElementById(props.formId) as HTMLFormElement
		form.onsubmit = (ev: SubmitEvent) => onSubmit(props.resultId, ev)
	} catch (e) {
		/* empty */
	}

	return null
}
