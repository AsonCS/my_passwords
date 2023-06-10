import { InvalidArgumentException } from '../../exception'

export class Password {
	constructor({
		id,
		title,
		value,
	}: {
		id: string | undefined | null
		title: string | undefined | null
		value: string | undefined | null
	}) {
		if (!id?.trim() || !title?.trim() || !value?.trim()) {
			throw new InvalidArgumentException(Password.name)
		}

		this.id = id
		this.title = title
		this.value = value
	}

	public readonly id: string
	public readonly title: string
	public readonly value: string
}
