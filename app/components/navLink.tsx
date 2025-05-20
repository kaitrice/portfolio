import Link from "next/link"
import { NavLinkProps } from "../type/navItem"

export default function NavLink({ item, className = "" }: NavLinkProps) {
  return (
    <Link
      href={item.url}
      className={`hover:text-pink-600 hover:underline hover:underline-offset-6 transition-colors ${className}`}
    >
      {item.name}
    </Link>
  )
}
