import { PasswordGroup } from '../../model'

export interface PasswordApi {
	getAll(): Promise<PasswordGroup[]>
}
