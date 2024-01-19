import { InvalidArgumentException } from '../../exception'
import Password from './Password'

export default class PasswordGroup {
	constructor({
		id,
		title,
		passwords = null,
	}: {
		id: string | undefined | null
		title: string | undefined | null
		passwords?: Password[] | undefined | null
	}) {
		if (id !== null && !id?.trim()) {
			throw new InvalidArgumentException(PasswordGroup.name)
		}
		if (!title?.trim()) {
			throw new InvalidArgumentException(PasswordGroup.name)
		}
		if (passwords && !Array.isArray(passwords)) {
			throw new InvalidArgumentException(PasswordGroup.name)
		}

		this.id = id?.trim() || null
		this.title = title.trim()
		this.passwords = passwords || null
	}

	public readonly id: string | null
	public readonly title: string
	public readonly passwords: Password[] | null
}
