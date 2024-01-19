import React from 'react'
import { styled } from 'styled-components'

import { PasswordGroup } from '@domain/model'

import { Links } from '@ui/components'

import { getPasswordGroups, mapPasswordGroup } from './helpers'

const Div = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding-bottom: 50vh;
`

const Button = styled.button`
    display: block;
    margin-top: 24px;
    padding: 12px;
`

export default function HomeScreen() {
	const [passwordGroups, setPasswordGroups] = React.useState<
		PasswordGroup[]
	>([])
	
	return (
		<Div>
			<Content>
				<Links />
				<h1>Home Screen</h1>
				<Button
					onClick={() => getPasswordGroups(setPasswordGroups)}
				>Load passwords</Button>
				{passwordGroups.map(mapPasswordGroup)}
			</Content>
		</Div>
	)
}
