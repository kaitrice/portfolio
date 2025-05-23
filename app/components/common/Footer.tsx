import { getSocials } from '@/app/utils/socials'
import NavLink from './NavLink'
import { iconMap } from '@/app/utils/utils'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Footer() {
  const socials = getSocials()
  return (
    <footer className="border-t mt-6 py-6">
      <div className="order-none md:order flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">

        {/* Socials */}
				<div className="flex gap-6 md:order-2">
					{socials.map((social, index) => {
						const key = social.name.toLowerCase()
						const icon = iconMap[key as keyof typeof iconMap]

						const item = {
							url: social.url,
							name: <Icon icon={icon} width={24} height={24} />
						}

						return <NavLink key={index} item={item} />
					})}
				</div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Kaitlyn Rice. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
