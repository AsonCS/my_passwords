import NextLink from 'next/link'
import React from 'react'

export function Link(
	props: { 
		href: string; 
		children: React.ReactNode
	}
) {
	return (
		<NextLink passHref={true} prefetch={false} {...props}>
			{props.children}
		</NextLink>
	)
}
