import type { AppProps } from 'next/app'

// These styles apply to every route in the application
import '../src/ui/css/global.css'

import { FirebaseProvider } from '@/src/ui/contexts/FirebaseContext'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<FirebaseProvider>
			<Component {...pageProps} />
		</FirebaseProvider>
	)
}
