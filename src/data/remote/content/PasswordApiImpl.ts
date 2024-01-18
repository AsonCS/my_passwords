import { auth } from '@firebase/index'
import { Password, PasswordGroup } from '../../../domain/model'
import { PasswordApi } from '../../../domain/remote'
import httpClient from '../../../infra/HttpClient'

const passwordApi = (): PasswordApi => {
	return {
		async getAllGroups(): Promise<PasswordGroup[]> {
			//console.log('currentUser', auth().currentUser)		
			const idClient = auth().currentUser?.uid
			return httpClient(`/api/passwords?idClient=${idClient}`)
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
