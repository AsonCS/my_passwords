import { DefaultTheme } from 'styled-components'

import { DarkTheme, LightTheme, Theme } from '../../theme'

class StyledDarkTheme extends DarkTheme implements DefaultTheme {}
class StyledLightTheme extends LightTheme implements DefaultTheme {}

const themes = {
	StyledDarkTheme: () => new StyledDarkTheme(),
	StyledLightTheme: () => new StyledLightTheme(),
}

export type ThemeType = 'StyledDarkTheme' | 'StyledLightTheme'

export function getTheme(themeType: ThemeType): Theme {
	return themes[themeType]()
}
