import { Password, PasswordGroup } from '../../../domain/model'
import { PasswordApi } from '../../../domain/remote'
import httpClient from '../../../infra/HttpClient'

export default (): PasswordApi => {
	return {
		async getAllGroups(): Promise<PasswordGroup[]> {
			return httpClient('/api/passwords?idClient=TesteId1')
		},
		async getAllPasswords(
			idGroup: string
		): Promise<Password[]> {
			return httpClient(`/api/passwords/${idGroup}?idClient=TesteId1`)
		}
	}
}
