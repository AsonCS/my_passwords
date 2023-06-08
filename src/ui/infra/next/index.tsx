import NextLink from 'next/link'
import React from 'react'

export function Link(props: {
	href: string
	children: React.ReactNode
	props: any
}) {
	return (
		<NextLink
			href={props.href}
			passHref={true}
			prefetch={false}
			{...props.props}
		>
			{props.children}
		</NextLink>
	)
}
