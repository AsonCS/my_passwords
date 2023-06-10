'use client'

import React from 'react'

import { Password, PasswordGroup } from '../../../domain/model'
import { tokenCookie } from '../../../infra/Cookies'
import { contentService } from '../../../data'

function mapPassword(password: Password): React.ReactElement {
	return <li key={password.id}>{`${password.title}: ${password.value}`}</li>
}

function mapPasswordGroup(passwordGroup: PasswordGroup): React.ReactElement {
	const passwords = passwordGroup.passwords.map(mapPassword)

	return (
		<li key={passwordGroup.id}>
			{passwordGroup.title}
			<ol>{passwords}</ol>
		</li>
	)
}

export default function PasswordGroups({
	homeScreenId,
}: {
	homeScreenId: string
}) {
	const [passwordGroups, setPasswordGroups] = React.useState<
		React.ReactElement[]
	>([])

	const getPasswordGroups = () => {
		tokenCookie.set(process.env.NEXT_PUBLIC_TOKEN!)

		contentService.passwordApi
			.getAll()
			.then((passwordGroups) => {
				// console.log('passwordGroups')

				setPasswordGroups(passwordGroups.map(mapPasswordGroup))
			})
			.catch((/* err */) => {
				// console.error(err)

				setPasswordGroups([])
			})
	}

	React.useEffect(() => {
		document.getElementById(homeScreenId)!.onclick = getPasswordGroups

		getPasswordGroups()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<a href='fff'>tttt</a>
			<ul>{passwordGroups}</ul>
		</>
	)
}
