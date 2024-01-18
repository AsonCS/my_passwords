import { Password, PasswordGroup } from '../../../domain/model'
import { PasswordApi } from '../../../domain/remote'
import httpClient from '../../../infra/HttpClient'

const passwordApi = (): PasswordApi => {
	return {
		async getAllGroups(): Promise<PasswordGroup[]> {
			return httpClient('/api/passwords')
		},
		async getAllPasswords(
			// idGroup: string
		): Promise<Password[]> {
			return []

			// return httpClient(`/api/passwords/${idGroup}?idClient=TesteId1`)
		}
	}
}

export default passwordApi
