import { PasswordApi } from '../domain/remote'
import { PasswordApiImpl } from './remote/content/PasswordApiImpl'

const contentService = {
	passwordApi: new PasswordApiImpl() as PasswordApi,
}

export { contentService }
