import { styled } from 'styled-components'

import PasswordField from '@ui/components/password_field'
import Text from '@ui/components/foundation/typography'

import PasswordGroups from './PasswordGroups'

const Div = styled.div`
`

export default function HomeScreen() {
	return (
		<Div>
			<h1 id='homeScreenId'>Home Screen</h1>
			<Text>Test text</Text>
			<PasswordField
				password={{ id: '1', title: 'title', value: 'value' }}
			/>
			<PasswordGroups />
		</Div>
	)
}
