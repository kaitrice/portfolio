import { NavItem } from "../../type/navItem.type"
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
