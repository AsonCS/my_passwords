import { Password } from '@/src/domain/model'
import Text from '../../components/foundation/typography'
import PasswordField from '../../components/password_field'
import { randomId } from '../../infra'
import PasswordGroups from './PasswordGroups'

export default async function HomeScreen() {
	const homeScreenId = randomId('homeScreenId')

	return (
		<>
			<h1 id={homeScreenId}>Home Screen</h1>
			<Text>Test text</Text>
			<PasswordField
				password={
					new Password({ id: '1', title: 'title', value: 'value' })
				}
			/>
			<PasswordGroups homeScreenId={homeScreenId} />
		</>
	)
}
