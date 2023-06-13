import React from 'react'
import { styled } from 'styled-components'

type PropAs = 'h1' | 'h2' | 'h3' | 'p' | 'label'

export interface Props {
	As?: PropAs
	children: React.ReactNode
}

export default function Text({ As = 'p', children }: Props) {
	const Tag = styled[As]`
		color: --primary-text;
		font-size: 3em;
	`
	return <Tag>{children}</Tag>
	// return <As style={{ color: 'var(--primary-text)' }}>{children}</As>
}
