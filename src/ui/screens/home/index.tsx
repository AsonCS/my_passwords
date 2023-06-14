'use client'

import { styled } from 'styled-components'

import PasswordField from '../../components/password_field'
import Text from '../../components/foundation/typography'
import { withTheme } from '../../infra/styled'
import PasswordGroups from './PasswordGroups'
import { randomId } from '../../infra'

const Div = styled.div`
	background-color: ${(args) => withTheme(args).colors.primary.main};
`

export default async function HomeScreen() {
	const homeScreenId = randomId('homeScreenId')

	return (
		<Div>
			<h1 id={homeScreenId}>Home Screen</h1>
			<Text>Test text</Text>
			<PasswordField
				password={{ id: '1', title: 'title', value: 'value' }}
			/>
			<PasswordGroups homeScreenId={homeScreenId} />
		</Div>
	)
}
