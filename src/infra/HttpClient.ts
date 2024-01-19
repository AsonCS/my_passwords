import { HttpClientResponse } from '@domain/model'

import firebase from '@firebase/index'

/* eslint-disable no-unused-vars */
enum HttpMethods {
	GET = 'GET',
	POST = 'POST'
}

export class HttpClientRequest {

	readonly method: HttpMethods

	private constructor(
		method = HttpMethods.GET
	) {
		this.method = method
	}

	static get = () => new HttpClientRequest(HttpMethods.GET)

	static post = () => new HttpClientRequest(HttpMethods.POST)

}

export default async function httpClient<T>(
	url: string,
	data: any | null = null,
	request: HttpClientRequest = HttpClientRequest.get()
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
	const headers: any = {
		'Content-Type': 'application/json',
	}

	const token = await firebase.firebaseAuth.token
	if (token) {
		headers['Authorization'] = `Bearer ${token}`
	}

	return fetch(url, {
		body: data ? JSON.stringify(data) : null,
		credentials: 'same-origin',
		headers: headers,
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

			return new HttpClientResponse({
				data: data,
				error: error,
				status: res.status
			})
		})
		.catch((err) => {
			return new HttpClientResponse({
				error: err || 'Unknown error'
			})
		})
}
