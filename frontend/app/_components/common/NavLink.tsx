import Link from "next/link"
import { NavItem } from "../../_utils/navItem.type"

export function NavLink({ item }: NavItem) {
  return (
    <Link aria-label={typeof item.name === 'string' ? item.name : 'Link'} href={item.url} className="hover:underline hover:underline-offset-4 transition hover:text-pink-600">
      {item.name}
    </Link>
  )
}