import { PasswordGroup } from '@domain/model'

export interface PasswordApi {
	getAllGroups(): Promise<PasswordGroup[]>
	getGroup(
		// eslint-disable-next-line no-unused-vars
		idGroup: string
	): Promise<PasswordGroup>
	putGroup(
		// eslint-disable-next-line no-unused-vars
		applyTransform: boolean,
		// eslint-disable-next-line no-unused-vars
		group: PasswordGroup
	): Promise<PasswordGroup>
}
