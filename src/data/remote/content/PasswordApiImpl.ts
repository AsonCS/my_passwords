import { PasswordGroup } from '../../../domain/model'
import { PasswordApi } from '../../../domain/remote'
import httpClient from '../../../infra/HttpClient'

export class PasswordApiImpl implements PasswordApi {
	async getAll(): Promise<PasswordGroup[]> {
		return httpClient('/api/passwords')
	}
}
