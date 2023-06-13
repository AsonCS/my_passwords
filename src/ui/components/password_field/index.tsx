import { Password } from '@/src/domain/model'
import Text from '../foundation/typography'

export interface Props {
	password: Password
}

export default function PasswordField({ password }: Props) {
	return (
		<Text>
			{password.title}: {password.value}
		</Text>
	)
}
