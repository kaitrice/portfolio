import { NavItemType } from "@/app/_utils"
import Link from "next/link"

export function NavLink({ item }: NavItemType) {
  return (
    <Link aria-label={typeof item.name === 'string' ? item.name : 'Link'} href={item.url} className="hover:underline hover:underline-offset-4 transition hover:text-pink-600">
      {item.name}
    </Link>
  )
}