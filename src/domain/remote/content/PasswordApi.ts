import { Password, PasswordGroup } from '../../model'

export interface PasswordApi {
	getAllGroups(): Promise<PasswordGroup[]>
	getAllPasswords(
		// eslint-disable-next-line no-unused-vars
		idGroup: string
	): Promise<Password[]>
}
