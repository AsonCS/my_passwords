import { describe, expect, it } from '@jest/globals'
import { User } from '../../../src/domain/model'

describe('User', () => {
	it('constructor', () => {
		const obj = Object('ddd')
		try {
			new User(obj)
			throw Error('Failed')
		} catch (err: any) {
			expect(err.message).toBe('Invalid Argument: User')
		}
	})
})
