'use client'

import { createGlobalStyle } from 'styled-components'

import { DarkTheme, LightTheme, Theme } from './theme'

export const GlobalStyle = createGlobalStyle`
	:root {
		--light-colors-primary-main: #ffffff;
		--light-colors-primary-text: #000000;
		--light-colors-accent-main: #aaaaaa;
		--light-colors-accent-text: #555555;

		--dark-colors-primary-main: #000000;
		--dark-colors-primary-text: #ffffff;
		--dark-colors-accent-main: #aaaaaa;
		--dark-colors-accent-text: #555555;

		--font-main: 'Poppins', sans-serif;
		--font-secondary: 'IBM Plex Sans', sans-serif;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html,
	body {
		font-family: var(--font-main);
		font-size: 1em;
		line-height: 1.6;
	}
	#__next {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	img {
		display: block;
		height: auto;
		max-width: 100%;
	}
	a {
		color: #0070f3;
		cursor: pointer;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	a:active {
		text-decoration: none;
	}
	button {
		border: none;
		border-radius: 0.5em;
		cursor: pointer;
		font-family: var(--font-main);
		height: fit-content;
		margin: 0;
		padding: 0;
		width: fit-content;
	}
`

export { DarkTheme, LightTheme }

export type { Theme }
