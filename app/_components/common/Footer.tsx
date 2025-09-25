// 'use client'
import { IconLink } from './Icon'
import data from "../../_lang/en.json"

export default function Footer() {
	const socials = data.socials

	return (
		<footer className="border-t mt-6 py-6 order-none md:order flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
			{/* Socials */}
			<div className="flex gap-6 md:order-2">
				{socials.map((social, index) => (
					<IconLink key={index} link={social} />
				))}
			</div>

			{/* Copyright */}
			<div className="text-sm text-center md:text-left">
				&copy; {new Date().getFullYear()} {data.footer.content}
			</div>
		</footer>
	)
}
