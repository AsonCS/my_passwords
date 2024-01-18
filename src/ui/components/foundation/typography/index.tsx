import React from 'react'
import styled from 'styled-components'

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
		color: black;
		font-size: 3em;
	`
	return <StyledText onClick={onClick}>{children}</StyledText>
}
