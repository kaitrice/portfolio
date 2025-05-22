import DefaultLink from 'next/link'
import { LinkProps } from '../../type/link.type'

export function Link({ href, children, className = '' }: LinkProps) {
	return (
		<DefaultLink
			href={href}
			className={`hover:underline hover:underline-offset-4 transition ${className}`}
		>
			{children}
		</DefaultLink>
	)
}
