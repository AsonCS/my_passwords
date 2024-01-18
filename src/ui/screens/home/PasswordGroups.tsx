import React from 'react'

import contentService from '@data/index'

import { Password, PasswordGroup } from '../../../domain/model'
import { tokenCookie } from '../../../infra/Cookies'

function mapPassword(password: Password): React.ReactElement {
	return <li key={password.id}>{`${password.id}-${password.title}: ${password.value}`}</li>
}

function mapPasswordGroup(passwordGroup: PasswordGroup): React.ReactElement {
	const passwords = passwordGroup.passwords
		?.map(mapPassword)
		|| []

	return (
		<li key={passwordGroup.id}>
			{passwordGroup.title}
			<ol>{passwords}</ol>
		</li>
	)
}

export default function PasswordGroups() {
	const [passwordGroups, setPasswordGroups] = React.useState<
		React.ReactElement[]
	>([])

	const getPasswordGroups = () => {
		tokenCookie.set(process.env.NEXT_PUBLIC_TOKEN!)
		const passwordApi = contentService().passwordApi()

		passwordApi.getAllGroups()
			.then(async (groups) => {
				// console.log('passwordGroups')
				const passwordGroups = await Promise.all(
					groups.map(async (group) => {
						return new PasswordGroup({
							id: group.id,
							title: group.title,
							passwords: await passwordApi
								.getAllPasswords(group.id)
								.catch(() => Promise.resolve(null))
						})
					})
				)

				setPasswordGroups(passwordGroups.map(mapPasswordGroup))
			})
			.catch(() => {
				// console.error(err)

				setPasswordGroups([])
			})
	}

	React.useEffect(() => {
		const element = document.getElementById('homeScreenId')
		if (element) {
			element.onclick = getPasswordGroups
		}

		// getPasswordGroups()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<a href="fff">tttt</a>
			<ul>{passwordGroups}</ul>
		</>
	)
}
