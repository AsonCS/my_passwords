'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	/* Reset CSS (Necolas Reset CSS <3) */
	:root {
		/* 
		--blue: #3772ff;
		--green: #36d6ad;
		--white: #ffffff;
		--coral: #fc7071;
		--creme: #fcf0e3;
		--dark-gray: #737380;
		--light-gray: #bcbcbc;
		--light-2-gray: #f6f6f6;
		--alpha-gray: #66666611;
		 */

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
