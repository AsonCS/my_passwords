import { InvalidArgumentException } from '../../exception'

export class User {
	constructor({
		idClient,
		nickname,
		email,
	}: {
		idClient: string | undefined | null
		nickname: string | undefined | null
		email: string | undefined | null
	}) {
		if (!idClient?.trim() || !nickname?.trim() || !email?.trim()) {
			throw new InvalidArgumentException(User.name)
		}
		this.idClient = idClient
		this.nickname = nickname
		this.email = email
	}

	public readonly idClient: string
	public readonly nickname: string
	public readonly email: string
}
