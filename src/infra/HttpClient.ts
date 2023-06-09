export type HttpClientRequest = {}

export interface HttpClientResponse<T> {
	data: T | null | undefined
	error: Error | string | null
	status: number
}

export default async function httpClient<T>(
	url: string,
	data: any,
	request: HttpClientRequest = {}
): Promise<T> {
	return httpClientWithResponse<T>(url, data, request).then((res) => {
		if (res.error) {
			throw res
		}

		return res.data as T
	})
}

export async function httpClientWithResponse<T>(
	url: string,
	data: any,
	request: HttpClientRequest = {}
): Promise<HttpClientResponse<T>> {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: data ? JSON.stringify(data) : null,
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
