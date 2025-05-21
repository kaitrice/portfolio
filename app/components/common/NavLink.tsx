import { NavLinkProps } from "../../type/NavItem"
import { Link } from "./Link"

export default function NavLink({ item }: NavLinkProps) {
  return (
    <Link
      href={item.url}
       className="hover:text-pink-600"
    >
      {item.name}
    </Link>
  )
}
