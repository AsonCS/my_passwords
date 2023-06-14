export interface Theme {
	colors: {
		primary: {
			main: string
			text: string
		}
		accent: {
			main: string
			text: string
		}
	}
}

export class LightTheme implements Theme {
	colors = {
		primary: {
			main: 'var(--light-colors-primary-main)',
			text: 'var(--light-colors-primary-text)',
		},
		accent: {
			main: 'var(--light-colors-accent-main)',
			text: 'var(--light-colors-accent-text)',
		},
	}
}

export class DarkTheme implements Theme {
	colors = {
		primary: {
			main: 'var(--dark-colors-primary-main)',
			text: 'var(--dark-colors-primary-text)',
		},
		accent: {
			main: 'var(--dark-colors-accent-main)',
			text: 'var(--dark-colors-accent-text)',
		},
	}
}
