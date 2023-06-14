'use client'

import { useServerInsertedHTML } from 'next/navigation'
import React, { useState } from 'react'
import {
	ServerStyleSheet,
	StyleSheetManager,
	ThemeProvider,
} from 'styled-components'

import { getTheme, ThemeType } from './theme'
import { Theme } from '../../theme'

const DEFAULT_THEME = 'StyledDarkTheme'

function isClient(): boolean {
	return typeof window !== 'undefined'
}

function StyledComponentsProvider(props: { children: React.ReactNode }) {
	const [theme, setTheme] = React.useState<ThemeType>(DEFAULT_THEME)
	if (isClient()) {
		(window as any).mpToggleAppTheme = () => {
			setTheme(
				theme === 'StyledDarkTheme'
					? 'StyledLightTheme'
					: 'StyledDarkTheme'
			)
		}
	}
	return (
		<ThemeProvider theme={getTheme(theme)}>{props.children}</ThemeProvider>
	)
}

export default function StyledComponentsRegistry({
	children,
}: {
	children: React.ReactNode
}) {
	// Only create stylesheet once with lazy initial state
	// x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement()
		styledComponentsStyleSheet.instance.clearTag()
		return <>{styles}</>
	})

	if (isClient()) {
		return <StyledComponentsProvider>{children}</StyledComponentsProvider>
	}

	return (
		<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
			<StyledComponentsProvider>{children}</StyledComponentsProvider>
		</StyleSheetManager>
	)
}

export function withTheme({ theme }: { theme: any }): Theme {
	if (theme.colors) {
		return theme
	} else {
		return getTheme(DEFAULT_THEME)
	}
}
