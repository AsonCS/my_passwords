import React from 'react'

export interface Props {
	As?: 'h1' | 'h2' | 'h3' | 'p' | 'label'
	children: React.ReactNode
}

export default function Text({ As = 'p', children }: Props) {
	return <As>{children}</As>
}
