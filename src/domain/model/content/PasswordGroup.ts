import { InvalidArgumentException } from '../../exception'
import Password from './Password'

export default class PasswordGroup {
	constructor({
		id,
		title,
		passwords,
	}: {
		id: string | undefined | null
		title: string | undefined | null
		passwords: Password[] | undefined | null
	}) {
		if (!id?.trim() || !title?.trim() || !Array.isArray(passwords)) {
			throw new InvalidArgumentException(PasswordGroup.name)
		}

		this.id = id
		this.title = title
		this.passwords = passwords
	}

	public readonly id: string
	public readonly title: string
	public readonly passwords: Password[]
}
