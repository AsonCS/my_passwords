export const MP_STYLE_COLORS = 'mp_style_colors'

const colorsLightTheme = `
	:root {
		--primary-text: #000000;
	}
`

const colorsDarkTheme = `
	:root {
		--primary-text: red;
	}
`

export function getColorsTheme(isDark: boolean = true): string {
	return isDark ? colorsDarkTheme : colorsLightTheme
}

export function setTheme(isDark: boolean = false) {
	try {
		const style = document.getElementById(
			MP_STYLE_COLORS
		) as HTMLStyleElement
		style.innerHTML = getColorsTheme(isDark)
	} catch (e) {
		/* empty */
	}
}
