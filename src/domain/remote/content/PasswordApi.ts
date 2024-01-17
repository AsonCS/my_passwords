import { Password, PasswordGroup } from '../../model'

export interface PasswordApi {
	getAllGroups(): Promise<PasswordGroup[]>
	getAllPasswords(
		idGroup: string
	): Promise<Password[]>
}
