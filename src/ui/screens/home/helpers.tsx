import React from 'react'

import contentService from '@data/index'

import { Password, PasswordGroup } from '@domain/model'

export function getPasswordGroups(
    // eslint-disable-next-line no-unused-vars
    setPasswordGroups: (groups: PasswordGroup[]) => void
) {
    const passwordApi = contentService().passwordApi()

    passwordApi.getAllGroups()
        .then(async (groups) => {
            // console.log('passwordGroups')
            const passwordGroups = await Promise.all(
                groups.map(async (group) => {
                    return new PasswordGroup({
                        id: group.id,
                        title: group.title,
                        passwords: group.passwords
                    })
                })
            )

            setPasswordGroups(passwordGroups)
        })
        .catch(() => {
            // console.error(err)

            setPasswordGroups([])
        })
}

function mapPassword(
    password: Password,
    index: number
): React.ReactElement {
	return <li key={index}>{`${password.title}: ${password.value}`}</li>
}

export function mapPasswordGroup(
    passwordGroup: PasswordGroup
): React.ReactElement {
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
