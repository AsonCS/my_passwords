import { randomId } from '../../infra'
import PasswordGroups from './PasswordGroups'

export default async function HomeScreen() {
	const homeScreenId = randomId('homeScreenId')

	return (
		<>
			<h1 id={homeScreenId}>Home Screen</h1>
			<PasswordGroups homeScreenId={homeScreenId} />
		</>
	)
}
