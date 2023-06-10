export type HttpClientRequest = {
	method: string
}

export interface HttpClientResponse<T> {
	data: T | null | undefined
	error: Error | string | null
	status: number
}

export default async function httpClient<T>(
	url: string,
	data: any | null = null,
	request: HttpClientRequest = {
		method: 'GET',
	}
): Promise<T> {
	return httpClientWithResponse<T>(url, data, request).then((res) => {
		// console.log('httpClient', res)

		if (typeof res.error === 'string') {
			throw new Error(res.error)
		}
		if (
			typeof res.error === 'object' &&
			typeof res.error?.message === 'string'
		) {
			throw res.error
		}

		return res.data as T
	})
}

export async function httpClientWithResponse<T>(
	url: string,
	data: any,
	request: HttpClientRequest
): Promise<HttpClientResponse<T>> {
	return fetch(url, {
		headers: {
			'Content-Type': 'application/json',
		},
		body: data ? JSON.stringify(data) : null,
		...request,
	})
		.then(async (res) => {
			const json = await res.json()
			let error = json.error || res.statusText || 'Unknown error'
			let data = json.data ? json.data : { ...json }
			if (res.ok) {
				error = null
			} else {
				data = null
			}

			return {
				data: data,
				error: error,
				status: res.status,
			} as HttpClientResponse<T>
		})
		.catch((err) => {
			return {
				data: null,
				error: err || 'Unknown error',
				status: -1,
			}
		})
}
