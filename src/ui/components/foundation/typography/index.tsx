'use client'

import React from 'react'
import styled from 'styled-components'

import { withTheme } from '../../../../../src/ui/infra/styled'

type PropAs = 'h1' | 'h2' | 'h3' | 'p' | 'label'

interface Props {
	As?: PropAs
	children: React.ReactNode
	onClick?: () => void
}

export default function Text({
	As = 'p',
	children,
	onClick = () => {},
}: Props) {
	const StyledText = styled(As)`
		color: ${(args) => withTheme(args).colors.primary.text};
		font-size: 3em;
	`
	return <StyledText onClick={onClick}>{children}</StyledText>
}
