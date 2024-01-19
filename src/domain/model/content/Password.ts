import { InvalidArgumentException } from '../../exception'

export default class Password {

	public readonly title: string
	public readonly value: string

	constructor({
		title,
		value,
	}: {
		title: string | undefined | null
		value: string | undefined | null
	}) {
		if (!title?.trim() || !value?.trim()) {
			throw new InvalidArgumentException(Password.name)
		}

		this.title = title.trim()
		this.value = value.trim()
	}

	static fromRemote(password: string): Password {
		const [title, value] = password.split(':')
		return new Password({
			title: title,
			value: value
		})
	}

	toString(): string {
		return `${this.title}:${this.value}`
	}

}

Password.prototype.toString = function passwordToString() {
	return `${this.title}:${this.value}`
}
