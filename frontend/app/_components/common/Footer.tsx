import { IconLink } from './Icon'
import socials from "../../_data/socials.json"

export default function Footer() {

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
				&copy; {new Date().getFullYear()} Kaitlyn Rice. All rights reserved.
			</div>
		</footer>
	)
}
