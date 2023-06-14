import StyledComponentsRegistry from '@/src/ui/infra/styled'
import { GlobalStyle } from '@/src/ui/theme'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Home Screen',
	description: 'Generated Home Screen',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-BR">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<StyledComponentsRegistry>
					<GlobalStyle />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
