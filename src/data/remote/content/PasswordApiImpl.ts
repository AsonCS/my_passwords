import { PasswordGroup } from '@domain/model'
import { PasswordApi } from '@domain/remote'

import httpClient, { HttpClientRequest } from '@infra/HttpClient'

export const passwordApi = (): PasswordApi => {
	return {
		async getAllGroups(): Promise<PasswordGroup[]> {
			return httpClient(
				'/api/passwords'
			)
		},
		async getGroup(
			idGroup: string
		): Promise<PasswordGroup> {
			return httpClient(
				`/api/passwords/${idGroup}`
			)
		},
		async putGroup(
			applyTransform: boolean,
			group: PasswordGroup
		): Promise<PasswordGroup> {
			return httpClient(
				'/api/passwords',
				{
					applyTransform,
					...group
				},
				HttpClientRequest.post()
			)
		}
	}
}
