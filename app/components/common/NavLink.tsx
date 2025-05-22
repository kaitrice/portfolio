import { NavItem } from "../../type/navItem"
import { Link } from "./Link"

export default function NavLink({ item }: NavItem) {
  return (
    <Link
      href={item.url}
       className="hover:text-pink-600"
    >
      {item.name}
    </Link>
  )
}
