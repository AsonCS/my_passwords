import { Password } from '@/src/domain/model'
import Text from '../foundation/typography'

export interface Props {
	password: Password
}

export default function PasswordField({ password }: Props) {
	// let isDark = true
	return (
		// <div
		// 	onClick={() => {
		// 		setTheme(isDark)
		// 		isDark = !isDark
		// 	}}
		// >
		<Text>
			{password.title}: {password.value}
		</Text>
		// </div>
	)
}
